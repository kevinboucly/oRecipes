import { should } from 'chai';

import userReducer, { initialState } from 'src/reducers/user';

should();

describe.only('Reducer for user', () => {
  describe('structure', () => {
    it('should be a function', () => {
      userReducer.should.be.a('function');
    });
    it('should return the initial state when called without arguments', () => {
      userReducer().should.be.eql(initialState);
    });
  });

  describe('with actions', () => {

  });
});
