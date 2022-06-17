const personas = {
    josue : {
        nombre: "Gerardo Portillo",
        edad: 39
    },
    allyson : {
        nombre: "Allyson Erazo",
        edad: 38
    }
}

export const buscarPersona = (id) => {
    const persona = personas[id];

    return new Promise( (resolve,reject) => {
        //callback a ejecutar cuando se halla cumplido la promeda
        //esto evita el CALLBACK HELL
        //resolve = cuando se hace correctamente
        //reject = cuando la promesa falla (ej:no se cuentra la persona)
        if( persona ){
            resolve(persona)
        }
        else{
            reject("no existe la persona");
        }
    } );
}

//promise RACE
export const promesaLenta = new Promise(
    (resolve, reject) => {
        setTimeout( () =>{
            console.warn("Promesa Lenta EJECUTADA");
            resolve("Promesa Lenta");
        },2000);
    }
);

export const promesaMedia = new Promise(
    (resolve, reject) => {
        setTimeout( () =>{
            console.warn("Promesa Media EJECUTADA");
            resolve("Promesa Media");
        },1500);
    }
);

export const promesaRapida = new Promise(
    (resolve, reject) => {
        setTimeout( () =>{
            console.warn("Promesa Media EJECUTADA");
            resolve("Promesa Rapida");
        },1000);
    }
);

//async lo que hace es que una funcion devuelva una Promise
export const buscarPersonaAsincrona = async (id) => {
    const persona = personas[id];

        if( persona ){
            return persona; //el return reemplaza al resolv
        }
        else{
            throw Error("no existe la persona"); //el throw reemplaza al reject
        }
}

export const buscarPersonaTardado = (id) => {
    const persona = personas[id];

    return new Promise( (resolve,reject) => {
        //callback a ejecutar cuando se halla cumplido la promeda
        //esto evita el CALLBACK HELL
        //resolve = cuando se hace correctamente
        //reject = cuando la promesa falla (ej:no se cuentra la persona)
        if( persona ){
             setTimeout( () => {
                resolve(persona)
            } , 3000 );
        }
        else{
            reject("no existe la persona");
        }
    } );
}