import { Document } from 'mongoose';

export interface Message extends Document {  
  message: string;
  authorName: string;
  createdDate: Date;  
}
