import { buscarPersonaTardado } from "./promesas";

//importante! si vamos a usar el async la funcion que hace el llamado debe ser async
export const obtenerVariasPersonas = async (arr) => {
    const arreglo = [];

    for( const id of arr )
    {
        //este try evita que se pare la busqueda en caso de no encontrar a la persona
        try{
            const promesa = await buscarPersonaTardado(id);   //p almancenara una promesa
            //await pausa la ejecucion hasta que responda
            arreglo.push( promesa );
        }catch{

        }    
    }
    
    return arreglo;
}

//importante! si vamos a usar el async la funcion que hace el llamado debe ser async
export const obtenerVariasPersonasAlMismoTiempo = async (arr) => {
    const arreglo = [];

    for( const id of arr )
    {
        //insertar en el arreglo cada promise sin cumplir
        arreglo.push( buscarPersonaTardado(id) );    
    }
 
    //ejecutar todas las promises al mismo tiempo ignorando las que fallen (MULTIHILO)
    return await Promise.all(
        arreglo.map( p => p.catch(error => null) )
    );
}
