import { connect } from 'react-redux';
import IssuesForm from '../components/IssuesForm';
import { onIssueFormSubmit } from "../data/actions_API";


const mapStateToProps = state => ({
	issue: state.get('issue')
});

const mapDispatchToProps = dispatch => ({
	submitIssue: (data) => {
		dispatch(onIssueFormSubmit(data));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(IssuesForm);