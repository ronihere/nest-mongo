import { HttpException, HttpStatus, Injectable, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/Schema/User.schema";
import { CreateUserDto } from "./dto/userModule.dto";
import { UserSetting } from "src/Schema/UserSettings.schema";

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(UserSetting.name) private userSettingsModel : Model <UserSetting>
    ) { }
    
    async createUser({ userSetting, ...userDetail }: CreateUserDto) {
        const duplicateUser = await this.userModel.findOne({
            $or: [
                { username : userDetail.username },
                { email : userDetail.email }
            ]
        })
        if (duplicateUser) {
            throw new HttpException('username & email should be unique', HttpStatus.CONFLICT);
        }
        if (userSetting) {
            const createdUserSettings = new this.userSettingsModel(userSetting);
            const savedUserSettings = await createdUserSettings.save();
            const newUser = new this.userModel({
                ...userDetail,
                settings: savedUserSettings._id
            })
            return newUser.save()
        }
        const newUser = new this.userModel(userDetail);
        return newUser.save();
    }

    getAllUsers() {
        return this.userModel.find().populate(['posts','settings']);
    }

    getUserById(id: string) {
        return this.userModel.findById(id);
    }

    async findByEmail(email: string) {
        return await this.userModel.findOne({ email: { $eq: email } }).lean();
    }
}