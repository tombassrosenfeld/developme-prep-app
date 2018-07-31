import { connect } from "react-redux";
import Welcome from "../components/Welcome";

const mapStateToProps = state => ({
    userProgress: state.get('root').get('userProgress'),
    topics: state.get('root').get('topics'),
    numAssessments: state.get('root').get('topics').reduce((total, topic) => { return total + topic.get('assessments').size;}, 0),
    numTasks: state.get('root').get('topics').reduce((total, topic) => { return total + topic.get('tasks').size;}, 0),
    isLoaded: state.get('root').get("isLoaded"),
});

export default connect(mapStateToProps, null)(Welcome);
