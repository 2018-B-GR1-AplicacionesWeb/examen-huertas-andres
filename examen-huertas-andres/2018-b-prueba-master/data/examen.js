const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;

console.log('Busque los tipos de "gender" en el arreglo `people.json`');
// leemos el archivo Json
//gusradamos la base en un objeto

const bdd = rxjs.of(leerBDD1());
//const leerBDD$ =rxjs.from(leerBDD());


bdd.pipe(
    map(
        (valor)=>{
            console.log('valor', valor.gender);
            return{
                data: valor.gender
            }
        }
    )
).subscribe(
        (ok) =>{
            console.log('en ok', ok);
        },
        (error) =>{
            console.log(error)
        },
        () =>{
            console.log('Completado');
        }

);

console.log('Busque los tipos de "eye_color" en el arreglo `people.json`');
bdd.pipe(
    map(
        (valor)=>{
            console.log('valor', valor.eye_color);
            return{
                data: valor.eye_color
            }
        }
    )
).subscribe(
    (ok) =>{
        console.log('en ok', ok);
    },
    (error) =>{
        console.log(error)
    },
    () =>{
        console.log('Completado');
    }

);
onsole.log('Busque los tipos de "skin_color" en el arreglo `people.json`');
bdd.pipe(
    map(
        (valor)=>{
            console.log('valor', valor.skin_color);
            return{
                data: valor.skin_color
            }
        }
    )
).subscribe(
    (ok) =>{
        console.log('en ok', ok);
    },
    (error) =>{
        console.log(error)
    },
    () =>{
        console.log('Completado');
    }

);
onsole.log('Busque los tipos de "hair_color" en el arreglo `people.json`');
bdd.pipe(
    map(
        (valor)=>{
            console.log('valor', valor.hair_color);
            return{
                data: valor.hair_color
            }
        }
    )
).subscribe(
    (ok) =>{
        console.log('en ok', ok);
    },
    (error) =>{
        console.log(error)
    },
    () =>{
        console.log('Completado');
    }

);
function leerBDD1(){
            fs.readFile(
                './people.json',
                'utf-8',
                (error, contenidoLeido) => {
                    if (error) {
                        return(error)
                    } else {
                        console.log(contenidoLeido)
                        return(contenidoLeido)
                    }

                }
            );
}
//