import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el componente de <GifGrid />.', () => {

    const category = 'Doom Eternal';
    const del = jest.fn();

    beforeEach(() => {
        del.mockClear();
    })

    test('Verificar que el componente se renderice correctamente.', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} delete={del}/>)
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar los items cuando se cargan los gifs utilizando useFetchGifs', () => {

        const gifs = [{
            id: 'ID Ejemplo',
            URL: 'https://exampleurl.com',
            title: 'Titulo Ejemplo'
        }]

        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} delete={del} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);

    });

});