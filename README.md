# Laboratorio Cloud

Hacemos _npm install_. Creamos manualmente, al estar en Mac, mongo-data. Comprobamos que la aplicación arranca.
Instalamos _rimraf_. Añadimos los comandos de clean y de build. Este último ejecuta secuencialmente la limpieza y la transpilación a JavaScript.
Comprobamos que hace la _build_.
Creamos un _tsconfig.prod.json_ para excluir los _spec_ y _runners_. Hacemos los cambios en los scripts.
_node dist_ falla por los alias. Creamos el package json con los cambios correspondientes en el dist, introducimos el comando start así como las dependencias de producción. Desplegamos en render en este enlace https://labmigalkobackcloud.onrender.com
para comprobar que es correcto con la ruta https://labmigalkobackcloud.onrender.com/api/houses que revela _unauthorized_ por la securización introducida.
