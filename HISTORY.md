# Historia de Album Digital

## Propósito de este documento

Este archivo conserva la evolución verificable del proyecto sin publicar fotografías, videos, nombres familiares ni otros datos personales del álbum original.

El objetivo es mostrar cómo una solución creada para una necesidad concreta fue evolucionando hasta convertirse en una base web reutilizable.

---

## 1. Origen histórico — `KATO250712/AlbumFamiliar`

Repositorio histórico de referencia:

`https://github.com/KATO250712/AlbumFamiliar`

El repositorio fue creado el **1 de diciembre de 2025** y funcionó como una primera implementación real de un álbum web personal.

Elementos técnicos observables en esa etapa:

- HTML y CSS embebidos en una página principal;
- galería responsive de fotografías;
- sección de videos;
- visor tipo lightbox para ampliar medios;
- menú flotante para navegar por carpetas;
- uso de la API pública de GitHub para consultar carpetas y archivos;
- carga dinámica de imágenes y videos desde el repositorio;
- publicación mediante GitHub Pages.

### Limitación principal

La implementación mezclaba en un mismo repositorio:

- código;
- estructura de navegación;
- contenido personal;
- archivos multimedia;
- textos privados o familiares.

Esto resolvía la necesidad inmediata, pero dificultaba reutilizar el proyecto como producto público sin exponer información privada.

**Regla actual:** el repositorio histórico permanece intacto como evidencia. No se copia su contenido personal a `Album_Digital`.

---

## 2. Migración / implementación posterior — `album_MiguelAngelRuiz`

Repositorio:

`https://github.com/miguelangelruizfull-ai/album_MiguelAngelRuiz`

Esta etapa representa una migración y continuación de la idea bajo la cuenta actual.

Su valor dentro de la historia del proyecto es mostrar que el concepto no quedó como una prueba aislada: continuó evolucionando y permitió identificar la necesidad de separar la implementación personal del producto reutilizable.

Por contener material personal, esta implementación no se utiliza como destino principal para reclutadores ni como pieza principal de posicionamiento orgánico.

---

## 3. Producto canónico — `Album_Digital`

Repositorio actual:

`https://github.com/miguelangelruizfull-ai/Album_Digital`

Sitio:

`https://miguelangelruizfull-ai.github.io/Album_Digital/`

La evolución principal consiste en separar:

```text
necesidad personal
      ↓
primer prototipo funcional
      ↓
identificación de problemas de privacidad y reutilización
      ↓
separación entre contenido y producto
      ↓
Album_Digital como proyecto público reutilizable
```

El repositorio canónico se utiliza para:

- documentar la solución;
- mantener una versión pública sin medios familiares;
- explicar la arquitectura y evolución;
- ofrecer una base que pueda adaptarse a otros álbumes;
- servir como evidencia técnica en el portafolio profesional.

---

## 4. Reconstrucción legacy sanitizada

Ruta:

`legacy/index.html`

Demo pública:

`https://miguelangelruizfull-ai.github.io/Album_Digital/legacy/`

Esta página no es una copia del contenido original. Es una **reconstrucción funcional sanitizada** de conceptos presentes en la primera implementación.

Conserva de manera demostrativa:

- galería en cuadrícula;
- navegación por álbumes/carpetas;
- sección de videos;
- lightbox;
- interfaz responsive;
- carga dinámica mediante JavaScript.

Pero utiliza únicamente datos de demostración generados dentro del propio archivo.

No consulta la API del repositorio histórico y no carga fotografías ni videos personales.

---

## 5. Qué demuestra esta evolución

El valor profesional del caso no está únicamente en construir una página HTML.

La evolución permite documentar un proceso más amplio:

1. detectar una necesidad real;
2. crear una primera solución funcional;
3. utilizar GitHub y GitHub Pages como infraestructura;
4. trabajar con carga dinámica de archivos;
5. identificar problemas de acoplamiento entre datos privados y código;
6. migrar y reorganizar el proyecto;
7. convertir una implementación específica en una base reutilizable;
8. documentar procedencia, limitaciones y decisiones de privacidad.

---

## 6. Política histórica

- `KATO250712/AlbumFamiliar` = **ORIGINAL HISTÓRICO — NO MODIFICAR**.
- `album_MiguelAngelRuiz` = **IMPLEMENTACIÓN PERSONAL / EVIDENCIA DE MIGRACIÓN**.
- `Album_Digital` = **REPOSITORIO CANÓNICO ACTUAL**.
- `legacy/` = **RECONSTRUCCIÓN SANITIZADA PARA DEMOSTRACIÓN**.

No se alteran fechas históricas ni se presenta la migración como si fuera el nacimiento original del proyecto.
