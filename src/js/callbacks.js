export const personas = {
    josue : {
        nombre: "Gerardo Portillo",
        edad: 39
    },
    allyson : {
        nombre: "Allyson Erazo",
        edad: 38
    }
}

export const buscarPersona = (id, callback) => {
    const p = personas[id];

    //devolver la persona encontrada a traves del callback
    callback(p);
}