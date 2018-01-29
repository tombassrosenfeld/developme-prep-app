import { connect } from "react-redux";
import Assessment from "../components/Assessment";
import { onClickAssessmentAnswer } from "../data/actions_API";

const mapStateToProps = state => ({
    topics: state.get("topics"),
    userAssessmentData: state.get('assessmentData'),
});

const mapDispatchToProps = dispatch => ({
	onClickAssessmentAnswer: (topic, assessmentID, questionID, answerID) => dispatch(onClickAssessmentAnswer(topic, assessmentID, questionID, answerID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);