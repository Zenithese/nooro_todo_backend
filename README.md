# Todo API Backend

A simple backend API for task management featuring **Express.js**, **TypeScript**, **Prisma ORM**, and **MySQL**.

## Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MySQL**: Installed locally or accessible remotely.

---

### Install dependencies

Run the following command to install dependencies:

```bash
npm install
```

### Environment variables

Set up your database connection in the .env file. Replace username, password, and database_name with your MySQL credentials:

```
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
```

### Database Setup

Generate the Prisma Client:

```bash
npx prisma generate
```

Apply database migrations:

```bash
npx prisma migrate dev --name init
```

---

### Run the project

Run the following command to run the project in development:

```bash
npm run dev
```

**For questions or suggestions, feel free to reach out**:

hire.justin.andersen@gmail.com