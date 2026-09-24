# Gifs App

Aplicación frontend para buscar y explorar GIFs en tiempo real utilizando la API de Giphy. Este proyecto refleja mi capacidad para construir interfaces modernas, consumir APIs externas, estructurar lógica de negocio y escribir pruebas confiables con React y TypeScript.

## Descripción del proyecto

Gifs App es una aplicación de búsqueda de GIFs diseñada para ofrecer una experiencia rápida, intuitiva y visualmente clara. Permite al usuario ingresar una palabra clave, consultar resultados en tiempo real y reutilizar búsquedas previas sin necesidad de escribir nuevamente el término.

El proyecto está desarrollado con una arquitectura modular y componentes reutilizables, apostando por buenas prácticas de mantenibilidad, separación de responsabilidades y escalabilidad. También incluye pruebas unitarias para validar el comportamiento principal de la aplicación y asegurar la calidad del código.

## Objetivo

Demostrar habilidades en:

- Desarrollo de interfaces con React
- Tipado fuerte con TypeScript
- Consumo de APIs REST
- Manejo de estado y hooks personalizados
- Diseño de componentes reutilizables
- Testing de aplicaciones frontend
- Organización de proyectos para entornos profesionales

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Axios
- Vitest
- Testing Library
- CSS

## Funcionalidades

- Búsqueda de GIFs por palabra clave
- Carga dinámica de resultados desde la API de Giphy
- Historial de búsquedas recientes
- Interacción con búsquedas previas
- Componentes reutilizables y modularizados
- Pruebas unitarias y de integración para hooks y componentes
- Estructura optimizada para crecimiento del proyecto

## Estructura del proyecto

```bash
src/
├── gifs/
│   ├── actions/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   └── interfaces/
├── shared/
│   └── components/
├── mock-data/
├── GifsApp.tsx
├── main.tsx
├── index.css
└── ...
```

## Requisitos

- Node.js 18+
- npm o pnpm

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/gifs-app.git
```

2. Accede al proyecto:
```bash
cd gifs-app
```

3. Instala las dependencias:
```bash
pnpm install
```

## Ejecución

```bash
pnpm dev
```

Esto levantará la aplicación en modo de desarrollo con Vite.

## Scripts disponibles

```bash
pnpm dev       # Ejecuta la aplicación en desarrollo
pnpm build     # Genera la versión de producción
pnpm preview   # Previsualiza la build generada
pnpm test      # Ejecuta pruebas con Vitest
pnpm coverage  # Genera reporte de cobertura
pnpm lint      # Ejecuta análisis estático
```

## Testing

El proyecto incluye pruebas para validar la lógica principal, hooks personalizados y componentes de la interfaz. Esto demuestra atención a la calidad del código y la robustez de la aplicación.

```bash
pnpm test
```

## Aprendizajes y enfoque del proyecto

Este proyecto forma parte de una ruta de aprendizaje enfocada en React moderno y buenas prácticas de frontend. A lo largo del desarrollo se aplicaron conceptos esenciales como:

- Componentización
- Manejo de props y estados
- Hooks personalizados
- Consumo de APIs con async/await
- Testing frontend con Vitest + Testing Library
- Organización del código para proyectos profesionales

## Autor

Jordy Tirado Torres 
LinkedIn: [https://linkedin.com/in/tu-perfil](https://www.linkedin.com/in/jordytiradotorres-developer/)
