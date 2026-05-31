# Introducción a HTML & Desarrollo Web 💻

Este repositorio contiene los módulos prácticos, apuntes teóricos y proyectos iniciales desarrollados durante la etapa de introducción a las tecnologías web Core (HTML5, CSS3 y JavaScript Vanilla). El objetivo de esta sección es dominar la estructuración semántica, la manipulación del entorno de ejecución y la integración con servicios externos.

---

### 📂 Estructura del Directorio

La carpeta se encuentra organizada en los siguientes módulos específicos:

#### 1. 📝 `apuntes/`
- **Descripción:** Repositorio de notas teóricas y guías de referencia rápida.
- **Contenido:** Conceptos clave de etiquetas semánticas, selectores CSS, especificidad, fundamentos del flujo de ejecución en JavaScript y mejores prácticas de maquetación.

#### 2. 🎛️ `dom/`
- **Descripción:** Prácticas enfocadas en la API de manipulación del Modelo de Objetos del Documento (DOM).
- **Contenido:** Ejercicios de captura de selectores (`querySelector`), creación e inyección dinámica de nodos en el árbol HTML (`createElement`, `appendChild`), y control de flujo basado en eventos (*Event-Driven Programming*). Aquí se incluye la base como se creó **TaskList v1.0**.

#### 3. 🌐 `Uso de apis/`
- **Descripción:** Módulo de integración de servicios y consumo de datos asíncronos.
- **Contenido:** Implementación de peticiones HTTP para comunicar la interfaz con servidores externos, procesamiento de respuestas en formato JSON y renderizado dinámico de datos en la interfaz de usuario.

#### 4. 👥 `ejemplo de red-social/`
- **Descripción:** Proyecto integrador de maquetación.
- **Contenido:** Prototipo de interfaz que simula una red social simple, aplicando layouts estructurales, manejo de estados visuales con `:hover` y ordenamiento de componentes interactivos.

---

### 🛠️ Stack Tecnológico Base

- **HTML5:** Estructuración semántica rígida y accesibilidad.
- **CSS3:** Estilos estructurados, normalización de componentes y diseño elástico.
- **JavaScript (ES6+):** Lógica del lado del cliente, mutación del DOM y manejo de flujos asíncronos.

---

### 📌 Estado del Proyecto y Persistencia

> **Nota Técnica:** Los proyectos contenidos en este directorio operan del lado del cliente (*Client-Side Rendering*). Las aplicaciones interactivas (como los gestores de tareas o formularios) procesan la información directamente en el *Runtime* de JavaScript de la pestaña del navegador. Al no contar con persistencia en base de datos o almacenamiento local en esta etapa, los estados se reinicializan al recargar el entorno.