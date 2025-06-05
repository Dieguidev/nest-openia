<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🧠 Nest-GPT: API de Corrección, Pros/Contras, Traducción y Audio con OpenAI

## Descripción

Nest-GPT es una API RESTful desarrollada con [NestJS](https://nestjs.com/) y TypeScript que utiliza la inteligencia artificial de OpenAI para:

- Corregir textos en español (ortografía y gramática)
- Analizar preguntas y responder con pros y contras (en respuesta completa o streaming)
- Traducir textos a cualquier idioma (respuesta completa o streaming)
- Convertir texto a audio con diferentes voces (síntesis de voz)

El sistema está diseñado para ser seguro, escalable y fácil de integrar en cualquier frontend moderno.

## Características principales

- Corrección ortográfica y gramatical avanzada usando OpenAI GPT-3.5 Turbo
- Análisis de pros y contras en formato markdown
- Traducción de textos a cualquier idioma
- Síntesis de voz con múltiples opciones de voces usando OpenAI TTS
- Endpoints con soporte para streaming (respuestas progresivas)
- Sistema de almacenamiento y recuperación de archivos de audio
- Validación robusta de datos de entrada con `class-validator`
- Configuración segura de variables de entorno con Joi
- Arquitectura modular y escalable basada en buenas prácticas de NestJS

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/Dieguidev/nest-openia
   cd nest-gpt
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   PORT=3000
   OPENAI_API_KEY=tu_clave_de_openai
   ```
4. **Inicia el servidor:**
   ```bash
   npm run start:dev
   ```

## Endpoints Disponibles

### 1. Corrección Ortográfica

- **POST** `/gpt/orthography-check`
  Corrige errores ortográficos y gramaticales en textos en español, devolviendo sugerencias, puntaje y mensaje motivacional.

**Body (JSON):**

```json
{
  "prompt": "Texto a corregir",
  "maxTokens": 150 // Opcional
}
```

**Respuesta de ejemplo:**

```json
{
  "userScore": 90,
  "errors": ["ortografia -> ortografía"],
  "message": "¡Excelente trabajo! 🎉 Solo un pequeño error."
}
```

### 2. Pros y Contras

- **POST** `/gpt/pros-cons-discusser`
  Recibe una pregunta y responde con una lista de pros y contras en formato markdown.

**Body (JSON):**

```json
{
  "prompt": "¿Cuáles son los pros y contras de usar inteligencia artificial en la educación?"
}
```

**Respuesta de ejemplo:**

```markdown
**Pros:**

- Personalización del aprendizaje
- Acceso a recursos 24/7

**Contras:**

- Dependencia tecnológica
- Posibles sesgos en los algoritmos
```

#### Pros y Contras en Streaming

- **POST** `/gpt/pros-cons-discusser-stream`
  Recibe una pregunta y responde en streaming con los pros y contras en formato markdown, permitiendo mostrar la respuesta en tiempo real.

**Body (JSON):**

```json
{
  "prompt": "¿Cuáles son los pros y contras de usar inteligencia artificial en la educación?"
}
```

### 3. Traducción

- **POST** `/gpt/translate`
  Traduce un texto al idioma especificado.

**Body (JSON):**

```json
{
  "prompt": "Texto a traducir",
  "lang": "en"
}
```

**Respuesta de ejemplo:**

```json
{
  "message": "Translated text here."
}
```

#### Traducción en Streaming

- **POST** `/gpt/translate-stream`
  Traduce un texto al idioma especificado y entrega la respuesta en tiempo real (streaming).

**Body (JSON):**

```json
{
  "prompt": "Texto a traducir",
  "lang": "en"
}
```

### 4. Conversión de Texto a Audio

- **POST** `/gpt/text-to-audio`
  Convierte un texto en un archivo de audio MP3 usando diferentes voces disponibles.

**Body (JSON):**

```json
{
  "prompt": "Texto para convertir a audio",
  "voice": "nova" // Opcional (Valores disponibles: nova, alloy, ash, ballad, coral, echo, fable, onyx, sage, shimmer, verse)
}
```

**Respuesta:**
El endpoint devuelve directamente el archivo de audio MP3 generado, con el header `Content-Type: audio/mp3`.

- **GET** `/gpt/text-to-audio/:fileId`
  Recupera un archivo de audio previamente generado por su ID.

**Respuesta:**
El endpoint devuelve el archivo de audio MP3 solicitado, con el header `Content-Type: audio/mp3`.

## Estructura del Proyecto

```
src/
  app.module.ts
  main.ts
  config/
    envs.ts
  gpt/
    gpt.controller.ts
    gpt.module.ts
    gpt.service.ts
    dtos/
      orthography.dto.ts
      prosconsDiscusser.dto.ts
      translate.dto.ts
      text-to-audio.dto.ts
    use-cases/
      orthography.use-case.ts
      prosConsDicusser.use-case.ts
      pros-cons-discusser-stream.use-case.ts
      translate.use-case.ts
      translate-stream.use-case.ts
      text-to-audio.use-case.ts
generated/
  audios/             # Almacenamiento de archivos de audio generados
```

## Pruebas

Ejecuta las pruebas end-to-end con:

```bash
npm run test:e2e
```

## Buenas Prácticas y Seguridad

- Validación estricta de variables de entorno con Joi
- Uso de `ValidationPipe` global para sanitizar y validar datos de entrada
- Manejo seguro de la clave de OpenAI mediante variables de entorno

## Contribución

¡Las contribuciones son bienvenidas! Por favor, abre un issue o pull request para sugerencias o mejoras.

## Licencia

[MIT](LICENSE)

---

Desarrollado con ❤️ por tu equipo de Dieguidev.
