---
sidebar_position: 3
---

# Environment Config

System configurations are an essential part of any application, allowing you to fine-tune and optimize your
application's behavior and performance. In the context of aka backend framework, system configurations are implemented
as a set of ES6-exported objects that specify the settings and parameters for your application.

The system uses the dotenv package to manage environment variables. Environment variables are used to store sensitive or
configuration data that your application needs to function properly, such as API keys, passwords, and database URLs.

The dotenv package allows you to define these environment variables in a file called .env, which is not committed to
source control. This file should contain key-value pairs of the environment variables that you want to use in your
application. For example:

```dotenv
APP_KEY="3J5YWMEYp3dqOR7"
APP_NAME="Aka backend"
APP_DEBUG=true
APP_PORT=3050
```

You can then load these environment variables into your application using the dotenv package. To do this, you need to
require dotenv at the beginning of your application, typically in your app.js or server.js file.

Once the environment variables are loaded, you can access them in your application using the process.env object. For
example, to access the PORT environment variable, you would use process.env.PORT.

It's worth noting that the dotenv package should only be used in development and testing environments. In production,
you should use a different method to manage environment variables, such as setting them directly on the server or using
a service like AWS Parameter Store or Google Cloud Secrets Manager.

In aka backend framework, the system configurations are stored in the /config folder and are loaded automatically when
the application starts. By modifying these configurations, you can change the behavior and functionality of your
application in a variety of ways, making it easier to build and manage complex applications that meet your needs.