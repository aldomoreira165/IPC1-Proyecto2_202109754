# IPC1--Proyecto2_202109754
#Datos de Estudiante
| Carnet  | Nombre Completo |  Nombre de Auxiliar |
| ------------- | ------------- |
| 202109754  | Aldo Saúl Vásquez Moreira  | Javier Oswaldo Mirón Cifuentes |

#Frontend

- ##Tecnogía Utilizada
Para el desarrollo del Frontend de este proyecto se utilizó el framework Angular. El cual es un Framework de JavaScript de código abierto escrito en TypeScript. Su objetivo principal es desarrollar aplicaciones de una sola página. Google se encarga del mantenimiento y constantes actualizaciones de mejoras para este framework. Por lo cual, se utilizaron algunos componentes de este framework para mejor el aspecto visual y la experiencia de usuario.
![](https://i.imgur.com/dbZlse9.png)

- ##Servicios Utilizados
Para recuperar la información del backend transmitada por los endpoints creados fue necesaria la implementación de servicios. Dentro de los servicios utilizados se tienen los siguientes:

		`CargarDatos(): any {
    		return this.http.get(`${this.API_URI}/pokemones`);
  		}

  		obtenerPorId(id: string): any{
    		return this.http.get(`${this.API_URI}/pokemonNumero/${id}`)
 		 }

  		obtenerPorNombre(nombre: string): any{
   		 return this.http.get(`${this.API_URI}/pokemonNombre/${nombre}`)
 		 }

  		obtenerPorTipo(tipo: string){
    		return this.http.get(`${this.API_URI}/pokemonesTipo/${tipo}`)
  		}`
Básicamente, en los servicios creados se accede a las URL de los endpoints y se les envía el parámetro necesario para acceder a la información del Backend y buscar un dato en específico.

- ##Manual de Uso de la Aplicación
Al iniciar la aplicación el usuario se encuentra con una pantalla de Login en las que deberá ingresar sus credenciales.
![](https://i.imgur.com/Z0bt8kB.png)
Dichas credenciales se verifican y si tanto el nombre de usuario como la contraseña son correctas el usuario es redirigido a la pantalla home en la cual podrá acceder a la Pokedex.
![](https://i.imgur.com/z7kaIgv.png)
Dentro de la barra de búsqueda el usuario podrá buscar por cualquiera de los parámetros de los Pokemon (Número/Id, Nombre o Tipo). Es importante mencionar que no será necesario especificar el tipo de dato por el cual se realizará la búsqueda. 
Si la información a buscar no coincide con ninguno de los datos de los Pokemon, no se mostrará nada en pantalla.
![](https://i.imgur.com/bzVGVVc.png)
Finalmente, en la esquina superior izquiera se encuentra un botón para cerrar sesión.
![](https://i.imgur.com/pElJSmh.png)

#Backend

La API REST fue desarrollada por medio de NodeJS. El cual es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google

- ##Módulos Utilizados
Se utilizaron los módulos express, morgan, cors y typescript provenientes de npm.  Npm es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript, bajo Artistic License 2.0
1. Express: Es un framework web transigente, escrito en JavaScript y alojado dentro del entorno de ejecución NodeJS. El modulo explica algunos de los beneficios clave de este framework, como configurar tu entorno de desarrollo y como realizar tareas comunes en desarrollo y publicación web.
2. Morgan: Es una gran herramienta que registra las requests junto con alguna otra información dependiendo de su configuración y el valor predeterminado utilizado. Demuestra ser muy útil durante la depuración y también si desea crear archivos de registro. Requisitos previos: comprensión básica de Nodejs.
3. CORS es la abreviatura de Intercambio de recursos entre orígenes. Es un mecanismo para permitir o restringir los recursos solicitados en un servidor web dependiendo de dónde se inició la solicitud HTTP. Esta política se utiliza para proteger un determinado servidor web del acceso de otro sitio web o dominio.
4. TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.

- ##Requerimientos del Sistema
Node.js no requiere una configuración de hardware sofisticada para funcionar; la mayoría de los ordenadores de esta época deberían manejar Node.js de forma eficiente. Incluso los ordenadores más miniaturizados como el BeagleBone o el Arduino YÚN pueden ejecutar Node.js.
Sin embargo, mucho depende de qué otro software acaparador de memoria tengas ejecutado en el mismo sistema. Pero en la mayoría de los casos, no deberías preocuparte a menos que tu ordenador sea de la Era Mesozoica.

- ##Puerto Utilizado
Puerto 3000.

- ##Endpoints utilizados
1. Endpoint para obtener todos los Pokemon: Este endpoint no recibe ningún tipo de parámetro. Únicamente retorna todo el arreglo de Pokemon.
		this.router.get('/pokemons', (req, res) => {
            const poke = this.obtenerPockemons();
            res.send(poke)
        });
2. Endpoint para obtener un Pokemon por medio de su número o id: Este endpoint tiene un método que recibe como parámetro un número de id. El cual automáticamente busca en el arreglo de los Pokemon si existe un dato con ese número. De ser correcto este devuelve la información buscada.
		this.router.get('/pokemones', (req, res) => {
            const poke = this.obtenerPockemons();
            res.send(poke)
        });
3. Endpoint para obtener un Pokemon por medio de su nombre: Este endpoint tiene un método que recibe como parámetro el nombre de un Pokemon. El cual automáticamente busca en el arreglo de los Pokemon si existe un dato con ese nombre. De ser correcto este devuelve la información buscada.
		this.router.get('/pokemonNombre/:nombre', (req, res) => {
            const poke = this.obtenerPokemonPorNombre(req.params.nombre);
            res.send(poke);
        });
4. Endpoint para obtener un Pokemon por medio de su tipo: Este endpoint tiene un método que recibe como parámetro cualquiera de los tipos de Pokemon existentes (fuego, hierba y agua). El cual automáticamente busca en el arreglo de los Pokemon si existen datos con determinado tipo. De ser correcto este devuelve la información buscada.
		this.router.get('/pokemonesTipo/:tipo', (req, res) => {
            const poke = this.obtenerListaPockemonesTipo(req.params.tipo);
            res.send(poke);
        });
5. Endpoint para obtener todos los usuarios registrados: Este endpoint no recibe ningún tipo de parámetro. Únicamente retorna todo el arreglo de usuarios.
		this.router.get('/usuarios', (req, res) => {
            const poke = this.obtenerUsuarios();
            res.send(poke)
        });
