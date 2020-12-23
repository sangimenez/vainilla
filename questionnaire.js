let cuestionario = [{
    correo: 'xavi@hotmail.com',
    fecha: '2020-12-23',
    preguntas: [{
        titulo: 'Pregunta 1',
        respuesta: true,
        puntuacion: 2,
        estado: 'OK',
    }, ],
}, ];

console.log(cuestionario[0].correo);
console.log(cuestionario[0].preguntas[0].titulo);
let strCuestionario = JSON.stringify(cuestionario);
let objCuerstionario = JSON.parse(strCuestionario);

let persona = {
    correo: 'stalin@hotmail.com',
    fecha: '2020-12-23',
    preguntas: [{
        titulo: 'Pregunta 2',
        respuesta: true,
        puntuacion: 2,
        estado: 'OK',
    }, ],
};

objCuerstionario.push(persona);
let str2Cuestionario = JSON.stringify(objCuerstionario);
let obj2Cuerstionario = JSON.parse(str2Cuestionario);

console.log(obj2Cuerstionario[1].correo);


///////////////////////////////////////////////////////
let fruteria = {
    frutas: [{
            nombre: 'naranja',
            cantidad: 10,
        },
        {
            nombre: 'platanos',
            cantidad: 25,
        },
        {
            nombre: 'peras',
            cantidad: 5,
        },
    ],
    verduras: [{
            nombre: 'alcachofa',
            cantidad: 10,
            propiedades: ['vitamina B', 'agua'],
        },
        {
            nombre: 'tomates',
            cantidad: 25,
            precioUnidad: 0.25,
        },
    ],
};

console.log('nombre 2a fruta = ' + fruteria.frutas[1].nombre);
fruteria.frutas[1].precioUnidad = 1;
console.log('precio de la 2a fruta = ' + fruteria.frutas[1].precioUnidad);

let strFruteria = JSON.stringify(fruteria);
console.log('String del JSON completo = ' + strFruteria);

Cookies.set('fruteria', strFruteria, { expires: 1 });

let strFruteria2 = Cookies.get('fruteria');
let newFruteria = JSON.parse(strFruteria2);
console.log(
    'Tras escribir en la cookie, nombre de la 1a verdura = ' +
    newFruteria.verduras[0].nombre
);