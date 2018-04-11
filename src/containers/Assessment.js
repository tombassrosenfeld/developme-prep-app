import { connect } from "react-redux";
import Assessment from "../components/Assessment";
import { onClickAssessmentSubmit } from "../data/actions_API";

const mapStateToProps = (state, {topicID}) => ({
    topic: state.get("topics").find(topic => topic.get('id') === +topicID),
    userAssessmentData: state.get('assessmentData'),
});

const mapDispatchToProps = dispatch => ({
	onClickAssessmentSubmit: (topicTitle, assessmentID, assessment, userAnswers) => dispatch(onClickAssessmentSubmit(topicTitle, assessmentID, assessment, userAnswers, false)),
	deleteAssessmentDataForTopic: (topicTitle, assessmentID, assessment, userAnswers, retake) => {
		dispatch(onClickAssessmentSubmit(topicTitle, assessmentID, assessment, userAnswers, retake));
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);