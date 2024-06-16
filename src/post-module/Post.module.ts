import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "src/Schema/Post.schema";
import { User, UserSchema } from "src/Schema/User.schema";
import { PostController } from "./Post.controller";
import { PostService } from "./Post.service";

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: User.name,
            schema: UserSchema
        },
        {
            name: Post.name,
            schema:  PostSchema
        }
    ])],
    controllers: [PostController],
    providers:[PostService]
})
export class PostModule { }
