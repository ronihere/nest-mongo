import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSetting } from "./UserSettings.schema";
import { Post } from "./Post.schema";

@Schema()
export class User{
    
    @Prop({unique : true, required : true})
    username: string

    @Prop({unique: true , required: true})
    email: string
    
    @Prop()
        password: string
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSetting' })
    settings?: UserSetting 

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
    posts: Post[]
}


export const UserSchema = SchemaFactory.createForClass(User);