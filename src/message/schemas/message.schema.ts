import { Schema } from 'mongoose';

export const MessageSchema = new Schema({  
  message: String,
  authorName: String,
  createdDate: Date 
});
