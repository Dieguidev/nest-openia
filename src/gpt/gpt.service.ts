import * as path from 'path';
import * as fs from 'fs';

import { Injectable, NotFoundException } from '@nestjs/common';
import {
  ortographyCheckUseCase,
  prosConsDicusserUseCase,
  prosConsDiscusserStreamUseCase,
  textToAudioUseCase,
  translateUseCase,
  translateUseCaseStream,
} from './use-cases';
import {
  OrthographyDto,
  ProsConsDiscusserDto,
  TextToAudioDto,
  TranslateDto,
} from './dtos';
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

  async translate(translateDto: TranslateDto) {
    const { prompt, lang } = translateDto;

    return await translateUseCase(this.openai, {
      prompt,
      lang,
    });
  }

  async translateStream(translateDto: TranslateDto) {
    const { prompt, lang } = translateDto;

    return await translateUseCaseStream(this.openai, {
      prompt,
      lang,
    });
  }

  async textToAudio(textToAudioDto: TextToAudioDto) {
    const { prompt, voice } = textToAudioDto;

    return await textToAudioUseCase(this.openai, {
      prompt,
      voice,
    });
  }
  textToAudioGetter(fileId: string) {
    const folderPath = path.resolve(__dirname, '../../generated/audios');
    const speechFile = path.resolve(`${folderPath}/${fileId}.mp3`);

    if (!fs.existsSync(speechFile)) {
      throw new NotFoundException(`File ${fileId}.mp3 not found`);
    }
    return speechFile;
  }
}
