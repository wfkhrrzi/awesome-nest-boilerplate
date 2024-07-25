import { ClassField } from '@/decorators';
import { UserDto } from '@/modules/user-v2/dtos/user.dto';
import { TokenPayloadDto } from './token-payload.dto';

export class LoginPayloadDto {
  @ClassField(() => UserDto)
  user: UserDto;

  @ClassField(() => TokenPayloadDto)
  token: TokenPayloadDto;

  constructor(user: UserDto, token: TokenPayloadDto) {
    this.user = user;
    this.token = token;
  }
}