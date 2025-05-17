import OpenAI from 'openai';
import { envs } from 'src/config/envs';

interface Options {
  prompt: string;
}

export const ortographyCheckUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt } = options;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `Please check the following text for spelling and grammar errors, and provide a corrected version:\n\n${prompt}`,
      },
      {
        role: 'user',
        content: `Please check the following text for spelling and grammar errors, and provide a corrected version:\n\n${prompt}`,
      },
    ],
    model: 'gpt-3.5-turbo',
    // temperature: 0,
  });

  return {
    response: completion.choices[0],
  };
};
