import cloudinary from 'cloudinary';

import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dne8hzs6i',
    api_key: '324623165261843',
    api_secret: 'V6u2rl01R3ADU1ORYnTON0Wux6Q'
  });


describe('Pruebas en el helper de "fileUpload".', () => {

    test('Debe de subir una imagen a Cloudinary y retornar el url de esta.', async () => {

        const resp = await fetch('https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/d6/43/dc/d643dc81-8da3-f5ad-5413-db844063380e/source/256x256bb.jpg');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // Separando los valores del URL en un arreglo utilizando el slash.
        const segments = url.split('/');

        // Obtenemos el ID cortando el formato de imagen para solo tener el ID.
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        await cloudinary.v2.api.delete_resources(imageId);

    });

    test('Debe de retornar un error al entregar un archivo de imagen NO valido', async () => {

        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);

        expect(url).toBe(null);

    });

});
