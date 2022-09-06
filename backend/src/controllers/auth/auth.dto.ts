import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbXMiO...eWNlpYQGTV5h8JXuzSYWE',
  })
  access_token: string;
  @ApiProperty({
    description: 'refresh token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbXMiO...eWNlpYQGTV5h8JXuzSYWE',
  })
  refresh_token: string;
}

export class RefreshTokenDto extends LoginDto {}

export class LoginExecDto {
  @ApiProperty({ description: 'ログインID', example: 'user' })
  loginId: string;
  @ApiProperty({ description: 'パスワード', example: 'admin' })
  password: string;
}
