import { connect } from "react-redux";
import TaskList from "../components/TaskList";

const mapStateToProps = state => ({
    modules: state.get("modules"),
    userProgress: state.get('userProgress'),
});

export default connect(mapStateToProps)(TaskList);