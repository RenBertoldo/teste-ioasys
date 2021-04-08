import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { buildResponse } from '../../helpers';

import { PeopleRepository, MoviesDirectorsRepository, MoviesRepository } from '../../repositories/implementations';
import { CreateMovieActorService } from '../../services/movies';

export default class MoviesActorsController {
  public async create(request: Request, response: Response): Promise<Object | void> {

    try {
      const moviesDirectorsRepository = new MoviesDirectorsRepository();
      const moviesRepository = new MoviesRepository();
      const peopleRepository = new PeopleRepository();
      const {
        movie_id, person_id,
      } = request.body;
      const createMovieActorService = new CreateMovieActorService(
        moviesDirectorsRepository,
        moviesRepository,
        peopleRepository,
      );
      const movieActor = await createMovieActorService.execute({
        movie_id, person_id,
      });
      return buildResponse(response, { body: classToClass(movieActor), statusCode: StatusCodes.CREATED });
    } catch (error) {
      return buildResponse(response, error);
    }

  }
}
