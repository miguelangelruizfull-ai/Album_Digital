# Evolución técnica — Album Digital

## Caso

**De una implementación personal a un producto web reutilizable**

Este documento explica la evolución técnica del proyecto sin reproducir contenido privado del repositorio histórico.

---

## Etapa A — solución concreta

La primera versión resolvía una necesidad específica: mostrar fotografías y videos desde un repositorio mediante una interfaz web accesible con GitHub Pages.

Características observadas:

- una página HTML principal;
- estilos CSS embebidos;
- galerías responsive;
- videos en cuadrícula;
- lightbox para abrir contenido;
- menú flotante de carpetas;
- JavaScript para cargar elementos dinámicamente;
- llamadas a la API pública de GitHub para obtener archivos y carpetas.

### Ventaja

Permitió validar rápidamente que GitHub podía funcionar como almacenamiento + fuente de estructura para una galería web.

### Problema

El código y los datos personales estaban fuertemente acoplados.

Una ruta o llamada a la API apuntaba directamente al repositorio y sus carpetas de contenido. Eso hacía sencilla la primera implementación, pero dificultaba:

- reutilizar el sistema para otra persona;
- compartir el código sin compartir medios;
- mantener privacidad;
- definir una estructura limpia de producto.

---

## Etapa B — migración

La migración hacia la cuenta actual permitió continuar el proyecto y revisar su estructura.

En esta etapa se conserva el concepto funcional, pero comienza a hacerse evidente una separación necesaria:

```text
IMPLEMENTACIÓN PERSONAL
≠
PRODUCTO REUTILIZABLE
```

La implementación personal puede contener los datos específicos de un álbum.

El producto debe funcionar sin depender de esos datos.

---

## Etapa C — `Album_Digital`

La arquitectura objetivo pasa a distinguir responsabilidades:

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

La separación permite que el código pueda mantenerse público mientras cada usuario decide dónde y cómo almacenar sus propios medios.

---

## Comparación

| Aspecto | Prototipo histórico | Album Digital |
|---|---|---|
| Objetivo | Resolver un álbum concreto | Crear una base reutilizable |
| Datos | Integrados con la implementación | Separación buscada entre producto y contenido |
| Multimedia | Contenido real dentro del repositorio | Proyecto público sin medios personales |
| Navegación | Carpetas del repositorio consultadas dinámicamente | Arquitectura configurable y evolucionable |
| Privacidad | No era el objetivo principal inicial | Restricción de diseño explícita |
| Portafolio | Evidencia histórica | Proyecto canónico público |

---

## Reconstrucción `legacy/`

La página `legacy/index.html` reproduce únicamente los **patrones funcionales** necesarios para comprender la primera versión:

- encabezado de álbum;
- menú flotante;
- selección de carpetas;
- galería;
- sección de videos;
- lightbox;
- render dinámico con JavaScript.

En lugar de consultar el repositorio histórico, utiliza objetos JavaScript locales con contenido ficticio.

Esto permite enseñar cómo funcionaba el concepto sin exponer la información que originó el proyecto.

---

## Aprendizajes transferibles

### 1. Prototipar primero

Una implementación sencilla puede validar una necesidad antes de diseñar una arquitectura más general.

### 2. Separar producto y datos

Cuando una aplicación se vuelve reutilizable, el contenido específico debe dejar de formar parte de la lógica central.

### 3. Privacidad como requisito arquitectónico

No basta con borrar nombres de una interfaz. La arquitectura debe evitar dependencias con repositorios, rutas o medios personales.

### 4. Conservar procedencia

Migrar un proyecto no significa borrar su historia. El repositorio original permanece como evidencia y la versión actual documenta el origen.

### 5. Convertir experiencia en sistema

La evolución de Album Digital muestra el paso de una solución puntual hacia una estructura que puede documentarse, mantenerse y adaptarse.

---

## Próximas mejoras técnicas

Estas mejoras son roadmap, no funcionalidades afirmadas como terminadas:

- consolidar la estructura duplicada existente del repositorio;
- fortalecer configuración externa;
- carga de medios independiente del código;
- filtros y búsqueda;
- línea de tiempo;
- manejo explícito de privacidad;
- pruebas de accesibilidad y rendimiento;
- documentación de despliegue para terceros.
