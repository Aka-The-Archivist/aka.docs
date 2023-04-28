---
sidebar_position: 1
---

# Requests

The Requests page provides information on how the system handles HTTP requests using Aka. System loads the
GET, POST, PATCH, and DELETE routes based on the default functions exported in the routing files.

## GET requests

you can define a default function named "get" which is equal to a function that takes
three
parameters: the req object of request, the res object, and an optional next function.

```js title=/route/example.js
export default function get(req, res) {

    const {...data} = req.query; // get get params

    res.json({
        method: 'GET',
        data: data,
    })
}
```

:::tip
The Requests explains how to handle GET requests using this method, as well as providing examples of how to use
parameters and query strings in
your requests.
:::

## POST requests

you can define a default function named "post" which is equal to a function that takes
three
parameters: the req object of request, the res object, and an optional next function.

```js title=/route/example.js
export default function post(req, res) {

    const {...data} = req.body; // get post params

    res.json({
        method: 'POST',
        data: data,
    })
}
```

:::tip
The Requests explains how to handle POST requests using this method, as well as providing examples of how to use
parameters and query strings in
your requests.
:::

## PARAMS requests

you can define a default function named "get","post" or "all" which is equal to a function that takes
three
parameters: the req object of request, the res object, and an optional next function.

```js title=/route/[example].js
export default function get(req, res) {

    const {example} = req.params; // get route params

    res.json({
        method: 'POST',
        data: example,
    })
}
```

:::tip
The Requests explains how to handle PARAMS requests using this method, as well as providing examples of how to use
parameters and query strings in
your requests.
:::

## MULTIPLE requests

:::important
Each file that is placed in the routes folder can support multiple HTTP methods. This is possible by
exporting default functions that are named  "all", equals (e.g. GET, POST, PUT, DELETE).
By using this approach, it is possible to define and manage all the routes for a specific resource in a single
file.
:::

```js
export default function all(req, res) {
    res.json({
        method: req.method,
    })
}
```