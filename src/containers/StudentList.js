import { connect } from "react-redux";
import StudentList from "../components/StudentList";

const mapStateToProps = state => ({
    numAssessments: state.get('topics').reduce((total, topic) => { return total + topic.get('assessments').size;}, 0),
    numTasks: state.get('topics').reduce((total, topic) => { return total + topic.get('tasks').size;}, 0),
});

export default connect(mapStateToProps, null)(StudentList);
