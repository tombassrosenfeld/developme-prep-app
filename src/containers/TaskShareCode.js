import { connect } from "react-redux";
import TaskShareCode from "../components/TaskShareCode";
import { updateSharedCode } from "../data/actions";

const mapStateToProps = state => ({
	sharedCode: state.get('sharedCode'),
});

const mapDispatchToProps = dispatch => ({
	onChangeSharedCode: (code, topicTitle, taskID) => dispatch(updateSharedCode(code, topicTitle, taskID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskShareCode);