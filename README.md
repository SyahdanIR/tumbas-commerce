# Tumbas Commerce

Tumbas Commerce is a full-stack e-commerce web application built to practice and implement modern web development concepts, including REST API development, authentication, database management, frontend development, and containerized application development.

The project uses a separate frontend and backend architecture. The frontend is built with Next.js, while the backend is built with Hono and TypeScript. PostgreSQL is used as the database and Prisma as the ORM.

## 🚀 Tech Stack

### Frontend

* **Next.js** — React framework for building the web application
* **TypeScript** — Type-safe JavaScript development
* **Tailwind CSS** — Utility-first CSS framework

### Backend

* **Hono** — Lightweight web framework for building REST APIs
* **TypeScript** — Type-safe backend development
* **Node.js** — JavaScript runtime
* **JWT** — Authentication and protected route handling
* **bcrypt** — Password hashing

### Database

* **PostgreSQL** — Relational database
* **Prisma** — ORM for database access and management

### Development & Infrastructure

* **Docker**
* **Docker Compose**
* **WSL 2 / Ubuntu**
* **NVM**
* **tsx** — TypeScript development server with hot reload

---

## ✨ Features

### 🔐 Authentication

* User registration
* User login
* Password hashing with bcrypt
* JWT-based authentication
* Authentication middleware
* Protected routes
* Authentication state through cookies

### 📦 Product Management

* Display all products
* Display product details
* Create products
* Update products
* Delete products
* Product stock management
* Product categorization

### 🏷️ Category Management

* Create category
* Display categories
* Product categorization

### 🛒 Shopping

* Product browsing
* Shopping cart page
* Cart item management
* Checkout flow
* Order management

> Some shopping and order-related features are still under development.

---

## 🏗️ Project Architecture

Tumbas uses a separate frontend and backend architecture.

```text
                    ┌─────────────────────┐
                    │       Next.js       │
                    │      Frontend       │
                    │      Port 3001      │
                    └──────────┬──────────┘
                               │
                               │ HTTP / REST API
                               ▼
                    ┌─────────────────────┐
                    │        Hono         │
                    │       Backend       │
                    │      Port 3000      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Prisma ORM      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     PostgreSQL      │
                    └─────────────────────┘
```

---

## 📁 Project Structure

```text
tumbas-commerce/
├── Server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── index.ts
│   ├── prisma/
│   │   └── schema.prisma
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── client/
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   └── (dashboard)/
│   │   ├── components/
│   │   ├── services/
│   │   └── lib/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── compose.yaml
└── README.md
```

The backend follows a layered architecture to separate responsibilities between routes, controllers, services, middleware, and database operations.

---

## 🗄️ Database Design

The application is designed around several main entities:

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

This structure allows Tumbas to manage users, products, product categories, shopping carts, and customer orders.

---

## 🔌 API

The backend provides RESTful API endpoints for interacting with the application.

### Authentication

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login`    | Login user          |

### Products

| Method   | Endpoint        | Description       |
| -------- | --------------- | ----------------- |
| `GET`    | `/products`     | Get all products  |
| `GET`    | `/products/:id` | Get product by ID |
| `POST`   | `/products`     | Create a product  |
| `PATCH`  | `/products/:id` | Update a product  |
| `DELETE` | `/products/:id` | Delete a product  |

### Categories

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| `GET`  | `/categories` | Get all categories |
| `POST` | `/categories` | Create a category  |

> API endpoints will continue to be expanded as the application develops.

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Docker
* Docker Compose
* PostgreSQL database

### 1. Clone the Repository

```bash
git clone <repository-url>
cd tumbas-commerce
```

### 2. Configure Environment Variables

Create an `.env` file inside the `Server` directory.

```env
DATABASE_URL="your_database_url"
JWT_SECRET="your_jwt_secret"
```

Adjust the environment variables according to your local configuration.

### 3. Install Dependencies

For the backend:

```bash
cd Server
npm install
```

For the frontend:

```bash
cd ../client
npm install
```

### 4. Run the Development Server

Backend:

```bash
cd Server
npm run dev
```

Frontend:

```bash
cd client
npm run dev
```

### 5. Run with Docker Compose

From the project root:

```bash
docker compose up
```

To rebuild the Docker images:

```bash
docker compose up --build
```

To run the containers in detached mode:

```bash
docker compose up -d
```

To stop the containers:

```bash
docker compose down
```

Because the project uses `compose.yaml` at the repository root, there is no need to specify the `-f` option.

---

## 🌐 Local Development

When running the application with Docker Compose:

```text
Frontend → http://localhost:3001
Backend  → http://localhost:3000
```

The Next.js frontend communicates with the Hono backend through REST API requests.

---

## 🧩 Development Status

🚧 **In Development**

Current progress:

* [x] Project setup
* [x] Hono + TypeScript setup
* [x] Next.js frontend setup
* [x] Prisma integration
* [x] PostgreSQL database connection
* [x] Docker configuration
* [x] Docker Compose configuration
* [x] Product CRUD
* [x] Category management
* [x] User registration
* [x] User login
* [x] JWT authentication
* [x] Authentication middleware
* [x] Protected routes
* [x] Login page
* [x] Register page
* [x] Product page
* [x] Cart page
* [ ] Complete shopping cart functionality
* [ ] Checkout system
* [ ] Order management
* [ ] Address management
* [ ] Production deployment

---

## 🎯 Project Goals

Tumbas Commerce is developed to strengthen practical experience in:

* Full-stack web application development
* RESTful API development
* Backend architecture
* TypeScript development
* Next.js development
* Authentication and authorization
* Prisma ORM
* PostgreSQL database design
* E-commerce business logic
* Docker and containerized development
* Frontend and backend integration

---

## 📌 Project Status

**🚧 Active Development**

Tumbas Commerce is an ongoing project. The core authentication, product management, category management, and frontend foundation have been implemented. Additional e-commerce functionality such as cart processing, checkout, and order management will continue to be developed.

---

## 👨‍💻 Author

**Syahdan Izzur Rosuli**

* GitHub: **SyahdanIR**
* LinkedIn: **Syahdan Izzur Rosuli**
* Portfolio: **Syahdan Portfolio**
