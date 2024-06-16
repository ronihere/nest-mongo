import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Post } from "./Post.schema";
import mongoose from "mongoose";
@Schema()
export class Category {
    @Prop({ unique: true, required: true })
    title: string

    @Prop()
    description?: string

    @Prop({type : [{type : mongoose.Schema.Types.ObjectId , ref: 'Post'}]})
    posts: Post[] 
}


export const categorySchema = SchemaFactory.createForClass(Post);