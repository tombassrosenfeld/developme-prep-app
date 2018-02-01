import { connect } from "react-redux";
import AssessmentQuestion from "../components/AssessmentQuestion";
import { onChangeAssessmentAnswer } from "../data/actions_API";

const mapStateToProps = state => ({
    topics: state.get("topics"),
    userAssessmentData: state.get('assessmentData'),
});

const mapDispatchToProps = dispatch => ({
	onChangeAssessmentAnswer: (topic, assessmentID, questionID, answerID) => dispatch(onChangeAssessmentAnswer(topic, assessmentID, questionID, answerID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentQuestion);