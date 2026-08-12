# Tumbas Commerce

Tumbas Commerce is a full-stack e-commerce application built to practice and implement modern web development concepts, including REST API development, database management, authentication, and containerized development.

The project is currently under development, with the backend being developed using Hono and TypeScript and the database managed through Prisma and Supabase PostgreSQL.

## 🚀 Tech Stack

### Backend

* **Hono** — Lightweight web framework for building REST APIs
* **TypeScript** — Type-safe JavaScript development
* **Prisma 7** — ORM for database access and management
* **Node.js** — JavaScript runtime

### Database

* **PostgreSQL**
* **Supabase** — PostgreSQL database hosting

### Development & Infrastructure

* **Docker**
* **Docker Compose**
* **WSL 2 / Ubuntu**
* **NVM**
* **tsx** — Development server with hot reload

## ✨ Features

### Product Management

* View all products
* View product details
* Create products
* Update products
* Delete products
* Product stock management
* Product categorization

### Authentication

* User registration
* User login
* Protected user routes
* Authentication-based access control

### Shopping

* Product browsing
* Shopping cart
* Cart item management
* Checkout flow
* Order management

> Some features are still being developed and may not yet be available in the current version.

## 🏗️ Project Structure

```text
tumbas-commerce/
├── Server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── ...
│   ├── prisma/
│   │   └── schema.prisma
│   ├── package.json
│   └── ...
├── Compose.yaml
└── README.md
```

The backend follows a layered structure to separate responsibilities between routes, controllers, services, and database operations.

## 🗄️ Database Design

The planned database structure consists of several main entities:

```text
User
 ├── Cart
 │    └── CartItem
 │         └── Product
 │
 ├── Order
 │    └── OrderItem
 │         └── Product
 │
 └── Address

Category
 └── Product
```

This structure allows the application to handle product management, shopping carts, customer orders, and product categorization.

## 🔌 API

The backend provides RESTful API endpoints for interacting with the application.

Example product endpoints:

| Method   | Endpoint        | Description       |
| -------- | --------------- | ----------------- |
| `GET`    | `/products`     | Get all products  |
| `GET`    | `/products/:id` | Get product by ID |
| `POST`   | `/products`     | Create a product  |
| `PATCH`  | `/products/:id` | Update a product  |
| `DELETE` | `/products/:id` | Delete a product  |

Additional endpoints for authentication, users, carts, and orders are being developed as the project progresses.

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SyahdanIR/tumbas-commerce.git
cd tumbas-commerce
```

### 2. Install dependencies

Move into the backend directory:

```bash
cd Server
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `Server` directory:

```env
DATABASE_URL="your_supabase_postgresql_connection_string"
```

Add other environment variables required by the application as development continues.

### 4. Run the development server

```bash
npm run dev
```

The backend will run using `tsx watch` so changes can be reflected automatically during development.

### 5. Run with Docker

From the project root:

```bash
docker compose -f Compose.yaml up --build
```

To stop the containers:

```bash
docker compose -f Compose.yaml down
```

## 🧩 Development Approach

The project is developed incrementally, starting from the backend foundation and database layer before implementing the complete e-commerce flow.

Current development focus includes:

* [x] Backend project setup
* [x] Hono + TypeScript setup
* [x] Prisma integration
* [x] Supabase PostgreSQL connection
* [x] Product API
* [ ] Database schema completion
* [ ] Authentication
* [ ] Cart system
* [ ] Order & checkout system
* [ ] Frontend application
* [ ] Production deployment

## 🎯 Project Goals

This project was created to strengthen practical experience in:

* Building RESTful APIs
* Backend architecture
* TypeScript development
* Prisma ORM
* PostgreSQL database design
* Authentication and authorization
* E-commerce business logic
* Docker-based development
* Full-stack application development

## 📌 Project Status

**🚧 In Development**

Tumbas Commerce is an ongoing project. New features and improvements will be added progressively as the development process continues.

## 👨‍💻 Author

**Syahdan Izzur Rosuli**

* GitHub: [SyahdanIR](https://github.com/SyahdanIR)
* LinkedIn: [Syahdan Izzur Rosuli](https://www.linkedin.com/in/syahdan-izzur-rosuli/)
* Portfolio: [syahdanportfolio.netlify.app](https://syahdanportfolio.netlify.app/)
