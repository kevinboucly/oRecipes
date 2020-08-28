/**
 * Import
 */
import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai';


// Components
import App from 'src/components/App';
import Nav from 'src/containers/Nav';


// préparation de should
should();

describe.only ('Série de tests : App', () => {
  const comp = shallow(<App title="hello" />);
  it('should have prop className', () => {
    comp.props().should.have.property('className');
  });

  it('should have a Nav tag/component', () => {
    comp.find(Nav).should.have.lengthOf(1);
  });

  // un test suspendu avec skip
  it('should not have prop id', () => {
    comp.props().should.not.have.property('id');
  });
});
