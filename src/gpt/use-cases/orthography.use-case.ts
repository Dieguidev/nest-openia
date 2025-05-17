import { envs } from 'src/config/envs';

interface Options {
  prompt: string;
}

export const ortographyCheckUseCase = async (options: Options) => {
  const { prompt } = options;
  return {
    prompt,
    apiKey: envs.openAiApiKey,
  };
};
