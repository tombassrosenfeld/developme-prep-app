import { connect } from "react-redux";
import Assessment from "../components/Assessment";
import { onChangeAssessmentAnswer } from "../data/actions_API";
import { onClickAssessmentSubmit } from "../data/actions_API";

const mapStateToProps = state => ({
    topics: state.get("topics"),
    userAssessmentData: state.get('assessmentData'),
});

const mapDispatchToProps = dispatch => ({
	onChangeAssessmentAnswer: (topic, assessmentID, questionID, answerID) => dispatch(onChangeAssessmentAnswer(topic, assessmentID, questionID, answerID)),
	onClickAssessmentSubmit: (topicTitle, assessmentID, assessment, userAnswers) => dispatch(onClickAssessmentSubmit(topicTitle, assessmentID, assessment, userAnswers)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);