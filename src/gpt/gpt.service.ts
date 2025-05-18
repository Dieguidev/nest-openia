import { Injectable } from '@nestjs/common';
import { ortographyCheckUseCase, prosConsDicusserUseCase } from './use-cases';
import { OrthographyDto, ProsConsDiscusserDto } from './dtos';
import { envs } from 'src/config/envs';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: envs.openAiApiKey,
  });

  async ortographyCheck(orthographyDto: OrthographyDto) {
    const { prompt } = orthographyDto;
    return await ortographyCheckUseCase(this.openai, { prompt });
  }

  async prosConsDiscusser(prosConsDiscusserDto: ProsConsDiscusserDto) {
    const { prompt } = prosConsDiscusserDto;
    return await prosConsDicusserUseCase(this.openai, { prompt });
  }
}
