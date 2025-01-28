# Instagram Backend 📸
Exercise on RESTful APIs

## <font color="#0fa" >Challenges faced during this project: </font>

### 1. Do we use app.set() or app.use() to set the views directory?
We use `app.set()` to configure application settings, such as specifying the views directory, the template engine, etc.

Key Difference:\
`app.set()`: For application settings (e.g., view engine, views directory).\
`app.use()`: For middleware functions (e.g., express.static, express.urlencoded)\
So, for setting the views directory, you must use:
`app.set("views", path.join(__dirname, "views"));`
<br/><br/><br/>

### 2.Path for views when index.js is in the src folder?
The `path.join` method builds the correct path based on the current location of index.js (where the code is being run).

In your new project:\
The views folder is at the same level as src.
The `index.js` file is inside the `src` folder.
Therefore, to go up one directory from `src` to the parent folder and access the `views` folder, you should use:\
`app.set("views", path.join(__dirname, "../views"));`
<br><br><br>

### 3. About .env
`require('dotenv')`: This loads the dotenv package.
`.config()`: This method reads your .env, file and adds the variables to process.env.  

No, you don’t need to write it like\
`const dotenv = require("dotenv").config;`

The reason is that `dotenv.config()` is a function call that loads the environment variables from the `.env` file into `process.env`.  
So you directly use:
`require('dotenv').config();`
<br><br><br>

### 4. How to use DOM in backend project?
To perform DOM manipulation, you'll need a separate JavaScript file for frontend logic. Make sure to:  
Place your frontend JavaScript file (e.g., `main.js`) in the `public` folder.
Use `express.static` to serve static files.
<br><br><br>

### 5.What Does defer Do?
The `defer` attribute ensures that the script is executed only after the entire HTML document has been parsed.  
Unlike the `async` attribute, `defer` guarantees that scripts are executed in the order they appear in the HTML.\
`<script defer src="script.js"></script>`
<br><br><br>

### 6.Order of linking CSS files and CDN
External libraries first (like Font Awesome).\
Custom CSS file second to ensure you can override styles when needed.
<br><br><br>

### 7.Why Place .env in the Root?
Separation of Concerns: Environment variables are global to the project and not specific to any single folder (like `src`).\
Easy Access: Libraries like `dotenv` (which is typically used to load environment variables) look for the `.env` file in the root directory by default.
<br><br><br>

### 8. Do I need to install `path` to use `path.join()`?
No, you don’t need to install the `path` module. It is a built-in module in Node.js, so you can use it directly without installing anything.
<br><br><br>