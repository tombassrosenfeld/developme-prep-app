import reducer from '../data/reducer';
import initial from '../data/initial';
import {LOGOUT} from '../data/actions';
import {UPDATE_CREDENTIALS} from '../data/actions_API';
import expect from 'expect';

describe('Basic reducer testing', () => {
  it('should return the initial state', () => {
  	expect(reducer(initial, {type: null})).toEqual(initial);
  });

  it('should log the user out', () => {
  	expect(reducer(initial, {type: LOGOUT})).toEqual(initial.set('loggedIn', false));
  });

  it('should log the user in and update their credentials', () => {
  	const action = {
  		type: UPDATE_CREDENTIALS,
  		data: {
	  		token: 1,
	  		user_display_name: 'test_user',
	  		user_email: 'test@test.com',
  		}
  	}
  	expect(reducer(initial, action))
  		.toEqual(initial.set('loggedIn', true)
  			.setIn(['user', 'user_email'], action.data.user_email)
  			.setIn(['user', 'token'], action.data.token)
  			.setIn(['user', 'user_display_name'], action.data.user_display_name)
			);
	})
});