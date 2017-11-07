import { connect } from "react-redux";
import Errors from "../components/Errors";
import { updateErrors } from "../data/actions";

const mapStateToProps = state => ({
	errors: state.get('errors'),
});

const mapDispatchToProps = dispatch => ({
	dismissErrors: () => dispatch(updateErrors('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Errors);