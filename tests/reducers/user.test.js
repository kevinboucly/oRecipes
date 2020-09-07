import { should } from 'chai';

import userReducer, { initialState } from 'src/reducers/user';
import { changeValue, login } from 'src/actions/user';

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
    it('should return a modified state when receive CHANGE_VALUE', () => {
      const action = changeValue('email', 'keke@keke.com');
      const stateDeDepart = {};
      const stateDArrivee = {
        email: 'keke@keke.com',
      };
      userReducer(stateDeDepart, action).should.eql(stateDArrivee);

      const stateDeDepartFull = {
        email: 'bidule@machin.com',
        password: 'keke',
        logged: false,
      };
      const stateDArriveeFull = {
        email: 'keke@keke.com',
        password: 'keke',
        logged: false,
      };
      userReducer(stateDeDepartFull, action).should.eql(stateDArriveeFull);
    });

    it('LOGIN', () => {
      const action = login();
      const stateDeDepartFull = {
        email: 'bidule@machin.com',
        password: 'keke',
        logged: false,
      };
      const stateDArriveeFull = {
        email: 'bidule@machin.com',
        password: 'keke',
        logged: false,
        loading: true,
      };
      userReducer(stateDeDepartFull, action).should.eql(stateDArriveeFull);
    });
  });
});
