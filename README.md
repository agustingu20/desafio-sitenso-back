# Challenge aplicación web para empresa Sitenso :rocket:
## Objetivo del challenge // Challenge objective
Desarrollar una aplicación en ReactJS que muestre la información de diferentes películas, en donde la información se obtiene de TV MAZE API. 

Develop an app in ReactJS that shows the info of differents movies, where the info obtains from TV MAZE API.

## Rutas utilizadas para la app del backend

#### Routes 
```Ruby

'api/usuarios', usuariosRoute:

- router.get('/', usuarioController.obtenerUsuarios);
- router.delete('/:userId', usuarioController.deleteUsuario);

'/api/auth', authRoute:

- router.post('/register', usuarioValidations.crearUsuario, authController.register);
- router.post('/login', authValidations.login, authController.login);
- router.get('/', auth, authController.getUser);

'/api/favouritesMovies', favouriteMovieRoute:

- router.post("/", auth, favouriteMovieController.favouriteMovie)
- router.get("/", auth, favouriteMovieController.getFavouriteMovie)
- router.delete("/:movieId", auth, favouriteMovieController.deleteFavouriteMovie)


````

# Instalación
Tener instalado el paquete [npm](https://www.npmjs.com/)
<br />

### Clonar el repositorio

```bash
$ git clone https://github.com/agustingu20/desafio-sitenso.git
$ cd ../path/to/the/file
$ npm install
$ npm start

```

# Installation
Use the package manager [npm](https://www.npmjs.com/)
<br />

### Clone the repository

```bash
$ git clone https://github.com/agustingu20/desafio-sitenso.git
$ cd ../path/to/the/file
$ npm install
$ npm start

```

# Autor ✒️
**Agustín Gómez Urrutia** - [agustingu20](https://github.com/agustingu20)

# Librerías 📚
- bcryptjs
- cors
- dotenv
- express
- express-validator
- jsonwebtoken
- mongoose
- morgan
