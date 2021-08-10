import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Redirect, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';


describe('Pruebas en el componente funcional de "<HeroScreen/>".', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }



    test('Debe de mostrar el componente redirect si no hay argumentos en el URL.', () => {

        const wrapper = mount(

            < MemoryRouter initialEntries={['/hero']} >
                <HeroScreen history={historyMock} />
            </MemoryRouter>

        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(Redirect).exists()).toBe(true);

    });

    test('Debe de mostrar un héroe si el parámetro existe y se encuentra.', () => {

        const wrapper = mount(

            < MemoryRouter initialEntries={['/hero/marvel-spider']} >
                <Route path="/hero/:heroId" component={ HeroScreen } />
            </MemoryRouter>

        );

        expect(wrapper.find('.row').exists()).toBe(true);

    });

    test('Debe de regresar a la pantalla principal al darle click al botón con el push si no hay pags. anteriores.', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(

            < MemoryRouter initialEntries={['/hero/marvel-spider']} >
                <Route path="/hero/:heroId" component={ () => <HeroScreen history={ history } />} />
            </MemoryRouter>

        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();

    });

    test('Debe de regresar a la pantalla anterior al darle click al botón de si sí hay pags. anteriores.', () => {

        const wrapper = mount(

            < MemoryRouter initialEntries={['/hero/marvel-spider']} >
                <Route path="/hero/:heroId" component={ () => <HeroScreen history={ historyMock } />} />
            </MemoryRouter>

        );

        wrapper.find('button').prop('onClick')();

        expect(historyMock.goBack).toHaveBeenCalled();
        expect(historyMock.push).not.toHaveBeenCalled();

    });

});