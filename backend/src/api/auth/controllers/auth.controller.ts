import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('test')
  test() {
    return 'Get all items';
  }

  /**
   * POST /auth/login
   * @param loginDto
   * @returns
   */
  @Post('login')
  login(@Body() loginDto: { username: string; password: string }) {
    if (loginDto.username === 'test' && loginDto.password === 'password') {
      return { message: 'Login successful' };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}
