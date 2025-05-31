import { Injectable } from '@nestjs/common';
import {
  ortographyCheckUseCase,
  prosConsDicusserUseCase,
  prosConsDiscusserStreamUseCase,
  translateUseCase,
} from './use-cases';
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

  async prosConsDiscusserStream(prosConsDiscusserDto: ProsConsDiscusserDto) {
    const { prompt } = prosConsDiscusserDto;
    return await prosConsDiscusserStreamUseCase(this.openai, { prompt });
  }

  async translate(translateDto: { prompt: string; lang: string }) {
    const { prompt, lang } = translateDto;

    return await translateUseCase(this.openai, {
      prompt,
      lang,
    });
  }
}
