import { IsDefined, IsOptional, MinLength } from "class-validator";

export class PostDetailsDto{
    @IsDefined()
    @MinLength(10)
    title: string

    @IsDefined()
    @MinLength(50)
    description: string
    
    @IsOptional()
    categories: string[]
}