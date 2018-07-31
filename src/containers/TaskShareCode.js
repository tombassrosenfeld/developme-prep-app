import { connect } from "react-redux";
import TaskShareCode from "../components/TaskShareCode";
import { updateSharedCode } from "../data/actions";
import { onClickSharedCodeSubmit } from "../data/actions_API";
import { onClickSharedCodeSave } from "../data/actions_API";

const mapStateToProps = state => ({
	sharedCode: state.get('root').get('sharedCode'),
});

const mapDispatchToProps = dispatch => ({
	onChangeSharedCode: (code, topicTitle, taskID) => dispatch(updateSharedCode(code, topicTitle, taskID)),
	onClickSharedCodeSubmit: (topicTitle, taskID) => dispatch(onClickSharedCodeSubmit(topicTitle, taskID)),
	onClickSharedCodeSave: (topicTitle, taskID) => dispatch(onClickSharedCodeSave(topicTitle, taskID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskShareCode);