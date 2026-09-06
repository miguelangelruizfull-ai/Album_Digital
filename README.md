# Album Digital

> **Conserva hoy los recuerdos que mañana contarán tu historia.**

## ¿Qué es Album Digital?

**Album Digital** es una plantilla web de código abierto para organizar fotografías y videos mediante tecnologías web y GitHub Pages.

El proyecto nació a partir de una implementación personal y evolucionó hacia una base reutilizable donde el código público puede mantenerse separado del contenido privado.

## Evolución del proyecto

```text
KATO250712/AlbumFamiliar
original histórico
        ↓
primer prototipo funcional
        ↓
album_MiguelAngelRuiz
migración / implementación personal
        ↓
Album_Digital
producto canónico reutilizable
```

La historia completa está documentada en:

- [HISTORY.md](HISTORY.md) — procedencia y evolución verificable.
- [docs/EVOLUCION.md](docs/EVOLUCION.md) — análisis técnico de la transición.
- [Reconstrucción legacy sanitizada](https://miguelangelruizfull-ai.github.io/Album_Digital/legacy/) — demo funcional sin fotografías, videos ni datos familiares.

### Regla de privacidad

El repositorio histórico se utiliza únicamente como evidencia de origen. **Album Digital no copia ni carga su contenido personal.** La reconstrucción `legacy/` usa datos ficticios locales y no consulta el repositorio histórico.

---

## Problema que busca resolver

Las fotografías y videos suelen quedar dispersos entre teléfonos, memorias, discos y plataformas. Album Digital explora una forma de organizar ese contenido mediante una aplicación web que pueda mantenerse, migrarse y adaptarse.

La evolución del proyecto también aborda otro problema: **separar la aplicación de los datos privados** para que una solución personal pueda convertirse en una base reutilizable.

---

## Características y objetivos

- Galería web responsive.
- Organización de fotografías y videos.
- Categorías configurables.
- Publicación mediante GitHub Pages.
- Separación progresiva entre interfaz, configuración y contenido.
- Proyecto público sin fotografías personales incluidas.
- Documentación de procedencia y evolución.

---

## Tecnologías

- HTML5
- CSS3
- JavaScript
- JSON
- Git
- GitHub
- GitHub Pages

---

## Arquitectura objetivo

```text
INTERFAZ
HTML + CSS

COMPORTAMIENTO
JavaScript

CONFIGURACIÓN
JSON / estructura configurable

CONTENIDO
medios de cada implementación

PUBLICACIÓN
GitHub Pages
```

El objetivo es que una persona pueda reutilizar la base sin depender del contenido del proyecto que le dio origen.

---

## Reconstrucción histórica sanitizada

`legacy/index.html` conserva conceptos presentes en el primer prototipo:

- galería en cuadrícula;
- menú flotante de álbumes;
- selección de carpetas;
- render dinámico;
- sección de videos;
- visor tipo lightbox.

La diferencia es deliberada: todos los elementos visuales son ficticios y están generados localmente.

**Demo:**

https://miguelangelruizfull-ai.github.io/Album_Digital/legacy/

---

## Roadmap

Las siguientes son líneas de evolución, no funcionalidades afirmadas como completas:

- consolidar la estructura interna del repositorio;
- configuración externa más clara;
- carga de medios independiente del código;
- búsqueda y filtros;
- línea del tiempo;
- accesibilidad y rendimiento;
- manejo explícito de privacidad;
- documentación de despliegue para terceros.

---

## Historia y caso profesional

Este proyecto se utiliza como caso para documentar el proceso:

**necesidad real → prototipo → limitaciones → migración → separación de datos → producto reutilizable**.

Portafolio profesional:

https://miguelangelruizfull-ai.github.io/

Perfil GitHub:

https://github.com/miguelangelruizfull-ai

---

## Autor

**Miguel Ángel Ruiz Ramírez**

Proyecto orientado a desarrollo web práctico, organización de información y evolución de soluciones reales hacia estructuras reutilizables.
