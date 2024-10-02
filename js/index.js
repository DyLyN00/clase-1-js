//comentario = este sirve para comentar sobre una linea "//"
/* con este guardamos y comentamos mas de una linea "/* */
/*  let saludo = "saludo"
        console.log(saludo) */


/**
 * variable = es um contenedor que almacena datos, los tipos de datos que puede almacenar son varios , numericos cadena de caracteres (string), booleano, arrays objetos, funciones.
 * 
 * scope = se refiere a ambito, hace referencia al contecto en el que la variable va a ser accesible o visible. es de donde se va a poder acceder
 * 
 * palabra clave (var, let o const) seguido de un nombre (tiene que hacer referencia al dato que va a alojar) =datos ;
 * las variables solamente van a alojar 1 solo tipo de dato
 * 
 * var => no se recomienda mucho, se usaba en versiones antiguas de js. scope de tipo global.
 * ejemplo
 * var numero = 18;
 */

/**
 * let => tiene un scope de bloque, y solo va a existir esta variable dentro del bloque de codigo donde fue declarada. es que el dato que se aloja dentro de esta variable puede modificarse.
 * utilizab camelCase => primeraPalabra => primera letra de cada palabra en mayuscula.
 * 
 * const => es una variable pero de tipo constante. que no se va a poder modificar, son valores fijos
 * las constantes se crean utilizando mayusculas ejemplo: VEINTE_Y_DOS (las constantes utilizan snakeCase) => esto se usa para diferenciar let y const en nuestros codigos
 * 
 * en javascript las variables son keySensitive => que javascript dependiendo como escribamos nosotros la palabra las va a considerar diferentes
 * 
 * para javascript estos codigos van a ser diferentes cosas
 * let rosa = 8;
   let ROSA = 9;
   let Rosa = 5;
 */

// declarar
let numero;
//asignacion
numero = 1;
// variables declarada e inicializada
let veinteYUno = 21;
console.log(veinteYUno);

veinteYUno = "veinte y uno ";
console.log(veinteYUno);

/**
 * las cadenas de caracteres o string se escriben entre 
 * ""
 * ''
 * `` alt96
 */

const VEINTE_Y_DOS = 22;
console.log(VEINTE_Y_DOS);

/*VEINTE_Y_DOS = "veinte y dos";
console.log(VEINTE_Y_DOS);*/
//da error porque las const no se pueden modificar los datos 

//console.log(), es una funcion que nos permite imprimir mensajes o valores en nuestra consola del navegador


/**
 * operadores
 * +
 * -
 * *
 * /
 * %
 */
/**
 * prompt
 * 
 *como sentencia y funcion me permite a mi que el usuario introduzca informacion
 todos los datos que recupera prompt los almacena como una cadena de caracteres.
 para poder en caso de usar numeros, convertirlos como tal escribimos parseInt (y dentro de los parentesis ponemos el prompt)
 */

let numeroUno = parseInt(prompt("por favor ingresa un numero"));
let numeroDos = parseInt(prompt("ingresa otro numero"));

let suma = numeroUno + numeroDos;

console.log("el resultado de la suma es "+ suma);

//let palabraUno = "cinco";
//let palabrados = "seis";

//let palabras = palabraUno + " " + palabrados;
//console.log(palabras);

