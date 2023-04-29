---
sidebar_position: 1
---

# Middleware

Middleware function is a function that has access to the request object (req), the response object (res), and the next
middleware function in the application's request-response cycle. A middleware function can execute any code, modify the
request and response objects, end the request-response cycle, or call the next middleware function in the stack.

Middleware functions can be used to perform a wide range of tasks such as logging, authentication, authorization, input
validation, error handling, compression, and more. They are executed in the order they are defined, so the order of
middleware functions is important.

## Example custom middleware

Here's an example of a simple middleware function that logs the HTTP method and URL of the incoming request:

```js title=/middleware/example.js
export default (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}
```

When you add a middleware function to the middleware directory in your application and export it as a
function that returns another function, it will be automatically loaded globally by the application before any routing
method. This allows you to perform common tasks like authentication or logging on every request to your application
without having to explicitly include it in each individual route.

:::tip
The middleware functions are executed in the order they are defined in the directory. So, it's important to consider the
order of middleware functions, as the behavior of the entire application could be impacted by the order in which the
middleware functions are defined.
:::

## Example routing middleware

In this example we see how to add a middleware exclusively to a specific route. You can also use a wildcard to control
access to the route.

```js title=/middleware/example.js
export default ['/example', (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}]
```
## Example :params middleware

In this example we see how to add a middleware exclusively to a specific route. You can also use a wildcard to control
access to the route.

```js title=/middleware/example.js
export default ['/example/:id', (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}]
```