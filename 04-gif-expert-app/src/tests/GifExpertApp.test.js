import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp'


describe('Pruebas en el componente principal <GifExpertApp />', () => {

    test('El componente debe renderizarse correctamente.', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar una lista de categorías.', () => {

        const categories = ['The Beatles', 'Pink Floyd'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })



})
