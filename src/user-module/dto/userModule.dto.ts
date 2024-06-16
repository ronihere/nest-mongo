import { Type } from "class-transformer"
import { IsDefined, IsEmail, IsOptional, IsStrongPassword, IsUrl, MinLength, ValidateNested } from "class-validator"

class CreateUserSettingDto {
    @IsDefined()
    @MinLength(10)
    address: string

    @IsUrl()
    @IsDefined()
    url: string
}
export class CreateUserDto {
    @IsDefined()
    username: string

    @IsEmail()
    email: string

    @IsDefined()
    password: string
    
    @IsOptional()
    @ValidateNested()
    @Type(() => CreateUserSettingDto)
    userSetting?: CreateUserSettingDto
}
