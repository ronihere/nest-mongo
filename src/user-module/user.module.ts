import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/Schema/User.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSetting, UserSettingsSchema } from 'src/Schema/UserSettings.schema';

@Module({
    imports: [MongooseModule.forFeature([
        {
        name: User.name,
        schema: UserSchema
        },
        {
            name: UserSetting.name,
            schema : UserSettingsSchema
        }
    ])],
    providers: [UserService],
    controllers: [UserController],
    exports:[UserService]
})
export class UserModule {}
