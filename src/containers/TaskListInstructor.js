import { connect } from "react-redux";
import TaskListInstructor from "../components/TaskListInstructor";
import { onClickUserProgress } from "../data/actions_API";

const mapStateToProps = state => ({
    topics: state.get("topics"),
    userProgress: state.get('userProgress'),
});

export default connect(mapStateToProps, null)(TaskListInstructor);