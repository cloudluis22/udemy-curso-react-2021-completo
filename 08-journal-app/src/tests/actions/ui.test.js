import {
    finishLoading,
    removeErrorAction,
    setErrorAction,
    startLoading
} from "../../actions/ui";
import types from "../../types/types";

describe('Pruebas en las acciones de UI.', () => {

    test('Deben de funcionar todas las acciones y retornar la acción esperada.', () => {

        const errorAction = setErrorAction('Error de prueba');
        expect(errorAction).toEqual({ type: types.uiSetError, payload: 'Error de prueba' });

        const removeAction = removeErrorAction();
        expect(removeAction).toEqual({ type: types.uiRemoveError });

        const startLoadingAction = startLoading();
        expect(startLoadingAction).toEqual({ type: types.uiStartLoading });


        const finishLoadingAction = finishLoading();
        expect(finishLoadingAction).toEqual({ type: types.uiFinishLoading });

    });

});