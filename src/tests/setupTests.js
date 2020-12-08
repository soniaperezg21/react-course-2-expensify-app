//require('dotenv').config({ path: '.env.test' });
import DotEnv from 'dotenv';
DotEnv.config({ path: '.env.test' });


//import enzyme from 'enzyme';
import * as enzyme from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
enzyme.configure({ adapter: new Adapter() });

