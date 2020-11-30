import React from 'react';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
//import ReactShallowRenderer from 'react-test-renderer/shallow';  Es muy básica mejor usamos enzyme
import Header from '../../components/Header';
//Sobre componentes no se hace assertions. Sino snapshots. Adentro de la carpeta test/components generó
// el archivo __snapshots__ lo generó JEST.
test('should render Header correctly', () => {
    //Es para el shallow de react
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />); 
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());  //Corremos el test y se va a ver en la terminal con todo y children

    const wrapper = shallow(<Header />);
    //expect(wrapper.find('h1').length).toBe(1);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    //expect(wrapper).toMatchSnapshot();  //Genera archivo Header.test.js.snap
    //expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot
});

