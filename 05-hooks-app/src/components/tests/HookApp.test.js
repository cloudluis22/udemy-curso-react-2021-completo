import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../../HookApp';

describe('Pruebas en el componente más básico de <HookApp />.', () => {

    test('Debe coincidir con el snapshot.', () => {

        const wrapper = shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();

    });

});
