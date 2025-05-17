import OpenAI from 'openai';

interface Options {
  prompt: string;
}

type OrthographyResponse = {
  userScore: number;
  errors: string[];
  message: string;
};

export const ortographyCheckUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt } = options;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
          Te serán proveidos textos en español con posibles errores ortograficos y gramaticales.
          Las palabras usadas deben de existir en el diccionario de la Real Academia Española.
          Debes de responder en formato JSON,
          tu tarea es corregirlos y retornar informacion soluciones,
          tambien debes dar un pocentaje de acierto por el usuario

          Si no hay errores, deber de retornar un mensaje de felicitaciones

          Ejemplo de salida:
          {
            userScore: number,
            errors: string[], //['error -> solucion']
            message: string, // Usa emojis y texto para felicitar al usuario
          }
        `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.3,
    max_tokens: 150,
    response_format: {
      type: 'json_object',
    },
  });

  if (
    completion.choices.length === 0 ||
    !completion.choices[0]?.message?.content
  ) {
    throw new Error('No response from OpenAI');
  }

  const jsonResp = JSON.parse(
    completion.choices[0].message.content,
  ) as OrthographyResponse;

  return jsonResp;
};
