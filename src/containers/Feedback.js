import { connect } from "react-redux";
import Feedback from "../components/Feedback";
import { markFeedbackRead } from "../data/actions_API";

const mapStateToProps = state => ({
	sharedCode: state.get('sharedCode'),
	topics: state.get('topics'),
});

const mapDispatchToProps = dispatch => ({
	onClickFeedback: (topicTitle, taskID) => dispatch(markFeedbackRead(topicTitle, taskID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);