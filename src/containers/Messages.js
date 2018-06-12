import { connect } from "react-redux";
import Messages from "../components/Messages";
import { updateMessage } from "../data/actions";

const mapStateToProps = state => ({
	message: state.get('message'),
});

const mapDispatchToProps = dispatch => ({
	dismissMessage: () => dispatch(updateMessage('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);