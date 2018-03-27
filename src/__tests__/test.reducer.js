import reducer from '../data/reducer';
import {fromJS} from 'immutable';
import initial from '../data/initial';
import expect from 'expect';
import {LOGOUT} from '../data/actions';
import * as mockActions from '../mock_data/mock_actions';

describe('Basic testing', () => {
  it('should return the initial state', () => {
  	expect(reducer(initial, {type: null})).toEqual(initial);
  });

  it('should log the user out', () => {
  	expect(reducer(initial, {type: LOGOUT})).toEqual(initial.set('loggedIn', false));
  });

  it('should log the user in and update their credentials', () => {
  	expect(reducer(initial, mockActions.updateCredentialsAction))
  		.toEqual(initial.set('loggedIn', true)
  			.setIn(['user', 'user_email'], mockActions.updateCredentialsAction.data.user_email)
  			.setIn(['user', 'token'], mockActions.updateCredentialsAction.data.token)
  			.setIn(['user', 'user_display_name'], mockActions.updateCredentialsAction.data.user_display_name)
			);
	})

  it('should update the users ID, roles and username', () => {
  	expect(reducer(initial, mockActions.userDataAction))
  		.toEqual(initial.setIn(['user', 'id'], mockActions.userDataAction.data[0].id)
				.setIn(['user', 'username'], mockActions.userDataAction.data[0].username) // update username with the value provided by api
				.setIn(['user', 'roles'], mockActions.userDataAction.data[0].roles)
			);
	})
});

describe('Student testing', () => {
  it('Set the topics in state for the student', () => {

  	mockActions.setTopicsAction.data = fromJS(mockActions.setTopicsAction.data);

  	expect(reducer(initial, mockActions.setTopicsAction))
  		.toEqual(initial.set('topics', mockActions.setTopicsAction.data).set('isLoaded', true));
	})

  it('Should update user progress when completing a task', () => {

  	expect(reducer(initial, mockActions.userProgressAction))
  		.toEqual(initial.set('userProgress', mockActions.userProgressAction.data));
	})

});

describe('Instructor testing', () => {
});