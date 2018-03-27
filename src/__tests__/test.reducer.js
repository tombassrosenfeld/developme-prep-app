import reducer from '../data/reducer';
import initial from '../data/initial';
import {LOGOUT} from '../data/actions';
import expect from 'expect';

describe('reducer', () => {
  it('should return the initial state', () => {
  	expect(reducer(initial, {type: null})).toEqual(initial);
  });

  it('should log the user out', () => {
  	expect(reducer(initial, {type: LOGOUT})).toEqual(initial.set('loggedIn', false));
  });

});


