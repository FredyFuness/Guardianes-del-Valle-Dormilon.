# 🌙 Guardianes del Valle Dormilón

Videojuego educativo infantil desarrollado con **React + Vite + Phaser 3**. El propósito es enseñar sobre protección, alimentación, juego y descanso con actividades interactivas, sin medir el sueño real ni recolectar datos personales.

## 🕹️ Niveles

| Nivel | Actividad | Aprendizaje |
| --- | --- | --- |
| 1. El Refugio Seguro | Arrastrar escudos a tres peligros | Protección y seguridad |
| 2. La Cocina de la Energía | Tocar cinco alimentos saludables | Alimentación |
| 3. ¡Hora de Recreo! | Puzzle deslizante y alegría de Lumi | Derecho al juego |
| 4. El Ritual de las Estrellas | Apagar luces, manta y estrellas | Descanso |
| 5. El Sueño de Lumi | Eliminar ruidos durante veinte segundos | Ambiente seguro para dormir |

Incluye mapa, Lumi animado, narración por síntesis de voz (si el navegador la permite), desbloqueo progresivo y álbum de recompensas. El progreso se guarda exclusivamente en `localStorage`.

## 🚀 Instalación

Requiere Node.js 20 o superior.

```bash
git clone "https://github.com/FredyFuness/Guardianes-del-Valle-Dormilon..git"
cd Guardianes-del-Valle-Dormilon.
npm install
npm run dev
```

Abre la URL local que muestre Vite. Para comprobar la compilación:

```bash
npm run build
npm run preview
```

## 🌍 GitHub Pages

El repositorio incluye `.github/workflows/deploy.yml`. En **Settings → Pages → Build and deployment → Source** selecciona **GitHub Actions**. El flujo se ejecuta al hacer push a `main` y publica la carpeta `dist`. Consulta **Actions** para confirmar el resultado; no presupongas que el despliegue terminó hasta que aparezca en verde.

## 📁 Estructura

- `src/main.jsx`: integración React/Phaser y control de narración.
- `src/game/scenes.js`: menú, mapa, niveles, victoria y álbum.
- `src/style.css`: interfaz adaptable.
- `vite.config.js`: configuración de compilación y rutas relativas.
- `.github/workflows/deploy.yml`: despliegue automático.

## 🧪 Pruebas manuales recomendadas

1. Abrir el menú, iniciar y entrar al nivel 1.
2. Arrastrar tres escudos y verificar la pantalla de victoria.
3. Completar los niveles 2 a 5 y comprobar que se desbloquean.
4. Recargar y verificar que el progreso se conserva.
5. Comprobar audio activado/desactivado y la interacción táctil.
6. Revisar consola del navegador, diseño en móvil y ejecución de Actions.

## ⚠️ Estado del proyecto

Implementación jugable inicial de los cinco niveles. Las ilustraciones son provisionales; faltan pruebas de usuarios, ajustes de accesibilidad, revisión pedagógica y validación final de compilación y despliegue. No se debe presentar como producto infantil certificado o completamente probado.
