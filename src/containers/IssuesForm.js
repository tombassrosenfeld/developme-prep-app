import { connect } from 'react-redux';
import IssuesForm from '../components/IssuesForm';
import { onFormElementChange } from '../data/actions';


const mapDispatchToProps = dispatch => ({
	onFormElementChange: (id, val) => dispatch(onFormElementChange(id, val)),
});

export default connect(null, mapDispatchToProps)(IssuesForm);