import { connect } from "react-redux";
import Messages from "../components/Messages";
import { updateMessage } from "../data/actions";

const mapStateToProps = state => ({
	error: false,
	message: state.get('root').get('message'),
});

const mapDispatchToProps = dispatch => ({
	dismissMessage: () => dispatch(updateMessage('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);