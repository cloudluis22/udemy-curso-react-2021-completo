import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig'
import { fileUpload } from '../../helpers/fileUpload';
import types from '../../types/types';

global.scrollTo = jest.fn();

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn( () => {
        return 'https://hola-mundo.com/cosa.jpg';
    })
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING UID'
    },
    notes: {
        active: {
            id: '3aSOftRUt70476C4Tjed',
            title: 'titulo de prueba',
            body: 'cuerpo de prueba'
        }
    }
};

beforeEach(() => {
    store = mockStore(initState);
});

afterAll( () => {
    db.disableNetwork();
});

let store = mockStore(initState);

const { auth: {uid} } = store.getState();

describe('Continuación de pruebas realizadas en las acciones de "notes".', () => {

    test('Debe de actualizar el url de la imagen de una nota utilizando la acción de "startUploading".', async () => {

        const file = new File([], 'foto.jpg');
        await store.dispatch(startUploading(file));
        expect(fileUpload).toHaveBeenCalled();

    });

});