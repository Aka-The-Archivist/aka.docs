---
sidebar_position: 2
---

# Database ORM

🚀 **[aka.backend]** is designed to be highly extensible and customizable, and one of the ways to achieve this is
through integration with third-party libraries. One of the most popular options for building APIs in Node.js is Prisma,
a modern database toolkit that provides a type-safe API for your database schema.

Is Seamlessly integrates with Prisma, allowing you to use its powerful features to build robust and scalable APIs. With
Prisma, you can easily generate a type-safe client for your database, perform complex queries, and even implement
real-time subscriptions.

[OFFICIAL DOCUMENTATIONS](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-node-mysql)

:::info
📖 This documentation page provides a guide on how to integrate [aka.backend] with Prisma, including step-by-step
instructions and code snippets.

Whether you're building a new API from scratch or migrating an existing one to aka, this integration will help you
streamline your development process and deliver high-quality APIs
faster.
:::

## CodeSandbox repo

CodeSandbox is an online development platform that allows you to create, edit, and collaborate on web application
projects using popular web technologies such as React, Vue, Angular, and more. With CodeSandbox, you can quickly create
sandbox environments where you can experiment with code, test your ideas, and share your work with others.

<iframe
src="https://codesandbox.io/embed/github/Aka-The-Archivist/aka.backend/prismajs?module=/main.js&autoresize=1&moduleview=1&hidenavigation=1&editorsize=65&expanddevtools=1&theme=dark&view=split&previewwindow=console"
style={{
width: "100%",
height: "500px",
border: "0",
borderRadius: "8px",
overflow: "hidden"
}}
/>

## Install prisma npm

As a first step, navigate into your project directory that contains the package.json file.

Next, add the Prisma CLI as a development dependency to your project:

```bash
npm install prisma --save-dev
```

You can now invoke the Prisma CLI by prefixing it with npx:

```bash
npx prisma
```

> See installation instructions to learn how to install Prisma using a different package manager.

Next, set up your Prisma project by creating your Prisma schema file template with the following command:

```bash
npx prisma init
```

This command does two things:

- creates a new directory called prisma that contains a file called schema.prisma, which contains the Prisma schema with
  your database connection variable and schema models
- creates the .env file in the root directory of the project, which is used for defining environment variables (such as
  your database connection)

## Connecting your database

To connect your database, you need to set the url field of the datasource block in your Prisma schema to your database
connection URL:

```prisma title=/prisma/schema.prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

In this case, the url is set via an environment variable which is defined in .env:

```dotenv
DATABASE_URL="mysql://root:toor@localhost:3306/prisma"
```

## Create first model for database

The data model now looks similar to this

```prisma title=/prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String?  @db.VarChar(255)
  email     String   @unique @db.VarChar(255)
}
```

## Migrate model to table

Prisma Migrate is an imperative database schema migration tool that enables you to:

- Keep your database schema in sync with your Prisma schema as it evolves and
- Maintain existing data in your database

Prisma Migrate generates a history of .sql migration files, and plays a role in both development and deployment.

:::info
If you are prototyping, consider using the db push command - see Schema prototyping with db push for examples.
:::

### Create the first migration:

```bash
prisma migrate dev
```

Your Prisma schema is now in sync with your database schema and you have initialized a migration history:

```bash
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma

Datasource "db": MySQL database "prisma" at "localhost:3306"
  migrations/
    └─ 20210313140442_init/
    └─ migration.sql

✔ Generated Prisma Client (4.13.0 | library) to .\node_modules\@prisma\client in 49ms
```

## Create your first user

If you want to create a user in your application, you can start by creating a new file in the routes/users
directory called create.js. In this file, you can write the code for the HTTP POST request handler that will receive the
user data from the client and create a new user in your database.

Here's an example of how you can write this handler using the Prisma ORM to interact with your database:

```js title=/users/create.js
import {prisma} from "../../helpers/database.js";

/**
 *
 * @param req
 * @param res
 */
export default async function post(req, res) {

    const {...data} = req.body; // get request params

    // Create data model
    const user = await prisma.user.create({
        data: data,
    })

    res.json({
        method: req.method,
        data: user,
    })
}
```

In this example, we first import the Prisma client instance from a database.js helper module. Then, we define an
asynchronous function that takes the req and res objects as arguments. This function uses object destructuring to
extract the user data from the request body and pass it as an argument to the prisma.user.create() method. Finally, we
send the new user data back to the client in the response.

You can customize this code to fit your specific use case, but this should give you a good starting point for creating a
new user in your Aka Backend application.

### Composite middleware

This example shows how to create a custom middleware function for the /users/create endpoint that validates the incoming
data before allowing the request to proceed. The middleware function is defined in the middlewares/users/create.js file
and is implemented as a composite middleware that combines multiple validation steps.

The first validation step checks if the request method is POST and if the required parameters name and email are present
in the request body. If any of these conditions fails, the middleware returns a 422 Unprocessable Entity HTTP response
with an error message.

```js title=/middlewares/users/create.js
import {prisma} from "../../helpers/database.js";

/** @middleware
 |--------------------------------------------------------------------------
 | custom.js middleware
 |--------------------------------------------------------------------------
 |
 | In Express.js, a middleware function is a function that has access to the
 | request object (req), the response object (res), and the next middleware
 | function in the application's request-response cycle. A middleware function
 | can execute any code, modify the request and response objects, end the
 | request-response cycle, or call the next middleware function in the stack.
 |
 */
export default ['/users/create', async (req, res, next) => {

    if (req.method === 'POST') {

        // handle validation result first middleware
        const {name, email} = req.body;

        // required params body
        if (!name || !email) return res.status(422).json({
            name: 'required',
            email: 'required',
        })

        // handle simple validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(422).json({
            email: 'not valid',
        })

        // check if unique
        const user = await prisma.user.findUnique({where: {email}})

        if (user) return res.status(422).json({
            email: 'already taken',
        })
    }

    next()
}]
```

The second validation step uses a regular expression to check if the email parameter is a valid email address. If the
email address is not valid, the middleware returns a 422 Unprocessable Entity HTTP response with an error message.

The final validation step checks if the email address is already taken by another user in the database. If the email
address is already in use, the middleware returns a 422 Unprocessable Entity HTTP response with an error message.

If all validation steps pass, the middleware calls the next() function to pass control to the next middleware function
in the stack, or to the endpoint handler if no other middleware functions are defined.

## Introspection

Introspect your database with Prisma: *
*[Introspect](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/introspection-node-mysql)
**