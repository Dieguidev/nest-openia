<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🧠 Nest-GPT: API de Corrección Ortográfica y Gramatical con OpenAI

## Descripción

Nest-GPT es una API RESTful desarrollada con [NestJS](https://nestjs.com/) que utiliza la inteligencia artificial de OpenAI para analizar, corregir y calificar textos en español. El sistema detecta errores ortográficos y gramaticales, sugiere correcciones y proporciona retroalimentación personalizada, incluyendo un puntaje de acierto y mensajes motivacionales.

## Características

- Corrección ortográfica y gramatical avanzada usando OpenAI GPT-3.5 Turbo.
- Respuestas estructuradas en formato JSON.
- Validación robusta de datos de entrada con `class-validator`.
- Configuración segura de variables de entorno.
- Arquitectura modular y escalable basada en buenas prácticas de NestJS.

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

## Uso de la API

### Endpoint de Corrección Ortográfica

- **POST** `/gpt/orthography`

#### Body (JSON):

```json
{
  "prompt": "Texto a corregir",
  "maxTokens": 150 // Opcional
}
```

#### Respuesta de ejemplo:

```json
{
  "userScore": 90,
  "errors": ["ortografia -> ortografía"],
  "message": "¡Excelente trabajo! 🎉 Solo un pequeño error."
}
```

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
    use-cases/
      orthography.use-case.ts
```

## Pruebas

Ejecuta las pruebas end-to-end con:

```bash
npm run test:e2e
```

## Buenas Prácticas y Seguridad

- Validación estricta de variables de entorno con Joi.
- Uso de `ValidationPipe` global para sanitizar y validar datos de entrada.
- Manejo seguro de la clave de OpenAI mediante variables de entorno.

## Contribución

¡Las contribuciones son bienvenidas! Por favor, abre un issue o pull request para sugerencias o mejoras.

## Licencia

[MIT](LICENSE)

---

Desarrollado con ❤️ por tu equipo de IA y NestJS.
