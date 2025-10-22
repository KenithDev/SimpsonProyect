# 📚 Ejemplos de Uso de la API

Esta carpeta contiene componentes de ejemplo que muestran cómo usar los diferentes hooks de la API de Los Simpsons.

## 📁 Archivos de Ejemplo

### `CharacterExample.tsx`
Ejemplos de uso de los hooks de personajes:

- **AllCharacters**: Lista completa de personajes con grid responsivo
- **CharacterSearch**: Buscador en tiempo real de personajes
- **CharacterList**: Lista compacta con manejo de estados

**Hooks demostrados:**
- `useCharacters()`
- `useSearchCharacters(query)`

### `EpisodeExample.tsx`
Ejemplos de uso de los hooks de episodios:

- **AllEpisodes**: Lista completa con filtro por temporada
- **SeasonEpisodes**: Episodios de una temporada específica
- **AdvancedEpisodeSearch**: Buscador con debouncing

**Hooks demostrados:**
- `useEpisodes()`
- `useEpisodesBySeason(seasonNumber)`
- `useSearchEpisodes(query)`

## 🚀 Cómo usar estos ejemplos

### Opción 1: Importar directamente en tu componente

```tsx
import { CharacterSearch } from '@/api/examples/CharacterExample';

function MiPagina() {
  return (
    <div>
      <CharacterSearch />
    </div>
  );
}
```

### Opción 2: Copiar el código y adaptarlo

1. Abre el archivo de ejemplo que te interesa
2. Copia el componente que necesitas
3. Pégalo en tu propio archivo
4. Adapta el estilo y funcionalidad a tus necesidades

### Opción 3: Usar como referencia

Lee el código para entender cómo:
- Manejar estados de loading y error
- Implementar búsquedas
- Estructurar componentes que consumen la API
- Aplicar estilos con Tailwind CSS

## 💡 Tips

1. **Manejo de Loading**: Siempre muestra un indicador visual cuando `loading` es `true`
2. **Manejo de Errores**: Proporciona feedback claro cuando hay un error
3. **Debouncing**: Para búsquedas en tiempo real, usa debouncing para evitar muchas peticiones
4. **Refetch**: Usa la función `refetch` para permitir al usuario reintentar en caso de error

## 🎨 Estilos

Los ejemplos usan Tailwind CSS, pero puedes adaptarlos a:
- CSS Modules
- Styled Components
- Emotion
- Tu librería de estilos preferida

## 🔗 Ver también

- Documentación completa: `../README.md`
- Tipos disponibles: `../types/index.ts`
- Todos los hooks: `../hooks/useSimpsons.ts`
- Servicios: `../services/simpsons.service.ts`

## ✨ Ejemplos implementados en el proyecto

El componente **ChatBotSection** (`src/organism/ChatBotSection/index.tsx`) es un ejemplo real y funcional que ya está implementado en el proyecto. Revísalo para ver cómo se integra con el diseño existente.

