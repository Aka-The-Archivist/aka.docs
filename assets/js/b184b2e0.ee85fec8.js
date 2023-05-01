"use strict";(self.webpackChunkaka_docs=self.webpackChunkaka_docs||[]).push([[720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4729:(e,t,n)=>{n.d(t,{_:()=>a,d:()=>o});const o=function(e){void 0===e&&(e="main");for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return`https://codesandbox.io/embed/github/Aka-The-Archivist/aka.backend/${e}?module=${n.join(",")}&autoresize=1&moduleview=1&hidenavigation=1&editorsize=100&expanddevtools=1&theme=dark&view=split&previewwindow=console`},a=function(){return fetch(...arguments).then((e=>e.json()))}},5017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905)),r=n(4729);const i={sidebar_position:3},s="Atlas MongoDB",l={unversionedId:"code-examples/mongo-db",id:"code-examples/mongo-db",title:"Atlas MongoDB",description:"Welcome to the guide and example on integrating MongoDB with aka.backend! In this tutorial, we'll explore how to use",source:"@site/docs/code-examples/mongo-db.mdx",sourceDirName:"code-examples",slug:"/code-examples/mongo-db",permalink:"/docs/code-examples/mongo-db",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Database ORM",permalink:"/docs/code-examples/prisma-js"}},c={},d=[{value:"CodeSandbox repo CRUD",id:"codesandbox-repo-crud",level:2},{value:"Setting Up the Project",id:"setting-up-the-project",level:2},{value:"Connecting your database",id:"connecting-your-database",level:2},{value:"Create Database connection",id:"create-database-connection",level:2},{value:"Create your first user",id:"create-your-first-user",level:2},{value:"Collection middleware",id:"collection-middleware",level:3},{value:"Dynamic Collection",id:"dynamic-collection",level:3},{value:"Using Atlas",id:"using-atlas",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"atlas-mongodb"},"Atlas MongoDB"),(0,a.kt)("p",null,"Welcome to the guide and example on integrating MongoDB with aka.backend! In this tutorial, we'll explore how to use\nMongoDB with ","[aka.backend]",", a highly customizable backend framework for Node.js applications. MongoDB is a popular NoSQL\ndatabase that offers a flexible document-based model and a scalable, distributed architecture."),(0,a.kt)("p",null,"In this tutorial, we'll cover the basics of connecting to MongoDB using the official MongoDB driver for Node.js, and how\nto perform CRUD (Create, Read, Update, and Delete) operations on your data. We'll also show you how to integrate MongoDB\nwith aka.backend, allowing you to build powerful REST APIs and web applications."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial"},"OFFICIAL DOCUMENTATIONS")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Whether you're new to aka.backend or MongoDB, this tutorial is a great place to start. By the end of this guide, you'll\nhave a solid understanding of how to use MongoDB with aka.backend to build powerful and scalable applications. So, let's\nget started!")),(0,a.kt)("h2",{id:"codesandbox-repo-crud"},"CodeSandbox repo ","[CRUD]"),(0,a.kt)("p",null,"CodeSandbox is an online development platform that allows you to create, edit, and collaborate on web application\nprojects using popular web technologies such as React, Vue, Angular, and more. With CodeSandbox, you can quickly create\nsandbox environments where you can experiment with code, test your ideas, and share your work with others."),(0,a.kt)("iframe",{src:(0,r.d)("mongodb",["/routes/users/create.js","/routes/users/[id]/index.js","/routes/users/[id]/update.js","/routes/users/[id]/delete.js"]),style:{width:"100%",height:"500px",border:"0",borderRadius:"8px",overflow:"hidden"}}),(0,a.kt)("h2",{id:"setting-up-the-project"},"Setting Up the Project"),(0,a.kt)("p",null,"Run the following command in your shell to install the driver in your project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install mongodb@5.3\n")),(0,a.kt)("p",null,"This command performs the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Downloads the mongodb package and the dependencies it requires"),(0,a.kt)("li",{parentName:"ul"},"Saves the package in the node_modules directory")),(0,a.kt)("p",null,"Records the dependency information in the package.json file"),(0,a.kt)("h2",{id:"connecting-your-database"},"Connecting your database"),(0,a.kt)("p",null,"To connect your database, you need to set the url field of the datasource block in your connection URL,"),(0,a.kt)("p",null,"In this case, the url is set via an environment variable which is defined in .env:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dotenv"},'ATLAS_URI="mongodb://localhost:27017/demo"\n')),(0,a.kt)("h2",{id:"create-database-connection"},"Create Database connection"),(0,a.kt)("p",null,"Connection helper is a file that exports a global connection object to allow easy access to a database from\nanywhere in your application. With the connection helper, you can easily create, modify, and delete documents in your\ndatabase, and also perform more complex queries using the query language."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=/helpers/database.js",title:"/helpers/database.js"},'import {MongoClient} from "mongodb";\n\n/**\n *\n * @type {*|string}\n */\nconst connectionString = process.env.ATLAS_URI || "";\n\n/**\n *\n * @type {MongoClient}\n */\nconst client = new MongoClient(connectionString);\n\n/**\n *\n * @type {MongoClient}\n */\nconst conn = await client.connect();\n\n/**\n *\n * @type {Db}\n */\nconst database = conn.db();\n\nexport default database;\n')),(0,a.kt)("p",null,"The helper simplifies the setup for your database and reduces boilerplate code in your application, allowing you to\nfocus on your core functionality."),(0,a.kt)("h2",{id:"create-your-first-user"},"Create your first user"),(0,a.kt)("p",null,"If you want to create a user in your application, you can start by creating a new file in the routes/users\ndirectory called create.js. In this file, you can write the code for the HTTP POST request handler that will receive the\nuser data from the client and create a new user in your database."),(0,a.kt)("p",null,"Here's an example of how you can write this handler using the MongoDB ORM to interact with your database:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=/users/create.js",title:"/users/create.js"},"/**\n *\n * @param req\n * @param res\n */\nexport default async function post(req, res) {\n\n    const {...data} = req.body; // get route params\n\n    const results = await req.collection.insertOne(data);\n\n    res.json({\n        method: req.method,\n        data: results,\n    })\n}\n")),(0,a.kt)("p",null,"You can customize this code to fit your specific use case, but this should give you a good starting point for creating a\nnew user in your Aka Backend application."),(0,a.kt)("h3",{id:"collection-middleware"},"Collection middleware"),(0,a.kt)("p",null,"The Collection middleware injects a MongoDB collection into the request object for use in the routing controllers. In\nExpress.js, middleware functions are functions that have access to the request object (req), the response object (res),\nand the next middleware function in the application's request-response cycle."),(0,a.kt)("p",null,"They can execute any code, modify the request and response objects, end the request-response cycle, or call the next\nmiddleware function in the stack."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=/middlewares/collection.js",title:"/middlewares/collection.js"},'import database from "../helpers/database.js";\n\n/** @middleware\n |--------------------------------------------------------------------------\n | custom.js middleware\n |--------------------------------------------------------------------------\n |\n | In Express.js, a middleware function is a function that has access to the\n | request object (req), the response object (res), and the next middleware\n | function in the application\'s request-response cycle. A middleware function\n | can execute any code, modify the request and response objects, end the\n | request-response cycle, or call the next middleware function in the stack.\n |\n */\nexport default [\'/users\', async (req, res, next) => {\n\n    // inject collection in request\n    req.collection = await database.collection("users");\n\n    next();\n}]\n')),(0,a.kt)("h3",{id:"dynamic-collection"},"Dynamic Collection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=/middlewares/dynamic.js",title:"/middlewares/dynamic.js"},"import database from \"../helpers/database.js\";\n\n/** @middleware\n |--------------------------------------------------------------------------\n | custom.js middleware\n |--------------------------------------------------------------------------\n |\n | In Express.js, a middleware function is a function that has access to the\n | request object (req), the response object (res), and the next middleware\n | function in the application's request-response cycle. A middleware function\n | can execute any code, modify the request and response objects, end the\n | request-response cycle, or call the next middleware function in the stack.\n |\n */\nexport default ['/dynamic/:collection', async (req, res, next) => {\n\n    const {collection} = req.params; // get route params\n\n    // inject collection in request\n    req.collection = await database.collection(collection);\n\n    next();\n}]\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h4",{parentName:"admonition",id:"heres-an-example-of-how-you-can-read-your-dynamic-collection-from-parameters"},"Here's an example of how you can read your dynamic collection from :parameters:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=/routes/dynamic/[collection]/index.js",title:"/routes/dynamic/[collection]/index.js"},"/**\n *\n * @param req\n * @param res\n */\nexport default async function get(req, res) {\n\n    const results = await req.collection.find({}).limit(50).toArray();\n\n    res.json({\n        method: req.method,\n        data: results,\n    })\n\n}\n")),(0,a.kt)("h2",{id:"using-atlas"},"Using Atlas"),(0,a.kt)("p",null,"MongoDB Atlas provides an easy way to host and manage your data in the cloud. This tutorial guides you through creating\nan Atlas cluster, connecting to it, and loading sample data. *\n*",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/getting-started/"},"Introspect"),"**"))}m.isMDXComponent=!0}}]);