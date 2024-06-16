import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';
import { Public } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() signIn : SignInDto) {
        return await this.authService.signIn(signIn.email, signIn.password);
    }

    // @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
