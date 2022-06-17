import './styles.css';
import { buscarPersona as buscarPersonaCallBack } from './js/callbacks.js'
import { buscarPersona as buscarPersonaPromise } from './js/promesas.js'
import { promesaLenta, promesaMedia, promesaRapida, buscarPersonaTardado } from './js/promesas.js'
import { buscarPersonaAsincrona } from './js/promesas.js'
import { obtenerVariasPersonas, obtenerVariasPersonasAlMismoTiempo } from './js/await.js'

let  id1 = 'josue';
let id2 = 'allyson';

//mostrar mensaje solo si ambas personas se han encontrado
//situacion: necesito hacer algo cuando ambas cosas se han cumplido.

//tradicional: Callback hell
buscarPersonaCallBack( id1, (p) => {
    if(p)
    {
        buscarPersonaCallBack( id2, (p) => {
            if(p)
            {
                console.log("CALLBACK HELL: ambas personas encontradas");
            }
        } );
    }
} );

//con promesas: Promise hell
buscarPersonaPromise(id1).then(
    (persona) => {
        buscarPersonaPromise(id2).then(
            (persona) => {
                console.log("PROMISE HELL: ambas personas encontradas");
            }
        );
    }
);

const funcionrara = () => {
    console.log("funcion rara ok");
    return true;
}

//con promesas: evitando PROMISE HELL
Promise.all( [ "algo",1,2,funcionrara() ] ).then(
    (arr) => {
        //este codigo se va a ejecutar hasta que todo
        //lo enviado en el Promise.all se termine de ejecutar
        //y todo de resolve
        console.log(arr);
    }
);

Promise.all( [ buscarPersonaPromise(id1), buscarPersonaPromise(id2)  ] ).then(
    (arr) => {
        //este codigo se va a ejecutar unicamente si todo lo enviado hace resolve
        console.log("ambos hacen resolve",arr);
    }
).catch(
    (arr) => {
        //se dispara tan pronto alguna de las promises de error ignorando a las demas
        //aqui devolvera unicamente lo que hizo reject
        console.warn(arr);
    }
).finally(
    () => {
        console.log("se termino el Promise.all, hacemos clear al dialogo de espera. :v");
    }
);

//cada promesa por separado
/*promesaLenta.then( console.log );
promesaMedia.then( console.log );
promesaRapida.then( console.log );
*/

//usando promise.race.
//ejecuta todas las promesas al mismo tiempo;
//el then devuelve solo el reusltado para la primera en responder o sea
//la promesa mas rapida.
Promise.race( [promesaLenta, promesaMedia, promesaRapida] ).then(
    (a) => {
        console.log("PROMISE RACE",a);
    }
).catch(
    (a) => {
        console.warn(a);
    }
);

buscarPersonaAsincrona(id1).then(
    (x) =>{
        console.log("ASYNC",x);
    }
).catch( console.warn );

buscarPersonaAsincrona(id2).then(console.log).catch(console.warn);

//esta funcion es de tipo sync-await por lo que pausara la ejecucion del js
//una vez responda ejecutara el then y mostrara el resultado.
console.time("AWAIT UNO DESPUES DE OTRO");
const pps = obtenerVariasPersonas(["test","josue","allyson"]).then(
    (x) => {
        console.table(x);
        console.timeEnd("AWAIT UNO DESPUES DE OTRO");
    }
).catch(console.error);

//esta funcion es de tipo sync-await por lo que pausara la ejecucion del js
//una vez responda ejecutara el then y mostrara el resultado.
console.time("AWAIT TODOS AL MISMO TIEMPO");
const pps2 = obtenerVariasPersonasAlMismoTiempo(["test","josue","allyson"]).then(
    (x) => {
        console.table(x);
        console.timeEnd("AWAIT TODOS AL MISMO TIEMPO");
    }
).catch(console.error);


console.log('SFIRSIT');