# Construcciones Velazquez Mann

## Servicios de Construcción y Remodelación

Somos una empresa dedicada a la construcción y remodelación de espacios, comprometidos con la calidad y la satisfacción de nuestros clientes.

**Nuestros Servicios:**
- Construcción de Viviendas
- Obras Comerciales
- Remodelaciones
- Piscinas y Espacios Verdes
- Instalaciones Eléctricas
- Albañilería General

## Contacto

**Teléfono/WhatsApp:** +54 9 11 4028-9266  
**Dirección:** Sardi 136, Monte Grande, Buenos Aires  
**Email:** info@construccionesvelazquezmann.com  
**Horario:** Lun - Vie: 8:00 - 18:00

## Desarrollo

Para ejecutar el proyecto localmente:

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
