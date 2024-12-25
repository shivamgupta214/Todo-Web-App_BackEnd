# Express.js Backend with Prisma

This project is a backend application built using **Express.js** and **Prisma** as the ORM for database management.

---

## Requirements

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Prisma CLI](https://www.prisma.io/docs/reference/api-reference/prisma-cli) (optional, but recommended)

---

## Installation
1. Clone Resposity
   
2. Install necessary packages (npm install)
   
3. Setup Databse
  - Create a .env file in the root of your project:
  - touch .env
  - Add the following environment variables to the .env file:
  - DATABASE_URL="your-database-url"
  - Replace your-database-url with the connection string for your database. For example, for a MySQL database:
  - DATABASE_URL="mysql://user:password@localhost:3306/todo_app"

4. Initialize prima
   - npx prisma init
   - npx prisma migrate dev --name init
   - npx prisma generate

5. Run Application
   - npx tsx src/index.ts

  
