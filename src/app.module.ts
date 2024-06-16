import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user-module/user.module';
import { PostModule } from './post-module/Post.module';
import { CategoryModule } from './category-module/Category.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
  }),MongooseModule.forRoot('mongodb+srv://mongodb:mongodb@cluster1.gvnsbx8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'), UserModule, PostModule, CategoryModule, AuthModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }, AppService],
})
export class AppModule {}
