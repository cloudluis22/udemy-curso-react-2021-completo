import React from 'react';;
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en el compontente de "GifGridItem"', () => {

    const title = 'Titulo'
    const url = 'https://urlejemplo.com.mx';
    const wrapper = shallow(<GifGridItem
        title={title}
        url={url}
    />);

    test('Debe mostrar el componente correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de contener un parrafo con el texto.', () => {
        expect(wrapper.text().trim()).toBe(title);
    })

    test('La imagen debe contener los datos correctos de el título y el URL del gif.', () => {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('El componente debe de tener un div con la clase "animate__fadeIn"', () => {

        const className = 'animate__fadeIn'

        const div = wrapper.find('div');
        expect(div.hasClass(className)).toBe(true);

    })


})
