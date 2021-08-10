import types from "../../types/types";

describe('Pruebas en el objeto de "types".', () => {

    const typesTest = {

        login: '[Auth] Login',
        logout: '[Auth] Logout',

        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',

        uiStartLoading: '[UI] Start Loading',
        uiFinishLoading: '[UI] Finish Loading',

        notesAddNew: '[Notes] New Note',
        notesActive: '[Notes] Set Active Note',
        notesLoad: '[Notes] Load Notes',
        notesUpdated: '[Notes] Updated Note',
        notesFileUrl: '[Notes] Updated Image URL',
        notesDelete: '[Notes] Delete Note',
        notesLogoutCleaning: '[Notes] Logout Cleaning'

    };

    test('El objeto de pruebas debe coincidir con el objeto real.', () => {
        expect(types).toEqual(typesTest);
    });

});
