# 🍩 API de Los Simpsons - Documentación

Esta es la documentación completa para consumir la API de Los Simpsons en el proyecto.

## 📁 Estructura del Directorio

```
src/api/
├── config/
│   └── axios.config.ts      # Configuración de Axios
├── hooks/
│   └── useSimpsons.ts        # Hooks personalizados de React
├── services/
│   └── simpsons.service.ts   # Servicios de la API
├── types/
│   └── index.ts              # Tipos TypeScript
├── index.ts                  # Barrel export
└── README.md                 # Esta documentación
```

## 🚀 Configuración Inicial

### 1. Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
VITE_API_BASE_URL=https://api.sampleapis.com/simpsons
VITE_API_TIMEOUT=10000
```

### 2. Instalación de Dependencias

```bash
pnpm install
```

## 📚 Tipos Disponibles

### Character
```typescript
interface Character {
  id: number;
  name: string;
  normalized_name?: string;
  gender?: string;
}
```

### Episode
```typescript
interface Episode {
  id: number;
  name: string;
  season?: number;
  episode?: number;
  air_date?: string;
  description?: string;
  rating?: number;
  image_url?: string;
  thumbnail_url?: string;
}
```

### Product
```typescript
interface Product {
  id: number;
  name: string;
  description?: string;
  price?: number;
  image?: string;
}
```

## 🎣 Hooks Disponibles

### Personajes (Characters)

#### `useCharacters()`
Obtiene todos los personajes de Los Simpsons.

```tsx
import { useCharacters } from '@/api';

function MyComponent() {
  const { data, loading, error, refetch } = useCharacters();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.map(character => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}
```

#### `useCharacter(id: number)`
Obtiene un personaje específico por ID.

```tsx
import { useCharacter } from '@/api';

function CharacterDetail({ id }: { id: number }) {
  const { data, loading, error } = useCharacter(id);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data?.name}</div>;
}
```

#### `useSearchCharacters(query: string)`
Busca personajes por nombre.

```tsx
import { useSearchCharacters } from '@/api';

function SearchCharacters() {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useSearchCharacters(query);

  return (
    <div>
      <input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Buscar personaje..."
      />
      {loading && <div>Buscando...</div>}
      {data?.map(character => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}
```

### Episodios (Episodes)

#### `useEpisodes()`
Obtiene todos los episodios.

```tsx
import { useEpisodes } from '@/api';

function EpisodesList() {
  const { data, loading, error } = useEpisodes();

  if (loading) return <div>Cargando episodios...</div>;
  
  return (
    <div>
      {data?.map(episode => (
        <div key={episode.id}>
          <h3>{episode.name}</h3>
          <p>Temporada {episode.season}, Episodio {episode.episode}</p>
        </div>
      ))}
    </div>
  );
}
```

#### `useEpisode(id: number)`
Obtiene un episodio específico por ID.

```tsx
import { useEpisode } from '@/api';

function EpisodeDetail({ id }: { id: number }) {
  const { data, loading, error } = useEpisode(id);

  if (loading) return <div>Cargando...</div>;
  
  return (
    <div>
      <h2>{data?.name}</h2>
      <p>{data?.description}</p>
    </div>
  );
}
```

#### `useSearchEpisodes(query: string)`
Busca episodios por nombre o descripción.

```tsx
import { useSearchEpisodes } from '@/api';

function SearchEpisodes() {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useSearchEpisodes(query);

  return (
    <div>
      <input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Buscar episodio..."
      />
      {loading && <div>Buscando...</div>}
      {data?.map(episode => (
        <div key={episode.id}>{episode.name}</div>
      ))}
    </div>
  );
}
```

#### `useEpisodesBySeason(seasonNumber: number)`
Obtiene episodios de una temporada específica.

```tsx
import { useEpisodesBySeason } from '@/api';

function SeasonEpisodes({ season }: { season: number }) {
  const { data, loading, error } = useEpisodesBySeason(season);

  return (
    <div>
      <h2>Temporada {season}</h2>
      {data?.map(episode => (
        <div key={episode.id}>{episode.name}</div>
      ))}
    </div>
  );
}
```

### Productos (Products)

#### `useProducts()`
Obtiene todos los productos.

```tsx
import { useProducts } from '@/api';

function ProductsList() {
  const { data, loading, error } = useProducts();

  return (
    <div>
      {data?.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
```

#### `useProduct(id: number)`
Obtiene un producto específico por ID.

#### `useSearchProducts(query: string)`
Busca productos por nombre.

## 🛠️ Uso de Servicios Directos

Si prefieres no usar hooks, puedes llamar a los servicios directamente:

```tsx
import { simpsonsService } from '@/api';

async function fetchData() {
  try {
    const characters = await simpsonsService.getAllCharacters();
    const episodes = await simpsonsService.getAllEpisodes();
    const products = await simpsonsService.getAllProducts();
    
    console.log(characters, episodes, products);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## 🔧 Configuración Avanzada

### Modificar el Cliente Axios

Edita `src/api/config/axios.config.ts` para:
- Agregar autenticación (tokens)
- Modificar timeouts
- Agregar headers personalizados
- Cambiar el manejo de errores

### Agregar Nuevos Endpoints

1. Agrega los tipos en `src/api/types/index.ts`
2. Crea los métodos en `src/api/services/simpsons.service.ts`
3. Crea los hooks en `src/api/hooks/useSimpsons.ts`
4. Exporta en `src/api/index.ts`

## 📝 Ejemplos Completos

### Ejemplo 1: Lista de Personajes con Búsqueda

```tsx
import { useState } from 'react';
import { useSearchCharacters } from '@/api';

function CharacterSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error } = useSearchCharacters(searchTerm);

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar personajes..."
        className="p-2 border rounded"
      />
      
      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error.message}</p>}
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        {data?.map(character => (
          <div key={character.id} className="border p-4 rounded">
            <h3 className="font-bold">{character.name}</h3>
            <p className="text-gray-600">{character.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Ejemplo 2: Detalle de Episodio

```tsx
import { useEpisode } from '@/api';

function EpisodeDetail({ episodeId }: { episodeId: number }) {
  const { data: episode, loading, error, refetch } = useEpisode(episodeId);

  if (loading) {
    return <div className="animate-pulse">Cargando episodio...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500">
        <p>Error: {error.message}</p>
        <button onClick={refetch}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{episode?.name}</h1>
      <p className="text-gray-600">
        Temporada {episode?.season} - Episodio {episode?.episode}
      </p>
      <p className="mt-4">{episode?.description}</p>
      <p className="mt-2">
        Fecha de emisión: {episode?.air_date}
      </p>
      <p className="mt-2">Rating: ⭐ {episode?.rating}</p>
      {episode?.image_url && (
        <img 
          src={episode.image_url} 
          alt={episode.name}
          className="mt-4 rounded-lg"
        />
      )}
    </div>
  );
}
```

## 🐛 Manejo de Errores

Todos los hooks retornan un objeto con:
- `data`: Los datos de la API (null si no hay datos)
- `loading`: Estado de carga (boolean)
- `error`: Información del error (null si no hay error)
- `refetch`: Función para volver a hacer la petición

```tsx
const { data, loading, error, refetch } = useEpisodes();

if (error) {
  // Maneja el error
  console.error('Error:', error.message);
  
  // Opcionalmente reintentar
  return <button onClick={refetch}>Reintentar</button>;
}
```

## 📊 Logs de Consola

El cliente de API incluye logs detallados:
- 🚀 Request iniciado
- ✅ Response exitoso
- ❌ Errores

Revisa la consola del navegador para debugging.

## 🎯 Mejores Prácticas

1. **Usa hooks en componentes de React** - Para manejo automático de estados
2. **Usa servicios en funciones** - Para llamadas directas sin hooks
3. **Maneja errores apropiadamente** - Siempre verifica `error` antes de usar `data`
4. **Usa `refetch` para actualizar datos** - En lugar de recargar el componente
5. **Optimiza búsquedas** - Usa debouncing para búsquedas en tiempo real

## 🔗 Enlaces Útiles

- API Base: https://api.sampleapis.com/simpsons
- Endpoints disponibles:
  - `/characters` - Personajes
  - `/episodes` - Episodios
  - `/products` - Productos

---

¿Preguntas? Revisa el código en `src/api/` o consulta la documentación de Axios.

