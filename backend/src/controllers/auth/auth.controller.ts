import { Controller, Post, Req } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto, LoginExecDto } from 'controllers/auth/auth.dto';

@ApiTags('auth')
@Controller()
export class AuthController {
  @Post('login')
  @ApiBody({ type: LoginExecDto })
  @ApiResponse({ type: LoginDto })
  login(@Req() req: any) {
    return {};
  }
}
