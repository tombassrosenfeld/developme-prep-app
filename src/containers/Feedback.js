import { connect } from "react-redux";
import Feedback from "../components/Feedback";
import { markFeedbackRead } from "../data/actions_API";
import { hasNewFeedback } from "../utilities/utilities";

const mapStateToProps = state => ({
	sharedCode: state.get('root').get('sharedCode'),
	topics: state.get('root').get('topics'),
	hasNewFeedback: hasNewFeedback(state.get('root').get('topics'), state.get('root').get('sharedCode')),
});

const mapDispatchToProps = dispatch => ({
	onClickFeedback: (topicTitle, taskID) => dispatch(markFeedbackRead(topicTitle, taskID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);