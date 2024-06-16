import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Category, categorySchema } from "src/Schema/Category.schema";
import { Post, PostSchema } from "src/Schema/Post.schema";
import { CategoryController } from "./Category.controller";
import { CategoryService } from "./Category.service";


@Module({
    imports: [MongooseModule.forFeature([
        {
            name: Category.name,
            schema: categorySchema
        },
        {
            name: Post.name,
            schema: PostSchema
        }
    ])],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule { }
