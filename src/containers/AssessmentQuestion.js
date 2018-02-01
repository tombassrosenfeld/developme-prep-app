import { connect } from "react-redux";
import AssessmentQuestion from "../components/AssessmentQuestion";

const mapStateToProps = state => ({
    topics: state.get("topics"),
});

export default connect(mapStateToProps)(AssessmentQuestion);