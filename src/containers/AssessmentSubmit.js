import { connect } from "react-redux";
import AssessmentSubmit from "../components/AssessmentSubmit";
import { onClickAssessmentSubmit } from "../data/actions_API";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
	onClickAssessmentSubmit: (topicTitle, assessmentID, assessment, userAnswers) => dispatch(onClickAssessmentSubmit(topicTitle, assessmentID, assessment, userAnswers)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentSubmit);