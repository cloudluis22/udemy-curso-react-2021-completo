import React from 'react';
import { shallow } from 'enzyme';
import { RealRef } from '../../../04-useRef/RealRef';

describe('Pruebas sobre el componente de <RealRef />.', () => {

    const wrapper = shallow(<RealRef />);

    test('Debe de mostrar el componente correctamente y crear una snapshot.', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar el componente de <MultipleCustomHooks /> una vez se presiona el botón.', () => {


    });

});
