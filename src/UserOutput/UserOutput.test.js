// React base
import React from 'react';

// Enzyme configuration and shallow
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component
import UserOutput from './UserOutput';

configure({adapter: new Adapter()});

describe("<UserOutput />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UserOutput />);
    });

    it('<UserOutput/> should hold two <p> elements', () => {
        expect(wrapper.find('p')).toHaveLength(2)
    });
});