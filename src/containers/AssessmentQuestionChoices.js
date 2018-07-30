import { connect } from "react-redux";
import AssessmentQuestionChoices from "../components/AssessmentQuestionChoices";
import { onChangeAssessmentAnswer } from "../data/actions_API";

const mapStateToProps = state => ({
    userAssessmentData: state.get('root').get('assessmentData'),
});

const mapDispatchToProps = dispatch => ({
	onChangeAssessmentAnswer: (topic, assessmentID, questionID, answerID) => dispatch(onChangeAssessmentAnswer(topic, assessmentID, questionID, answerID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentQuestionChoices);