import { connect } from "react-redux";
import Assessment from "../components/Assessment";
import { onClickAssessmentAnswer } from "../data/actions_API";

const mapStateToProps = state => ({
    topics: state.get("topics"),
    // userProgress: state.get('userProgress'),
    userAssessmentData: state.get('userAssessmentData'),
});

const mapDispatchToProps = dispatch => ({
	onClickAssessmentAnswer: (assessmentKey, questionID, answerID) => dispatch(onClickAssessmentAnswer(assessmentKey, questionID, answerID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);