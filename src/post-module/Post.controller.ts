import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { PostService } from "./Post.service";
import { PostDetailsDto } from "./dto/Post.dto";

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) { }
    

    @Get(':id')
    async getPostsOfUser(@Param('id') userId: string) {
        return await this.postService.getPostsOfAUser(userId);
    }

    @Post(':id')
    async createPost(@Body() postDetails: PostDetailsDto, @Param('id') userId: string) {
        return await this.postService.createPost(userId ,postDetails);
    }
}