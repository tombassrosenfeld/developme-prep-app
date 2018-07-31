import { connect } from "react-redux";
import StudentMarkingForm from "../../components/instructor/StudentMarkingForm";
import { sharedCodeFeedbackSubmit } from "../../data/actions_API";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	onClickFeedbackSubmit: (student, comment, topicID, taskID) => dispatch(sharedCodeFeedbackSubmit(student, comment, topicID, taskID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentMarkingForm);