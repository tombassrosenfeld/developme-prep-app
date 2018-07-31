import { connect } from "react-redux";
import StudentRecord from "../../components/instructor/StudentRecord";

const mapStateToProps = (state, {cohortID, studentID}) => ({
	student: state.get('root').get("cohorts").find(cohort => cohort.get('name') === cohortID).get('students').find(student => student.get('id') === +studentID),
	totalTasks: state.get('root').get('topics').reduce((total, topic) => { return total + topic.get('assessments').size;}, 0) + state.get('root').get('topics').reduce((total, topic) => { return total + topic.get('tasks').size;}, 0),
});

export default connect(mapStateToProps)(StudentRecord);