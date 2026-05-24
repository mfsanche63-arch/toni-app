# Toñi APP

PWA limpia para instalar Toñi APP en el móvil con icono propio.

## Qué hace

Esta versión usa GitHub Pages como app visual/instalable y carga la Web App de Apps Script que ya funciona:

https://script.google.com/macros/s/AKfycbyxA2GSUAsq1TJrMFDufPp-z0fUowwicErwsFT11mDSmZ2KZr2BhfYIX84XaD_qpX6w/exec

El backend real sigue siendo Apps Script, conectado a Google Sheets y Google Calendar.

## Archivos

- `index.html`: contenedor principal de la PWA.
- `styles.css`: diseño de pantalla de carga.
- `app.js`: lógica de carga e instalación.
- `manifest.json`: nombre, icono y configuración de app instalada.
- `service-worker.js`: caché del shell de la PWA.
- `icons/`: iconos de Toñi APP.

## Publicar en GitHub Pages

1. Sube todos estos archivos al repositorio `toni-app`.
2. En GitHub ve a `Settings > Pages`.
3. En `Build and deployment`, elige:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
4. Pulsa `Save`.
5. Abre la URL que te dé GitHub Pages.
6. En el móvil, usa `Añadir a pantalla de inicio`.

## Notas

No hay claves privadas dentro del repositorio.

La app carga la interfaz actual de Apps Script en un iframe. Esto evita problemas de CORS y mantiene Sheets/Calendar funcionando desde el backend de Google.
