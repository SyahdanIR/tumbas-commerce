# Tumbas Commerce

<<<<<<< HEAD
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
=======
Tumbas Commerce is a full-stack e-commerce web application currently under development. The project is built with a separate frontend and backend architecture, with a focus on product and category management, authentication, cart, checkout, and order management.

## 🚀 Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS

### Backend

- Hono
- TypeScript
- Prisma ORM
- PostgreSQL
- Supabase
- Docker
- Docker Compose
>>>>>>> 7665eec (Add: Login & Register Page)

## ✨ Features

### Product Management

<<<<<<< HEAD
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
=======
- Create product
- Display all products
- Display product by ID
- Update product
- Delete product
- Product stock management

### Category Management

- Create category
- Display categories
- Product categorization

### Planned Features

- User authentication
- Shopping cart
- Checkout
- Order management
- Address management

## 📁 Project Structure

```text
tumbas-commerce/
├── Backend/
>>>>>>> 7665eec (Add: Login & Register Page)
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
<<<<<<< HEAD
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
=======
│   │   └── middlewares/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── Frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── compose.yaml
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- Docker
- Docker Compose
- PostgreSQL database / Supabase

### 1. Clone the Repository
>>>>>>> 7665eec (Add: Login & Register Page)

```bash
git clone https://github.com/SyahdanIR/tumbas-commerce.git
cd tumbas-commerce
```

<<<<<<< HEAD
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
=======
### 2. Environment Variables

Create an `.env` file inside the `Backend` directory:

```env
DATABASE_URL="your_database_url"
```

Adjust the environment variables according to your local configuration.

### 3. Run with Docker

The project uses Docker Compose to run the frontend and backend services.
>>>>>>> 7665eec (Add: Login & Register Page)

From the project root:

```bash
<<<<<<< HEAD
docker compose up --build
```

=======
docker compose up
```

To rebuild the images:

```bash
docker compose up --build
```

To run the containers in detached mode:

```bash
docker compose up -d
```

>>>>>>> 7665eec (Add: Login & Register Page)
To stop the containers:

```bash
docker compose down
```

<<<<<<< HEAD
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
=======
No `-f` option is required because the project uses `compose.yaml` at the root of the repository.

## 🌐 Local Development

After running Docker Compose:

```text
Frontend → http://localhost:3001
Backend  → http://localhost:3000
```

The frontend is built with Next.js and communicates with the Hono REST API running on the backend service.

## 🔌 API

The backend provides REST API endpoints for managing products and categories.

### Products

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | `/products`     | Get all products  |
| GET    | `/products/:id` | Get product by ID |
| POST   | `/products`     | Create a product  |
| PATCH  | `/products/:id` | Update a product  |
| DELETE | `/products/:id` | Delete a product  |

### Categories

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | `/categories` | Get all categories |
| POST   | `/categories` | Create a category  |

> API endpoints will continue to be expanded as development progresses.

## 🏗️ Architecture

Tumbas uses a separate frontend and backend architecture:

```text
┌─────────────────────┐
│      Next.js        │
│      Frontend       │
│     Port: 3001      │
└──────────┬──────────┘
           │
           │ HTTP / REST API
           ▼
┌─────────────────────┐
│       Hono          │
│       Backend       │
│     Port: 3000      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      Prisma ORM     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ PostgreSQL / Supabase│
└─────────────────────┘
```

## 📌 Development Status

🚧 **In Development**

Tumbas Commerce is actively being developed. Core product and category CRUD functionality is currently implemented, while authentication, cart, checkout, and order-related features are planned for future development.
>>>>>>> 7665eec (Add: Login & Register Page)

## 👨‍💻 Author

**Syahdan Izzur Rosuli**

<<<<<<< HEAD
* GitHub: [SyahdanIR](https://github.com/SyahdanIR)
* LinkedIn: [Syahdan Izzur Rosuli](https://www.linkedin.com/in/syahdan-izzur-rosuli/)
* Portfolio: [syahdanportfolio.netlify.app](https://syahdanportfolio.netlify.app/)
=======
- GitHub: [SyahdanIR](https://github.com/SyahdanIR)
- Portfolio: [syahdanportfolio.netlify.app](https://syahdanportfolio.netlify.app/)
- LinkedIn: [Syahdan Izzur Rosuli](https://www.linkedin.com/in/syahdan-izzur-rosuli/)
>>>>>>> 7665eec (Add: Login & Register Page)
