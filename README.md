# pokeapi
Reto usando la pokeapi en el que se usó React con Vite y Firebase para la db


Para inicializar el proyecto usé :

  npm init vite (Escoger la opción de React y luego JavaScript)

Luego adentro usé:

  npm install firebase (luego crear y configurar el firebase.js dentro de /src con mis keys)

Para correr el proyecto simplemente:

  npm run dev

Por otro lado, usé más herramientas que ya tenía instaladas cómo React Router para manejar las rutas.


VISTAS DEL PROYECTO:

HOME ("/"):

![image](https://github.com/Kenguan1/pokeapi/assets/49210338/e0c8445e-11b7-442b-ab85-7b621dbcd274)
![image](https://github.com/Kenguan1/pokeapi/assets/49210338/8518e4e6-c6ac-4008-90fa-76fef335ad87)


POKEDISPLAY ("/pokemon/id"): Cuándo estamos autenticados y le damos click a un Pokémon:
![image](https://github.com/Kenguan1/pokeapi/assets/49210338/3a46e39a-673e-4560-9e6c-3527f6b17cbc)
![image](https://github.com/Kenguan1/pokeapi/assets/49210338/da09868b-7584-4de1-98b5-1cc98412e3e0)
![image](https://github.com/Kenguan1/pokeapi/assets/49210338/94c4b3ea-a1e9-4ac3-aebc-80d2d6e7de68)


LOGIN("/login"): Cuándo le damos a la opción "SESIÓN" de la navbar o tratamos de entrar a la vista de un Pokémon sin estar autenticados
![image](https://github.com/Kenguan1/pokeapi/assets/49210338/4cd2e2ff-266a-4c21-bd89-7123e324fc27)

Cuándo el usuario o contraseña no coinciden:
![image](https://github.com/Kenguan1/pokeapi/assets/49210338/d8b45e90-7da0-4b35-b7bd-dfca909a75c4)

Cuándo se inicia sesión correctamente:

![image](https://github.com/Kenguan1/pokeapi/assets/49210338/5ad3d1ec-ea81-43dc-bf92-b9e831e5707b)


REGISTRAR("/register") vamos desde la página /login cuándo le damos al botón "Registrar acá": 
![image](https://github.com/Kenguan1/pokeapi/assets/49210338/7f68edb5-fd66-4307-bf33-0e3f767f38e8)

Cuándo el correo ya está en uso:

![image](https://github.com/Kenguan1/pokeapi/assets/49210338/25cf7d18-c0d2-4ac7-a4ff-1633ed8be551)

Responsive:


![image](https://github.com/Kenguan1/pokeapi/assets/49210338/eb97eb53-f58d-4b79-9544-52bf030e9187)
![image](https://github.com/Kenguan1/pokeapi/assets/49210338/e34ec89c-0072-431a-b14d-339e74457d5d)
![image](https://github.com/Kenguan1/pokeapi/assets/49210338/39f858dc-d041-4c08-a191-699bdb6907d5)


Hay unas pequeñas transiciones que no se alcanzan a apreciar con imágenes y dan una experiecia agradable

DEMO en: https://ken1pokeapi.netlify.app/
Sé que no era necesario el deploy, lo hice para asegurarme al 100% que funcionaba el responsive en otros dispositivos

Hay un par de detalles que por hacer el deploy rápido y sencillo no se ven tal cual, como el footer.



