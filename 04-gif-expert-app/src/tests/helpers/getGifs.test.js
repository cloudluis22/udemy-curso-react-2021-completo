import getGifs from "../../helpers/getGifs"

describe('Pruebas con el helper de "getGifs".', () => {

    test('Debe de retornar un arreglo con 10 gifs específicamente.', async () => {

        const gifs = await getGifs('The Beatles');
        expect(gifs.length).toBe(10);

    })

    test('Debe de retornar un arreglo vacío al no colocar ningún argumento (No realizar ninguna busqueda).', async () => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    })

})
