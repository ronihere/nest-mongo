import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/Category.dto";
import { CategoryService } from "./Category.service";

@Controller('category')
export class CategoryController{
    constructor(private readonly categoryService: CategoryService) { }
    
    @Get()
    async getAllCategories() {
        return await this.categoryService.getAllCategories();
    }

    @Post()
    async createCategory(@Body() categoryDetails: CreateCategoryDto) {
        return await this.categoryService.createCategory(categoryDetails);
    }
}