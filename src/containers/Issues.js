import { connect } from 'react-redux';
import Issues from '../components/Issues';
import { updateIssueFalse } from "../data/actions";

const mapStateToProps = state => ({
	issue: state.get('root').get('issue')
})
const mapDispatchToProps = dispatch => ({
	changeIssueState: () => {
		dispatch(updateIssueFalse());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Issues);