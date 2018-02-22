import { connect } from "react-redux";
import Welcome from "../components/Welcome";

const mapStateToProps = state => ({
    userProgress: state.get('userProgress').size,
    topics: state.get('topics'),
    numAssessments: state.get('topics').reduce((total, topic) => { return total + topic.get('assessments').size;}, 0),
    numTasks: state.get('topics').reduce((total, topic) => { return total + topic.get('tasks').size;}, 0),
    isLoaded: state.get("isLoaded"),
});

export default connect(mapStateToProps, null)(Welcome);
