import { connect } from "react-redux";
import TaskShareCode from "../components/TaskShareCode";
import { updateSharedCode } from "../data/actions";
import { onClickSharedCodeSubmit } from "../data/actions_API";

const mapStateToProps = state => ({
	sharedCode: state.get('sharedCode'),
});

const mapDispatchToProps = dispatch => ({
	onChangeSharedCode: (code, topicTitle, taskID) => dispatch(updateSharedCode(code, topicTitle, taskID)),
	onClickSharedCodeSubmit: () => dispatch(onClickSharedCodeSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskShareCode);