---
sidebar_position: 1
---

# Requests

The Requests page provides information on how the system handles HTTP requests using Express. Aka loads the
GET, POST, PATCH, and DELETE routes based on the constants exported in the routing files.

## GET requests

you can define a constant named "get" which is equal to a function (preferably an arrow function) that takes three
parameters: the req object of Express.js, the res object, and an optional next function.

```js title=/route/example.js
export const $get = (req, res) => {

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

you can define a constant named "post" which is equal to a function (preferably an arrow function) that takes three
parameters: the req object of Express.js, the res object, and an optional next function.

```js title=/route/example.js
export const $post = (req, res) => {

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

you can define a constant named "get" which is equal to a function (preferably an arrow function) that takes three
parameters: the req object of Express.js, the res object, and an optional next function.

```js title=/route/[example].js
export const $get = (req, res) => {

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
Each file that is placed in the routes folder can support multiple HTTP methods in the same file. This is possible by
exporting multiple constants that are functions with different method types (e.g. GET, POST, PUT, DELETE). These
functions receive the Express request and response objects as arguments and can be named according to the desired route
path. By using this approach, it is possible to define and manage all the routes for a specific resource in a single
file.
:::

```js
export const $post = (req, res) => {
    res.json({
        method: 'POST',
    })
}

export const $get = (req, res) => {
    res.json({
        method: 'POST',
    })
}

export const $put = (req, res) => {
    res.json({
        method: 'PUT',
    })
}

export const $delete = (req, res) => {
    res.json({
        method: 'PUT',
    })
}

export const $head = (req, res) => {
    res.json({
        method: 'HEAD',
    })
}

export const $options = (req, res) => {
    res.json({
        method: 'OPTIONS',
    })
}

export const $connect = (req, res) => {
    res.json({
        method: 'CONNECT',
    })
}

export const $trace = (req, res) => {
    res.json({
        method: 'TRACE',
    })
}

export const $patch = (req, res) => {
    res.json({
        method: 'PATCH',
    })
}
```