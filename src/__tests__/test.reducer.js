import reducer from '../data/reducer';
import {fromJS, Map, List} from 'immutable';
import expect from 'expect';
import {LOGOUT, UPDATE_ERRORS} from '../data/actions';
import * as mockActions from '../mock_data/mock_actions';
import * as mockData from '../mock_data/mock_data';

const initial = mockData.initial;
const mockTopics = mockData.mockTopics;

describe('Basic testing', () => {
  it('should return the initial state', () => {
  	expect(reducer(initial, {type: null})).toEqual(initial);
  });

  it('should log the current user out', () => {
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

  it('should update current the users ID, roles and username', () => {
  	expect(reducer(initial, mockActions.userDataAction))
  		.toEqual(initial.setIn(['user', 'id'], mockActions.userDataAction.data[0].id)
				.setIn(['user', 'username'], mockActions.userDataAction.data[0].username) // update username with the value provided by api
				.setIn(['user', 'roles'], mockActions.userDataAction.data[0].roles)
			);
	})

  it('should updated the selected topic to index 1', () => {
    const initial = Map({topics: mockTopics})
    expect(reducer(initial, mockActions.updateSelectedTopic))
      .toEqual(initial.setIn(['topics', 1, 'selected'], true));
  })

  it('should display an error message', () => {
    expect(reducer(initial, {type: UPDATE_ERRORS, errorMessage: 'Test error message'}))
      .toEqual(initial.set('errors', 'Test error message'));
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

  it('Should update the users assessment data', () => {

    expect(reducer(initial, mockActions.updateUserAssessmentData))
      .toEqual(initial.set('assessmentData', mockActions.updateUserAssessmentData.data));
  })

});

describe('Instructor testing', () => {

  it('Should take students and create a cohort in the cohorts array', () => {

    const state = reducer(initial, mockActions.setStudents);

    //Test returns true if there is a cohort in the cohorts array
    expect(state.getIn(['cohorts', 0])).toBeTruthy();
  })

});