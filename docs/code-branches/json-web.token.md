---
sidebar_position: 1
---

# Json Web Token

JSON Web Tokens are used for secure transmission of information between parties. In Aka Backend, JWTs are commonly used
to authorize access to protected routes.

This section includes examples of how to implement JWT-based authentication and authorization in Aka Backend, including
generating and verifying tokens, and protecting routes using middleware.

## CodeSandbox repo

CodeSandbox is an online development platform that allows you to create, edit, and collaborate on web application
projects using popular web technologies such as React, Vue, Angular, and more. With CodeSandbox, you can quickly create
sandbox environments where you can experiment with code, test your ideas, and share your work with others.

<iframe
src="https://codesandbox.io/embed/github/Aka-The-Archivist/aka.backend/jsonwebtoken?module=/main.js&autoresize=1&moduleview=1&hidenavigation=1&editorsize=65&expanddevtools=1&theme=dark&view=split&previewwindow=console"
style={{
width: "100%",
height: "500px",
border: "0",
borderRadius: "8px",
overflow: "hidden"
}}
/>

## Install jsonwebtoken npm

```bash
npm install jsonwebtoken
```

## Create verify middleware

Here's an example of a simple middleware function that store and verify jsonwebtoken of the incoming request:

```js title=/middleware/index.js
import jwt from "jsonwebtoken";

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

// auth user path only middleware
export default ["/user", (req, res, next) => {

    // middleware function for authentication
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // abort if not authenticate
    if (token == null)
        return res.status(401).json({
            message: "Unauthorized",
        });

    // use jsonwebtoken in {req}
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        // abort if not authenticate
        if (err !== null)
            return res.status(422).json({
                message: "Unauthorized",
            });

        req.user = user;

        next() // return request ok
    });

}];
```

How it works is when a request is made to a specific route, you can have the (req, res) variables sent to an
intermediary function before the one specified in the app.get((req, res) => {}).

The middleware is a function that takes parameters of (req, res, next).

- The req is the sent request (GET, POST, DELETE, PUT, etc.).
- The res is the response that can be sent back to the user in a multitude of ways (res.sendStatus(200), res.json(),
  etc.).
- The next is a function that can be called to move the execution past the piece of middleware and into the actual
  app.get server response.

> An example request using this middleware function would resemble something like this:

```bash
GET https://127.0.0.1:3000/user
Authorization: Bearer JWT_ACCESS_TOKEN
```

:::tip
This code will authenticate the token provided by the client. If it is valid, it can proceed to the request. If it is
not valid, it can be handled as an error.
:::

## Create auth endpoint

This can be sent back from a request to sign in or log in a user:

```js title=/auth/index.js
import jwt from 'jsonwebtoken';

/**
 *
 * @param req
 * @param res
 */
export default function post(req, res) {

    const {...user} = req.body;

    res.json({
        token: jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: '1800s'})
    })
}
```

## Create user endpoint

This can be sent back from a request to logged user:

```js title=/auth/index.js
/**
 *
 * @param req
 * @param res
 */
export default function get(req, res) {
    res.json({
        method: 'GET',
        user: req.user,
    })
}
```