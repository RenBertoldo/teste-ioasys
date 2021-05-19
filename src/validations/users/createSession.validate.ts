import Joi from 'joi';
import { CreateSessionDTO } from '../../dtos/users';
import { ApplicationError } from '../../utils';

export default async ({ password, email, }: CreateSessionDTO): Promise<void> => {

  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
  
    await schema.validateAsync({
      password, email,
    });
  } catch (error) {
    throw new ApplicationError(error.details);
  }
  
}