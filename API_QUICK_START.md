# 🍩 API de Los Simpsons - Guía Rápida

## ✅ ¡Todo Configurado y Funcionando!

Tu entorno está **100% configurado** y **libre de errores** para consumir la API de Los Simpsons.

---

## 🚀 Inicio Rápido (2 pasos)

### 1️⃣ Iniciar el servidor
```bash
pnpm dev
```

### 2️⃣ Probar la API
- Abre `http://localhost:5173`
- Ve a la sección **"Encuentra tu episodio"**
- Escribe: `"Homer espacio"` o `"monorail"`
- Haz clic en **"Buscar"**
- ¡Verás resultados reales de la API! 🎉

---

## 📦 ¿Qué se instaló?

```bash
✅ axios (v1.12.2) - Cliente HTTP
```

## 📁 ¿Qué se creó?

```
✅ .env                          # Variables de entorno
✅ SETUP_API.md                  # Guía de instalación detallada
✅ API_QUICK_START.md           # Este archivo

src/api/
  ✅ config/
     └── axios.config.ts        # Cliente HTTP configurado
  ✅ hooks/
     └── useSimpsons.ts          # 9 hooks React personalizados
  ✅ services/
     └── simpsons.service.ts     # Servicios de la API
  ✅ types/
     └── index.ts                # Tipos TypeScript
  ✅ examples/
     ├── CharacterExample.tsx    # Ejemplos de personajes
     ├── EpisodeExample.tsx      # Ejemplos de episodios
     └── README.md               # Docs de ejemplos
  ✅ index.ts                     # Barrel export
  └── README.md                  # Documentación completa

ACTUALIZADO:
  ✅ src/organism/ChatBotSection/index.tsx  # Usa la API real ✨
  ✅ src/atoms/Button/index.tsx             # Soporte para disabled
```

---

## 🎣 Hooks Disponibles (9 en total)

### 📺 Episodios
```tsx
import { useEpisodes, useSearchEpisodes, useEpisodesBySeason } from './api';

// Todos los episodios
const { data, loading, error } = useEpisodes();

// Buscar episodios
const { data, loading, error } = useSearchEpisodes('Homer espacio');

// Episodios por temporada
const { data, loading, error } = useEpisodesBySeason(5);
```

### 👥 Personajes
```tsx
import { useCharacters, useSearchCharacters } from './api';

// Todos los personajes
const { data, loading, error } = useCharacters();

// Buscar personajes
const { data, loading, error } = useSearchCharacters('Bart');
```

### 🛍️ Productos
```tsx
import { useProducts, useSearchProducts } from './api';

// Todos los productos
const { data, loading, error } = useProducts();

// Buscar productos
const { data, loading, error } = useSearchProducts('duff');
```

---

## 💻 Ejemplo Mínimo

```tsx
import { useEpisodes } from './api';

function MiComponente() {
  const { data, loading, error } = useEpisodes();

  if (loading) return <div>Cargando... ⏳</div>;
  if (error) return <div>Error: {error.message} ❌</div>;

  return (
    <div>
      {data?.map(episode => (
        <div key={episode.id}>
          <h3>{episode.name}</h3>
          <p>Temporada {episode.season}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 🔍 Ejemplos Completos

1. **ChatBot funcional**: `src/organism/ChatBotSection/index.tsx` ✨
2. **Búsqueda de personajes**: `src/api/examples/CharacterExample.tsx`
3. **Búsqueda de episodios**: `src/api/examples/EpisodeExample.tsx`

---

## 🌐 API Endpoints

| Endpoint | Descripción |
|----------|-------------|
| `/characters` | Lista de personajes (654+) |
| `/episodes` | Lista de episodios (700+) |
| `/products` | Lista de productos |

**Base URL**: `https://api.sampleapis.com/simpsons`

---

## 📚 Documentación

- **Esta guía**: `API_QUICK_START.md` ← Estás aquí
- **Guía detallada**: `SETUP_API.md`
- **Documentación completa**: `src/api/README.md`
- **Ejemplos**: `src/api/examples/README.md`

---

## 🐛 Debugging

Abre la consola del navegador (**F12**) y verás logs como:

```
🚀 API Request: GET /episodes
✅ API Response: /episodes - Status: 200
```

Si hay errores:
```
❌ API Error Response: { status: 404, ... }
```

---

## 🎯 Características

✅ Cliente HTTP con interceptores  
✅ Manejo centralizado de errores  
✅ Logs automáticos en consola  
✅ Tipos TypeScript completos  
✅ 9 hooks personalizados  
✅ Búsqueda integrada  
✅ Ejemplos funcionales  
✅ Documentación en español  
✅ ChatBot con API real implementado  
✅ **Sin errores de compilación** ✨

---

## 💡 Tips de Uso

### Tip 1: Manejo de Estados
```tsx
const { data, loading, error, refetch } = useEpisodes();

// Siempre verifica loading y error
if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} onRetry={refetch} />;

// Ahora puedes usar data con seguridad
return <EpisodesList episodes={data} />;
```

### Tip 2: Búsqueda con Debounce
```tsx
const [query, setQuery] = useState('');
const [debouncedQuery, setDebouncedQuery] = useState('');

useEffect(() => {
  const timer = setTimeout(() => setDebouncedQuery(query), 500);
  return () => clearTimeout(timer);
}, [query]);

const { data } = useSearchEpisodes(debouncedQuery);
```

### Tip 3: Usar Servicios Directamente
```tsx
import { simpsonsService } from './api';

async function fetchData() {
  try {
    const episodes = await simpsonsService.getAllEpisodes();
    console.log(episodes);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## 🔧 Solución de Problemas Comunes

### ❌ Error: "Cannot find module './api'"
**Solución:** Asegúrate de que la ruta de importación sea correcta:
```tsx
// ✅ Correcto
import { useEpisodes } from './api';

// ❌ Incorrecto
import { useEpisodes } from 'api';
```

### ❌ Error: "Network Error"
**Solución:** 
1. Verifica tu conexión a internet
2. Revisa que el archivo `.env` existe y está configurado
3. Revisa la consola para más detalles

### ❌ No se muestran resultados
**Solución:**
1. Abre la consola del navegador (F12)
2. Verifica los logs de la API
3. Intenta con una búsqueda más específica

---

## 🎉 ¡Listo!

Tu proyecto está **100% configurado y funcionando**. Solo ejecuta:

```bash
pnpm dev
```

Y comienza a desarrollar con la API de Los Simpsons. 🍩

---

**¿Necesitas más ayuda?**
- 📖 Lee la documentación completa: `src/api/README.md`
- 🎨 Revisa los ejemplos: `src/api/examples/`
- 🔍 Verifica los logs en la consola del navegador

