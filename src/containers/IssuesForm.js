import { connect } from 'react-redux';
import IssuesForm from '../components/IssuesForm';
import { onIssueFormSubmit } from "../data/actions_API";


const mapDispatchToProps = dispatch => ({
	submitIssue: (data) => {
		console.log(data);
		dispatch(onIssueFormSubmit(data));
	}
});

export default connect(null, mapDispatchToProps)(IssuesForm);