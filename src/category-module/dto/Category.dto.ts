import { IsDefined, IsOptional } from "class-validator"

export class CreateCategoryDto{
    @IsDefined()
    title: string

    @IsOptional()
    description ?: string
}