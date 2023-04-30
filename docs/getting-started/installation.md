---
sidebar_position: 1
---

# Installation

Let's discover **[aka.backend] in less than 5 minutes**. Get started by **creating a new project**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
    - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new project

Generate a new [aka.backend] site using the **default template**.

Default template will automatically be added to your project after you run the command:

```bash
npm init aka-create@latest
#or
npx aka-create@latest
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code
editor.

The command also choice template app and installs all necessary dependencies you need to run [aka.backend].

```bash
PS C:\> npm init aka-create@latest
√ What is your aka.backend project named? ... aka.backend.app
? What template do you want to download? » - Use arrow-keys. Return to submit.
    main
>   jsonwebtoken - JWT are used for secure transmission
    prismajs
    mongodb
```

## Start your site

Run the development server:

```bash
npm run dev
```

The `cd` command changes the directory you're working with. In order to work with your newly created [aka.backend] site,
you'll need to navigate the terminal there.

The `npm run dev` command start a development server, ready for you to view at http://localhost:3000.