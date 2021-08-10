/**

* @jest-environment node

*/

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig'
import types from '../../types/types';

global.scrollTo = jest.fn();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING UID'
    },
    notes: {
        active: {
            id: '9cT1xCSy2b9xS8K72EBS',
            title: 'titulo de prueba',
            body: 'cuerpo de prueba'
        }
    }
};

let store = mockStore(initState);

const { auth: {uid} } = store.getState();

describe('Pruebas en las acciones de "notes".', () => {


    beforeEach(() => {
        store = mockStore(initState);
    });

    // Desactivamos la conexión a la base después de todas las pruebas para eliminar la instancia y evitar errores/advertencias.
    afterAll( () => {
        db.disableNetwork();
    });

    // Función que elimina cada entrada nueva que se hace en los tests (para evitar acumular basura en la base de datos de prueba).
    const eliminarEntry = async (id) => {
        await db.doc(`${uid}/journal/notes/${id}`).delete();
    }

    test('Debe de crear una nueva nota utilizando la acción de "startNewNote"', async () => {

        await store.dispatch( startNewNote() );

        // Obtenemos la lista de acciones realizadas por el mock store.
        const actions = store.getActions();

        // Primera acción realizada.
        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        // Segunda acción realizada.
        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        const { payload: {id} } = actions[1];

        await eliminarEntry(id);

    });

    test('Debe de comenzar a cargar todas las notas utilizando la acción de "startLoadingNotes".', async () => {

        await store.dispatch( startLoadingNotes(uid) );

        const actions = store.getActions();

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number)
        };

        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        expect(actions[0].payload[0]).toMatchObject(expected);

    });

    test('Debe de actualizarse una nota utilizando la acción de "startSaveNote".', async () => {

        const note = {
            id: '9cT1xCSy2b9xS8K72EBS',
            uid,
            title: 'Nuevo title de testing',
            body: 'Nuevo body de testing'
        };

        await store.dispatch( startSaveNote(note) );

        const actions = store.getActions();

        expect(actions[0].type).toBe(types.notesUpdated);

        const docRef = await db.doc(`${uid}/journal/notes/${note.id}`).get();
        expect(docRef.data().title).toBe(note.title);

    });


});