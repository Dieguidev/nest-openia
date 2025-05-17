import { Injectable } from '@nestjs/common';
import { ortographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './dtos';

@Injectable()
export class GptService {
  async ortographyCheck(orthographyDto: OrthographyDto) {
    const { prompt } = orthographyDto;
    return await ortographyCheckUseCase({ prompt });
  }
}
