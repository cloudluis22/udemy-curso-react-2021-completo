import { fetchNoToken, fetchToken } from "../../helpers/fetch";

describe('Pruebas en el helper de "fetch".', () => {

    let token = '';

    test('"fetchNoToken" debe de iniciar sesión correctamente.', async () => {

        const response = await fetchNoToken('auth', { email: 'bennyuwo@hotmail.com', password: '123456' }, 'POST');

        // Revisa que la variable response sea una instancia de una respuesta propia de una petición.
        expect(response instanceof Response).toBe(true);

        const body = await response.json();

        token = body.token;

    });

    test('"fetchToken" debe de iniciar sesión correctamente.', async () => {

        localStorage.setItem('token', token);

        // La respuesta falla porque el ID del evento no es válido pero se comprueba que se recibe el token.
        const response = await fetchToken('events/321321test3243432event040343', {}, 'DELETE' );
        const body = await response.json();

        expect(body).toEqual({
            ok: false,
            msg: expect.any(String)
        });

    });

});
