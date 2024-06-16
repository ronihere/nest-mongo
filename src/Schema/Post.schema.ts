import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Category } from "./Category.schema";
@Schema()
export class Post {

    @Prop({ unique: true, required: true })
    title: string

    @Prop({ unique: true, required: true })
    description: string

    @Prop({type : [{type : mongoose.Schema.Types.ObjectId, ref: 'Category'}]})
    categories : Category[]
}


export const PostSchema = SchemaFactory.createForClass(Post);