import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Post } from "src/Schema/Post.schema";
import { User } from "src/Schema/User.schema";
import { PostDetailsDto } from "./dto/Post.dto";


@Injectable()
export class PostService {
    constructor(@InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(Post.name) private postModel: Model<Post>
    ) { }

    async createPost(userId: string, postDetails: PostDetailsDto) {
        // const validUserId = mongoose.Types.ObjectId.isValid(userId);
        // if (!validUserId) {
        //     throw new HttpException(`Invalid user id: ${userId}`, HttpStatus.BAD_REQUEST)
        // }
        const user = await this.userModel.findById(userId);
        if (!user) {
            throw new HttpException(`User doesn't exists`, HttpStatus.BAD_REQUEST)
        }
        const newPost = await (new this.postModel(postDetails)).save();
        return user.updateOne({
            $push: {
                posts: newPost._id
            }
        })
    }

    async getPostsOfAUser(userId: string) {
        const user = (await this.userModel.findById(userId)).populate('posts');
        if (!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
        return (await user).posts;
    }
    
}