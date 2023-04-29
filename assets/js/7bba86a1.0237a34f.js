"use strict";(self.webpackChunkaka_docs=self.webpackChunkaka_docs||[]).push([[806],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(h,s(s({ref:n},d),{},{components:t})):r.createElement(h,s({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1},s="Json Web Token",i={unversionedId:"code-branches/json-web.token",id:"code-branches/json-web.token",title:"Json Web Token",description:"JSON Web Tokens are used for secure transmission of information between parties. In Aka Backend, JWTs are commonly used",source:"@site/docs/code-branches/json-web.token.md",sourceDirName:"code-branches",slug:"/code-branches/json-web.token",permalink:"/aka.docs/docs/code-branches/json-web.token",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Code Sandbox",permalink:"/aka.docs/docs/category/code-sandbox"},next:{title:"Database ORM",permalink:"/aka.docs/docs/code-branches/prisma-js"}},l={},c=[{value:"CodeSandbox repo",id:"codesandbox-repo",level:2},{value:"Install jsonwebtoken npm",id:"install-jsonwebtoken-npm",level:2},{value:"Create verify middleware",id:"create-verify-middleware",level:2},{value:"Create auth endpoint",id:"create-auth-endpoint",level:2},{value:"Create user endpoint",id:"create-user-endpoint",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-web-token"},"Json Web Token"),(0,a.kt)("p",null,"JSON Web Tokens are used for secure transmission of information between parties. In Aka Backend, JWTs are commonly used\nto authorize access to protected routes."),(0,a.kt)("p",null,"This section includes examples of how to implement JWT-based authentication and authorization in Aka Backend, including\ngenerating and verifying tokens, and protecting routes using middleware."),(0,a.kt)("h2",{id:"codesandbox-repo"},"CodeSandbox repo"),(0,a.kt)("p",null,"CodeSandbox is an online development platform that allows you to create, edit, and collaborate on web application\nprojects using popular web technologies such as React, Vue, Angular, and more. With CodeSandbox, you can quickly create\nsandbox environments where you can experiment with code, test your ideas, and share your work with others."),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/github/Aka-The-Archivist/aka.backend/jsonwebtoken?module=/main.js&autoresize=1&moduleview=1&hidenavigation=1&editorsize=65&expanddevtools=1&theme=dark&view=split&previewwindow=console",style:{width:"100%",height:"500px",border:"0",borderRadius:"8px",overflow:"hidden"}}),(0,a.kt)("h2",{id:"install-jsonwebtoken-npm"},"Install jsonwebtoken npm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install jsonwebtoken\n")),(0,a.kt)("h2",{id:"create-verify-middleware"},"Create verify middleware"),(0,a.kt)("p",null,"Here's an example of a simple middleware function that store and verify jsonwebtoken of the incoming request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=/middleware/index.js",title:"/middleware/index.js"},'import jwt from "jsonwebtoken";\n\n/** @middleware\n |--------------------------------------------------------------------------\n | custom.js middleware\n |--------------------------------------------------------------------------\n |\n | In Express.js, a middleware function is a function that has access to the\n | request object (req), the response object (res), and the next middleware\n | function in the application\'s request-response cycle. A middleware function\n | can execute any code, modify the request and response objects, end the\n | request-response cycle, or call the next middleware function in the stack.\n |\n */\n\n// auth user path only middleware\nexport default ["/user", (req, res, next) => {\n\n    // middleware function for authentication\n    const authHeader = req.headers["authorization"];\n    const token = authHeader && authHeader.split(" ")[1];\n\n    // abort if not authenticate\n    if (token == null)\n        return res.status(401).json({\n            message: "Unauthorized",\n        });\n\n    // use jsonwebtoken in {req}\n    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {\n        // abort if not authenticate\n        if (err !== null)\n            return res.status(422).json({\n                message: "Unauthorized",\n            });\n\n        req.user = user;\n\n        next() // return request ok\n    });\n\n}];\n')),(0,a.kt)("p",null,"How it works is when a request is made to a specific route, you can have the (req, res) variables sent to an\nintermediary function before the one specified in the app.get((req, res) => {})."),(0,a.kt)("p",null,"The middleware is a function that takes parameters of (req, res, next)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The req is the sent request (GET, POST, DELETE, PUT, etc.)."),(0,a.kt)("li",{parentName:"ul"},"The res is the response that can be sent back to the user in a multitude of ways (res.sendStatus(200), res.json(),\netc.)."),(0,a.kt)("li",{parentName:"ul"},"The next is a function that can be called to move the execution past the piece of middleware and into the actual\napp.get server response.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An example request using this middleware function would resemble something like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GET https://127.0.0.1:3000/user\nAuthorization: Bearer JWT_ACCESS_TOKEN\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This code will authenticate the token provided by the client. If it is valid, it can proceed to the request. If it is\nnot valid, it can be handled as an error.")),(0,a.kt)("h2",{id:"create-auth-endpoint"},"Create auth endpoint"),(0,a.kt)("p",null,"This can be sent back from a request to sign in or log in a user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=/auth/index.js",title:"/auth/index.js"},"import jwt from 'jsonwebtoken';\n\n/**\n *\n * @param req\n * @param res\n */\nexport default function post(req, res) {\n\n    const {...user} = req.body;\n\n    res.json({\n        token: jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: '1800s'})\n    })\n}\n")),(0,a.kt)("h2",{id:"create-user-endpoint"},"Create user endpoint"),(0,a.kt)("p",null,"This can be sent back from a request to logged user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=/auth/index.js",title:"/auth/index.js"},"/**\n *\n * @param req\n * @param res\n */\nexport default function get(req, res) {\n    res.json({\n        method: 'GET',\n        user: req.user,\n    })\n}\n")))}p.isMDXComponent=!0}}]);