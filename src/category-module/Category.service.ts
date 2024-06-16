import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "src/Schema/Post.schema";

import { Category } from "src/Schema/Category.schema";
import { CreateCategoryDto } from "./dto/Category.dto";


@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<Category>,
        @InjectModel(Post.name) private postModel: Model<Post>
    ) { }

    async createCategory(categoryDetails: CreateCategoryDto) {
        const isDuplicate = await this.categoryModel.find({
            $or: [
                { username: categoryDetails.title }
            ]
        })
        if (isDuplicate) {
            throw new HttpException(`Category "${categoryDetails.title}" already exists`, HttpStatus.CONFLICT)
        }
        return (new this.categoryModel(categoryDetails)).save();
    }
    getAllCategories() {
        return this.categoryModel.find({})
    }


}