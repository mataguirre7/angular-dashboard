# Angular Dashboard

Dashboard desarrollado con **Angular** para visualizar y gestionar datos de una API REST construida con **Node.js**, **Prisma** y **SQLite**.

🔗 API Backend: [https://api-node-prisma-sqlite.onrender.com/api](https://api-node-prisma-sqlite.onrender.com/api)

---

## 🚀 Tecnologías utilizadas

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/) o [Angular Material](https://material.angular.io/) *(según corresponda)*
- [Node.js + Express (API)](https://nodejs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Render](https://render.com/) para el backend

---

## 🎯 Objetivo

Crear una interfaz web moderna y responsiva que permita al usuario:

- Visualizar registros desde la API.
- Crear, editar y eliminar elementos.
- Obtener feedback visual del estado de cada acción.
- Explorar una arquitectura frontend escalable y conectada a servicios externos.

---

## 📦 Instalación y uso

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/mataguirre7/angular-dashboard.git
   cd angular-dashboard
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```

3. Ejecutá el proyecto:
   ```bash
   ng serve
   ```

4. Accedé desde tu navegador en:
   ```
   http://localhost:4200
   ```

---

## 🔧 Configuración

Si tu API tiene una URL diferente, asegurate de actualizar la base de tu servicio HTTP en Angular, por ejemplo en `environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://api-node-prisma-sqlite.onrender.com/api'
};
```

---

## 📁 Estructura general

```
src/
├── app/
│   ├── services/        # Servicios para consumir la API
│   ├── components/      # Componentes de UI
│   └── pages/           # Páginas principales del dashboard
├── assets/
├── environments/
└── index.html
```

---

## 🧪 Funcionalidades

- [x] Listar datos obtenidos desde la API
- [x] Crear nuevos elementos mediante formularios
- [x] Editar registros existentes
- [x] Eliminar elementos
- [x] Validaciones del lado del cliente
- [x] Manejo de errores de red y feedback visual

---

## 📄 Licencia

MIT

---

## ✍️ Autor

Desarrollado por [Matías Aguirre](https://github.com/mataguirre7)
