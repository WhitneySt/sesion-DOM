const URL_API = 'https://apisimpsons.fly.dev/api/personajes?limit=200';

export const getCharacters = async() => {
    try {
        const { data } = await axios.get(URL_API);
        console.log(data.docs);
        return data.docs
    } catch (error) {
        console.log(error);
        return [];
    }
}


export function estaEsUnaFuncion(a,b,c,d) {
    const resultado = a + b + c + d;
    if (resultado < 0) {
        return
    } else {
        console.log(resultado);
    }
}



