import { connect } from "react-redux";
import Assessment from "../components/Assessment";
import { onClickAssessmentSubmit } from "../data/actions_API";
import { deleteAssessmentData, getArchivedAssessmentData } from "../data/actions";

const mapStateToProps = (state, {topicID}) => ({
    topic: state.get('root').get("topics").find(topic => topic.get('id') === +topicID),
    userAssessmentData: state.get('root').get('assessmentData'),
});

const mapDispatchToProps = dispatch => ({
	onClickAssessmentSubmit: (topicTitle, assessmentID, assessment, userAnswers) => dispatch(onClickAssessmentSubmit(topicTitle, assessmentID, assessment, userAnswers)),
	deleteAssessmentData: (topicTitle, assessmentID, assessment) => dispatch(deleteAssessmentData(topicTitle, assessmentID, assessment)),
	getArchivedAssessmentData: (topicTitle, assessmentID, assessment) => dispatch(getArchivedAssessmentData(topicTitle, assessmentID, assessment)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);