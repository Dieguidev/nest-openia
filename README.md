<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🧠 Nest-GPT: API de Corrección Ortográfica y Gramatical con OpenAI

## Descripción

Nest-GPT es una API RESTful desarrollada con [NestJS](https://nestjs.com/) que utiliza la inteligencia artificial de OpenAI.

## Características

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

- **POST** `/gpt/orthography-check`

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

### Endpoint de Pros y Contras (Respuesta Completa)

- **POST** `/gpt/pros-cons-discusser`

Este endpoint recibe una pregunta y responde con una lista de pros y contras en formato markdown.

#### Body (JSON):

```json
{
  "prompt": "¿Cuáles son los pros y contras de usar inteligencia artificial en la educación?"
}
```

#### Respuesta de ejemplo:

```markdown
**Pros:**

- Personalización del aprendizaje
- Acceso a recursos 24/7

**Contras:**

- Dependencia tecnológica
- Posibles sesgos en los algoritmos
```

### Endpoint de Pros y Contras (Streaming)

- **POST** `/gpt/pros-cons-discusser-stream`

Este endpoint permite obtener una respuesta en streaming con los pros y contras de una pregunta, utilizando el modelo de OpenAI. La respuesta se entrega en formato markdown y se transmite en tiempo real.

#### Body (JSON):

```json
{
  "prompt": "¿Cuáles son los pros y contras de usar inteligencia artificial en la educación?"
}
```

#### Respuesta de ejemplo (streaming):

La respuesta se recibe en fragmentos, en formato markdown, por ejemplo:

```markdown
**Pros:**

- Personalización del aprendizaje
- Acceso a recursos 24/7

**Contras:**

- Dependencia tecnológica
- Posibles sesgos en los algoritmos
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

---

Actualizado: Ahora la API no solo corrige textos, sino que también responde preguntas con pros y contras, ofreciendo tres endpoints principales para cubrir diferentes necesidades de análisis y feedback inteligente.
