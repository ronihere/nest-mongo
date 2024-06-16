import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user-module/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/Schema/User.schema';
import { UserSetting, UserSettingsSchema } from 'src/Schema/UserSettings.schema';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.jwtconst,
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema
    },
      {
        name: UserSetting.name,
        schema: UserSettingsSchema
    }])
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtService]
})
export class AuthModule {}
