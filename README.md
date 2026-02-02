# Portal de Residencia Escolar

Aplicación web completa para la gestión de residencia escolar, diseñada para maestros.

## Características

- **Sistema de login** con usuarios predefinidos
- **Dashboard** con resumen de actividad
- **Gestión de alumnos**: añadir, editar, eliminar y asignar habitaciones
- **Gestión de habitaciones**: visualización y asignación
- **Registro de faltas**: registro y filtrado de incidencias
- **Diseño responsive** y moderno
- **Almacenamiento local** persistente

## Usuarios y Contraseñas

| Usuario | Contraseña |
|---------|------------|
| Kati | sun12 |
| Alvaro | rock34 |
| Juan Ignacio | wiz56 |
| Maria Jose | moon78 |
| Jose Antonio | thun90 |
| Lourdes | rain21 |
| Ruben | comet43 |
| Belen | star65 |
| Adolfo | king999 |

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **Tailwind CSS** - Estilos responsive
- **JavaScript Vanilla** - Lógica del frontend
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografía Inter

## Despliegue en Vercel

### Opción 1: Despliegue rápido con Vercel CLI

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Despliega la aplicación:
```bash
vercel
```

### Opción 2: Despliegue manual

1. Crea un repositorio en GitHub
2. Sube los archivos: `index.html`, `app.js`, `package.json`, `vercel.json`
3. Conecta tu repositorio a [Vercel](https://vercel.com)
4. Despliega automáticamente

## Ejecución Local

Para probar la aplicación localmente:

```bash
# Instala un servidor local (opcional)
npm install -g http-server

# Inicia el servidor
http-server . -p 3000

# O usa Python (viene preinstalado en muchos sistemas)
python -m http.server 3000
```

Abre tu navegador y visita `http://localhost:3000`

## Estructura de Archivos

```
├── index.html          # Página principal con toda la estructura
├── app.js              # Lógica de JavaScript
├── package.json        # Configuración del proyecto
├── vercel.json         # Configuración para Vercel
└── README.md           # Documentación
```

## Funcionalidades por Sección

### Dashboard
- Resumen de alumnos, habitaciones ocupadas y faltas
- Actividad reciente con timestamps
- Estadísticas en tiempo real

### Gestión de Alumnos
- Formulario para añadir nuevos alumnos
- Tabla con lista completa de alumnos
- Fotos generadas automáticamente con UI Avatars
- Editar y eliminar alumnos
- Asignación de habitaciones

### Gestión de Habitaciones
- Visualización de todas las habitaciones
- Estados: vacante, parcialmente ocupada, completa
- Asignación directa desde la cuadrícula
- Capacidad y tipo de habitación

### Registro de Faltas
- Formulario para registrar incidencias
- Filtrado por alumno y fecha
- Lista completa con opciones de eliminación
- Historial completo

### Contacto
- Información de contacto general
- Teléfonos de emergencia
- Horarios de atención

## Características Técnicas

- **Responsive Design**: Funciona en móviles, tablets y desktop
- **LocalStorage**: Datos persistentes en el navegador
- **Moderno UI**: Interfaz limpia con Tailwind CSS
- **Accesible**: Semántica HTML5 y buena contrastación
- **Animaciones**: Transiciones suaves y micro-interacciones

## Notas del Desarrollo

- La aplicación es completamente funcional sin backend
- Los datos se guardan en el navegador del usuario
- Las fotos se generan automáticamente usando UI Avatars
- El diseño está optimizado para dispositivos móviles
- Incluye manejo de errores y validaciones básicas

## Personalización

Para modificar colores o estilos:
- Edita los colores en `index.html`
- Puedes cambiar la tipografía en el tag `<head>`
- Las animaciones están definidas en el CSS personalizado

Para agregar más funcionalidades:
- Extiende la lógica en `app.js`
- Añade nuevas secciones en `index.html`
- Actualiza el menú de navegación

---

Desarrollado para Residencia Escolar San Ignacio