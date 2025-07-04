/
├── index.html           # Archivo HTML principal
├── src/
│   ├── js/
│   │   ├── main.js      # Lógica principal de la app (UI + lógica)
│   │   ├── API.js       # Funciones para consumir la API REST
│   │   └── ALERT.js     # Alertas con SweetAlert2
│   └── css/
│       └── styles.css   # Estilos CSS modernos y responsivos
├── db.json              # Base de datos JSON para JSON Server
└── README.md            # Este archivo


# Gestión de Productos

Aplicación web para gestionar productos con funcionalidades para crear, listar, actualizar y eliminar productos con detalles como nombre, precio, fecha y descripción.

---

## Tecnologías usadas

- JavaScript (ES6+)
- HTML5 / CSS3
- Módulos JavaScript (import/export)
- API REST simulada con JSON Server
- SweetAlert2 para notificaciones elegantes
- JSON Server para backend local
- Live Server o cualquier servidor HTTP para servir la app

---

## Características principales

- Crear productos con nombre, precio, fecha y descripción
- Listar todos los productos existentes
- Editar productos existentes
- Eliminar productos
- Feedback visual con alertas de éxito o error usando SweetAlert2
- Diseño responsivo y limpio con CSS moderno

---

## Instalación y uso

1. **Clona este repositorio:**

```bash
git clone <URL-del-repositorio>
cd <nombre-del-proyecto>

npm install sweetalert2

Levanta JSON Server:

npm install -g json-server
npx json-server db/database.json
npx json-server db/database.json

