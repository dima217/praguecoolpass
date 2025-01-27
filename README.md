# React 18.3.1 + TypeScript + Vite

## 🛠 TypeScript Configuration

### Architectural Decisions
- **Strict Typing**: Enabled strict mode with additional linting rules
- **Vite Optimization**: Settings for compatibility with modern bundler
- **Module Isolation**: Ensures safety during tree-shaking

### Key tsconfig Parameters
| Parameter | Value | Purpose |
|----------|----------|------------|
| `target` | ES2022 | Compliance with latest ECMAScript specifications |
| `module` | ESNext | Native support for Vite's dynamic imports |
| `lib` | ES2023 | Modern API polyfills (e.g. `Array.prototype.findLast`) |
| `moduleResolution` | bundler | Optimized for Vite/Rollup workflow |
| `noUnusedLocals` | true | Error on unused local variables |

### Implementation Details
```typescript
{
  "compilerOptions": {
    "allowImportingTsExtensions": true, // Allows importing .ts files without extension
    "isolatedModules": true, // Prevents side-effects during transpilation
    "moduleDetection": "force", // Explicit module system detection
    "noEmit": true // Type-check only (code generation handled by Vite)
  }
}

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property 
- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:


## Tailwind CSS

`postcss.config.js` - plugin configuration for cross-browser compatibility


