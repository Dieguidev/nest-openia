import OpenAI from 'openai';

interface Options {
  prompt: string;
  lang: string;
}

export const translateUseCase = async (
  openai: OpenAI,
  { prompt, lang }: Options,
) => {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `Traduce el siguiente texto al idioma ${lang}:${prompt}
          Responde solo con el texto traducido, sin explicaciones ni comentarios adicionales. No incluyas el texto original en la respuesta.
          Asegúrate de que la traducción sea precisa y natural. No uses jerga ni lenguaje técnico a menos que sea necesario para el contexto.
        `,
      },
    ],
    temperature: 0.2,
    model: 'gpt-3.5-turbo',
    // stream: true,
  });

  return { message: response.choices[0].message.content };
};
