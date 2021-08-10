import { uiCloseModal, uiOpenModal } from '../../actions/ui';
import { uiReducer } from '../../reducers/uiReducer';

const initialState = {
    modalOpen: false
};

describe('pruebas en el "uiReducer".', () => {

    test('Debe de retornar por defecto el estado inicial.', () => {

        const state = uiReducer( initialState, {} );
        expect(state).toEqual(initialState);

    });

    test('Debe de abrir y cerrar la ventana modal.', () => {

        const modalOpen = uiOpenModal();
        const state = uiReducer(initialState, modalOpen);

        expect(state).toEqual( { modalOpen: true } );

        const modalClose = uiCloseModal();
        const state2 = uiReducer(state, modalClose);

        expect(state2).toEqual( { modalOpen: false } );
    });

});