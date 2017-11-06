import { connect } from "react-redux";
import TaskList from "../components/TaskList";
import { updateUserProgress } from "../data/actions_API";

const mapStateToProps = state => ({
    modules: state.get("modules"),
    userProgress: state.get('userProgress'),
});

const mapDispatchToProps = dispatch => ({
	updateUserProgress: (id) => dispatch(updateUserProgress(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);