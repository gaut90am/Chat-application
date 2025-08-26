import { StreamChat } from "stream-chat";
import dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.STEAM_API_KEY;
const apiSecret = process.env.STEAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    console.log(userData)
    return userData;
  } catch (error) {
    console.error("Error creating Stream user",err);
    throw err;
  }
};

export const generateStreamToken = (userId) => {
  try {
// ensure userId is string 
const userIdStr=userId.toString();
return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};