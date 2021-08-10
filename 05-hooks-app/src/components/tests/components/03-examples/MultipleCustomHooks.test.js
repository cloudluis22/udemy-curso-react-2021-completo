import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../03-examples/MultipleCustomHooks';
import { useFetch } from '../../../../hooks/useFetch';
jest.mock('../../../../hooks/useFetch');

describe('Pruebas sobre el componente de <MultipleCustomHooks />.', () => {

    test('Debe de mostrarse correctamente y crear la snapshot.', () => {

        // A través del mock simulamos que el useFetch retorna esto.
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect(wrapper).toMatchSnapshot();

    });

    test('should ', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Walter White',
                quote: 'I am not in danger Skyler, I am the danger.'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('I am not in danger Skyler, I am the danger.');
        expect(wrapper.find('footer').text().trim()).toBe('Walter White');

    });

});