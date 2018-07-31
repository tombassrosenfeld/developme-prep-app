import { connect } from "react-redux";
import Errors from "../components/Messages";
import { updateErrors } from "../data/actions";

const mapStateToProps = state => ({
	error: state.get('root').get('errors'),
	message: state.get('root').get('errors'),
});

const mapDispatchToProps = dispatch => ({
	dismissMessage: () => dispatch(updateErrors('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Errors);