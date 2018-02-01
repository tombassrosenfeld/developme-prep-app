import { connect } from "react-redux";
import AssessmentQuestion from "../components/AssessmentQuestion";

const mapStateToProps = state => ({
    topics: state.get("topics"),
    userAssessmentData: state.get('assessmentData'),
});

export default connect(mapStateToProps)(AssessmentQuestion);