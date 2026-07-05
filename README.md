# Museo Virtual del Sombrero de Paja Toquilla

Recorrido **3D en primera persona** por un museo virtual dedicado al sombrero ecuatoriano
de paja toquilla — Patrimonio Cultural Inmaterial de la Humanidad (UNESCO, 2012).
**Ana**, la guía del museo, narra el recorrido con voz y gestos siguiendo el guion museográfico.

## ✨ Características
- Galería 3D real (Three.js/WebGL): caminas con **WASD/flechas** y miras/giras con el **mouse**.
- **Ana, la guía narradora**: se presenta al entrar, narra la introducción de cada sala
  automáticamente y, al **hacer clic sobre un cuadro** (estando en su sala), narra esa obra
  con el texto del guion. Voz femenina del navegador + gestos animados.
- 5 salas con pared de acento en tonos apagados + sala de bienvenida y despedida.
- 21 fotografías embebidas (no requiere internet, salvo las tipografías decorativas).
- Atajos: `R` repetir narración · `M` voz sí/no · `Esc` liberar cursor · clic en la escena para continuar.

## 📁 Estructura
```
├── index.html      # Página principal
├── styles.css      # HUD, guía y overlays
├── app.js          # Motor del museo (escena 3D, narración, gestos, voz)
├── images.js       # Las 21 fotografías embebidas (data URIs)
├── lib/            # three.min.js + PointerLockControls.js (local)
├── .nojekyll
└── README.md
```

## 🚀 Publicar en GitHub Pages
1. Sube TODO el contenido de esta carpeta a un repositorio (con `index.html` en la raíz).
2. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
3. El museo quedará en `https://<usuario>.github.io/<repositorio>/`.

## 🎥 Para grabar el video del recorrido
Pantalla completa (F11) → «Entrar al museo» → caminar con WASD mientras Ana narra;
clic sobre cada cuadro para escuchar su obra.

> 💡 La voz depende del navegador: en **Microsoft Edge** suena más natural (voces neuronales).
> El recorrido requiere computadora con mouse y teclado (no táctil).

---
Proyecto educativo · Apreciación del Arte y la Cultura. Fotografías y guion del trabajo académico.
