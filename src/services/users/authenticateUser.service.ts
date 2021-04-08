import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../../config/auth';
import { ApplicationError } from '../../utils';
import { User } from '../../models';
import { IUsersRepository } from '../../repositories/interfaces';
import { createSessionValidation } from '../../validations/users';

interface IRequest {
  email: string,
  password: string
}

interface IResponse {
  user: User,
  token: string
}

class AuthenticateUserService {
  constructor(
        private usersRepository: IUsersRepository,
  ) { }
  public async execute({ email, password } : IRequest): Promise<IResponse> {

    await createSessionValidation({ email, password });

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new ApplicationError('Invalid email and password combination', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new ApplicationError('Invalid email and password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ }, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
