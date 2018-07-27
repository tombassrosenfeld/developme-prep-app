import { connect } from "react-redux";
import AssessmentQuestion from "../components/AssessmentQuestion";

const mapStateToProps = state => ({
    topics: state.get('root').get("topics"),
    userAssessmentData: state.get('root').get('assessmentData'),
});

export default connect(mapStateToProps)(AssessmentQuestion);