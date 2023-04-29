---
sidebar_position: 3
---

# Atlas MongoDB

Welcome to the guide and example on integrating MongoDB with aka.backend! In this tutorial, we'll explore how to use
MongoDB with [aka.backend], a highly customizable backend framework for Node.js applications. MongoDB is a popular NoSQL
database that offers a flexible document-based model and a scalable, distributed architecture.

In this tutorial, we'll cover the basics of connecting to MongoDB using the official MongoDB driver for Node.js, and how
to perform CRUD (Create, Read, Update, and Delete) operations on your data. We'll also show you how to integrate MongoDB
with aka.backend, allowing you to build powerful REST APIs and web applications.

[OFFICIAL DOCUMENTATIONS](https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial)

:::info
Whether you're new to aka.backend or MongoDB, this tutorial is a great place to start. By the end of this guide, you'll
have a solid understanding of how to use MongoDB with aka.backend to build powerful and scalable applications. So, let's
get started!
:::

## CodeSandbox repo [CRUD]

CodeSandbox is an online development platform that allows you to create, edit, and collaborate on web application
projects using popular web technologies such as React, Vue, Angular, and more. With CodeSandbox, you can quickly create
sandbox environments where you can experiment with code, test your ideas, and share your work with others.

<iframe
src="https://codesandbox.io/embed/github/Aka-The-Archivist/aka.backend/mongodb?module=/main.js&autoresize=1&moduleview=1&hidenavigation=1&editorsize=65&expanddevtools=1&theme=dark&view=split&previewwindow=console"
style={{
width: "100%",
height: "500px",
border: "0",
borderRadius: "8px",
overflow: "hidden"
}}
/>

## Setting Up the Project

Run the following command in your shell to install the driver in your project directory:

```bash
npm install mongodb@5.3
```

This command performs the following actions:

- Downloads the mongodb package and the dependencies it requires
- Saves the package in the node_modules directory

Records the dependency information in the package.json file

## Connecting your database

To connect your database, you need to set the url field of the datasource block in your connection URL,

In this case, the url is set via an environment variable which is defined in .env:

```dotenv
ATLAS_URI="mongodb://localhost:27017/demo"
```

## Create Database connection

Connection helper is a file that exports a global connection object to allow easy access to a database from
anywhere in your application. With the connection helper, you can easily create, modify, and delete documents in your
database, and also perform more complex queries using the query language.

```js title=/helpers/database.js
import {MongoClient} from "mongodb";

/**
 *
 * @type {*|string}
 */
const connectionString = process.env.ATLAS_URI || "";

/**
 *
 * @type {MongoClient}
 */
const client = new MongoClient(connectionString);

/**
 *
 * @type {MongoClient}
 */
const conn = await client.connect();

/**
 *
 * @type {Db}
 */
const database = conn.db();

export default database;
```

The helper simplifies the setup for your database and reduces boilerplate code in your application, allowing you to
focus on your core functionality.

## Create your first user

If you want to create a user in your application, you can start by creating a new file in the routes/users
directory called create.js. In this file, you can write the code for the HTTP POST request handler that will receive the
user data from the client and create a new user in your database.

Here's an example of how you can write this handler using the MongoDB ORM to interact with your database:

```js title=/users/create.js
/**
 *
 * @param req
 * @param res
 */
export default async function post(req, res) {

    const {...data} = req.body; // get route params

    const results = await req.collection.insertOne(data);

    res.json({
        method: req.method,
        data: results,
    })
}
```

You can customize this code to fit your specific use case, but this should give you a good starting point for creating a
new user in your Aka Backend application.

### Collection middleware

The Collection middleware injects a MongoDB collection into the request object for use in the routing controllers. In
Express.js, middleware functions are functions that have access to the request object (req), the response object (res),
and the next middleware function in the application's request-response cycle.

They can execute any code, modify the request and response objects, end the request-response cycle, or call the next
middleware function in the stack.

```js title=/middlewares/collection.js
import database from "../helpers/database.js";

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
export default ['/users', async (req, res, next) => {

    // inject collection in request
    req.collection = await database.collection("users");

    next();
}]
```

### Dynamic Collection

```js title=/middlewares/dynamic.js
import database from "../helpers/database.js";

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
export default ['/dynamic/:collection', async (req, res, next) => {

    const {collection} = req.params; // get route params

    // inject collection in request
    req.collection = await database.collection(collection);

    next();
}]
```

:::info

#### Here's an example of how you can read your dynamic collection from :parameters:

:::

```js title=/routes/dynamic/[collection]/index.js
/**
 *
 * @param req
 * @param res
 */
export default async function get(req, res) {

    const results = await req.collection.find({}).limit(50).toArray();

    res.json({
        method: req.method,
        data: results,
    })

}
```

## Using Atlas

MongoDB Atlas provides an easy way to host and manage your data in the cloud. This tutorial guides you through creating
an Atlas cluster, connecting to it, and loading sample data. *
*[Introspect](https://www.mongodb.com/docs/atlas/getting-started/)**