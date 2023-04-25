"use strict";(self.webpackChunkaka_docs=self.webpackChunkaka_docs||[]).push([[635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},r="Directory Structure",s={unversionedId:"getting-started/structure",id:"getting-started/structure",title:"Directory Structure",description:"The default application structure is intended to provide a great starting point for both large and small",source:"@site/docs/getting-started/structure.md",sourceDirName:"getting-started",slug:"/getting-started/structure",permalink:"/aka.docs/docs/getting-started/structure",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/aka.docs/docs/getting-started/configuration"},next:{title:"Deployment on production",permalink:"/aka.docs/docs/getting-started/deployment"}},l={},c=[{value:"The Root Directory",id:"the-root-directory",level:2},{value:"/config",id:"config",level:2},{value:"/config/app.js",id:"configappjs",level:3},{value:"/config/middleware.js",id:"configmiddlewarejs",level:3},{value:"/config/policy.js",id:"configpolicyjs",level:3},{value:"/routes",id:"routes",level:2},{value:"routes/index.js",id:"routesindexjs",level:3},{value:"/routes/hello",id:"routeshello",level:2},{value:"routes/hello/id.js",id:"routeshelloidjs",level:3},{value:"routes/hello/index.js",id:"routeshelloindexjs",level:3},{value:"/.env",id:"env",level:2},{value:"/.env.example",id:"envexample",level:2},{value:"/LICENSE.txt",id:"licensetxt",level:2},{value:"/README.md",id:"readmemd",level:2},{value:"/package-lock.json",id:"package-lockjson",level:2},{value:"/package.json",id:"packagejson",level:2},{value:"/.gitignore",id:"gitignore",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"directory-structure"},"Directory Structure"),(0,a.kt)("p",null,"The default application structure is intended to provide a great starting point for both large and small\napplications. But you are free to organize your application however you like."),(0,a.kt)("h2",{id:"the-root-directory"},"The Root Directory"),(0,a.kt)("p",null,"Structure of your project:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docs Version Dropdown",src:n(7939).Z,width:"2047",height:"1000"})),(0,a.kt)("h2",{id:"config"},"/config"),(0,a.kt)("p",null,"This folder contains all the configuration settings for your application, including database connections, server\nsettings, and other important options. These configurations are written in ES6 and are exported as an object, making it\neasy to access and modify them throughout your code. By keeping your configuration settings in a separate folder, you\ncan easily manage different environments and deploy your application to various platforms with different configurations."),(0,a.kt)("h3",{id:"configappjs"},"/config/app.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n\n    /**\n     |--------------------------------------------------------------------------\n     | Application Name\n     |--------------------------------------------------------------------------\n     |\n     | This value is the name of your application. This value is used when the\n     | framework needs to place the application's name in a notification or\n     | any other location as required by the application or its packages.\n     |\n     */\n\n    name: process.env.APP_NAME || 'aka backend',\n")),(0,a.kt)("p",null,"This file contains all the configuration settings for your application, including the name of your application, the port\nit runs on, and other settings that you may need to customize. These configurations can be used throughout your\napplication to ensure consistency and easy maintenance. You can also use this file to initialize any middleware or\nlibraries that your application needs to function properly. By keeping all the configuration settings in one place, you\ncan easily manage and maintain your application's behavior and performance."),(0,a.kt)("h3",{id:"configmiddlewarejs"},"/config/middleware.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import helmet from "helmet";\n\nexport default {\n\n    /**\n     |--------------------------------------------------------------------------\n     | helmet.js middleware\n     |--------------------------------------------------------------------------\n     |\n     | security middleware for Express.js that helps protect your web application\n     | from several common attacks.\n     */\n    helmet: helmet()\n')),(0,a.kt)("p",null,"This file contains all the middleware functions for ExpressJS, the framework used by aka backend. These middleware\nfunctions are injected into your application in the order they are added to this file. You can add or remove middleware\nfunctions in this file to customize the behavior of your application."),(0,a.kt)("p",null,"Middleware functions can be used to handle requests and responses, parse data, authenticate users, and perform other\ntasks that are necessary for your application\nto function properly. By keeping all the middleware functions in one file, you can easily manage and modify your\napplication's behavior and ensure that it runs smoothly."),(0,a.kt)("h3",{id:"configpolicyjs"},"/config/policy.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n\n    /**\n     |--------------------------------------------------------------------------\n     | Application origin\n     |--------------------------------------------------------------------------\n     |\n     | This value is the origin of your application. This value is used when the\n     | framework needs to place the application's origin in\n     | any other location as required by the application or its packages.\n     |\n     */\n    origin: ['http://127.0.0.1:3000'],\n")),(0,a.kt)("p",null,"This file contains the CORS policy for your application, which specifies which origins are allowed to access your\napplication's resources. It also contains the allowed methods for both CORS and routing."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you add or remove a method, such as POST, in this file, your application will no longer accept requests with that\nmethod, even if you have routes that are set up to handle POST requests. This can be useful for enforcing security or\nfor limiting the methods that are allowed for a particular endpoint._")),(0,a.kt)("h2",{id:"routes"},"/routes"),(0,a.kt)("p",null,"This folder contains all the routes that will be loaded at the system level for your application. This folder contains\nroute files, where each file corresponds to a specific route, and the method chosen for export corresponds to the HTTP\nmethod."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'The index files are the base for the routes. For example, if you have a file named users/index.js, it will become the\nbase route "/users". If you export a "GET" function in the users/index.js file, you can make a GET request to "/users"\nand retrieve the desired data.')),(0,a.kt)("h3",{id:"routesindexjs"},"routes/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n *\n * @param req\n * @param res\n */\nexport const get = (req, res) => {\n        res.json({\n            method: 'GET',\n            message: 'Start from editing routes/index.js',\n        })\n    }\n")),(0,a.kt)("p",null,'This file contains the first route for your application, which is the root route ("/"). This file exports a constant\nnamed "get", which is a function that takes the parameters "req", "res", and "next" (optional) and handles the incoming\nHTTP GET request.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This file is an example of how to define a route in aka backend framework. By exporting a function that takes the\nnecessary parameters, you can define your routes and handle incoming requests. You can modify this file to include\nadditional routes or to modify the behavior of the root route.")),(0,a.kt)("h2",{id:"routeshello"},"/routes/hello"),(0,a.kt)("p",null,'This folder contains an index.js file, which is the default file that the system responds to. If there is a file named\nhello.js in this folder, the code inside the index.js file will still be executed instead of the code inside the\nhello.js file. When you access the "/hello" route in your application, the system will look for an index.js file in the\n/routes/hello folder and execute the code inside that file. By naming your file index.js, you can ensure that the system\nresponds to the correct file and executes the intended code.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'By organizing your routes into separate folders like "/routes/hello", you can easily manage and maintain the behavior of\nyour application\'s routes. This makes it easy to add new routes, modify existing ones, or remove routes that are no\nlonger needed, all while maintaining a clear and organized structure for your application.')),(0,a.kt)("h3",{id:"routeshelloidjs"},"routes/hello/","[id]",".js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n *\n * @param req\n * @param res\n */\nexport const get = (req, res) => {\n\n        const {id} = req.params; // get query params\n\n        res.json({\n            method: 'GET',\n            params: id,\n            message: 'Start from editing routes/hello/[id].js',\n        })\n    }\n")),(0,a.kt)("p",null,'This file corresponds to a dynamic route, which means that it contains parameters that can be passed in as part of the\nroute. In this case, the parameter is "id", which is enclosed in square brackets to distinguish it from the rest of the\nroute.'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'For example, if you have a file named "hello/',"[id]",'.js" in this folder and you make a GET request to "/hello/params", the\nsystem will capture "params" as the value of the "id" parameter and execute the code inside the file with the\nappropriate parameter value.')),(0,a.kt)("h3",{id:"routeshelloindexjs"},"routes/hello/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n *\n * @param req\n * @param res\n */\nexport const post = (req, res) => {\n\n        const {...data} = req.body; // get post params\n\n        res.json({\n            method: 'POST',\n            data: data,\n            message: 'Start from editing routes/hello/index.js',\n        })\n    }\n")),(0,a.kt)("p",null,"This file contains an example of a POST route, which demonstrates how to handle POST requests and process parameters\npassed in the request body, instead of as query parameters."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In this file, you can see how to define a route that accepts a POST request and how to access the data passed in the\nrequest body. By using the appropriate middleware and methods, you can parse the request body and extract the necessary\ndata to perform the intended operations.")),(0,a.kt)("h2",{id:"env"},"/.env"),(0,a.kt)("p",null,"This file contains environment variables that are specific to your project, such as API keys, database credentials, and\nother sensitive information. These variables are loaded into your application at runtime and can be accessed through the\nprocess.env object in your code. It's important to keep this file secure and not to commit it to your version control\nsystem."),(0,a.kt)("h2",{id:"envexample"},"/.env.example"),(0,a.kt)("p",null,"This file is a template for your .env file and provides an example of the environment variables that your application\nrequires. This file is typically committed to your version control system so that other developers can see what\nenvironment variables are needed for the project."),(0,a.kt)("h2",{id:"licensetxt"},"/LICENSE.txt"),(0,a.kt)("p",null,"This file contains the license for your project, which specifies the terms and conditions under which others can use,\nmodify, and distribute your project. There are many different types of licenses, each with its own set of rules and\nrestrictions, so it's important to choose a license that suits your needs and goals for the project. Including a license\nin your project helps ensure that others can use and contribute to your project with clarity and transparency."),(0,a.kt)("h2",{id:"readmemd"},"/README.md"),(0,a.kt)("p",null,"This file contains documentation for your project. Here you can provide information on how to install, use, and\ncontribute to your project, as well as provide instructions for deployment and other important information for users."),(0,a.kt)("h2",{id:"package-lockjson"},"/package-lock.json"),(0,a.kt)("p",null,"This file is automatically generated when you install dependencies for your project through npm. It contains an exact\ncopy of the dependencies and versions used for your project, ensuring consistency across team members and across\ndifferent development environments."),(0,a.kt)("h2",{id:"packagejson"},"/package.json"),(0,a.kt)("p",null,"This file contains information about your project, such as the package name, version, dependencies, build and test\nscripts, and other useful information for running your project. You can also use this file to configure other settings,\nsuch as project description, author, and license."),(0,a.kt)("h2",{id:"gitignore"},"/.gitignore"),(0,a.kt)("p",null,"This file specifies the files and folders that should not be tracked by the Git version control system. Typically, this\nfile is used to exclude temporary files, log files, local configuration files, and other resources that are not strictly\nnecessary for the operation of the project and that may change frequently during development. This way, you can keep\nyour Git repository clean and organized."))}p.isMDXComponent=!0},7939:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/structure-024219-38aa0bf41080a278678e15ddaac2f621.png"}}]);