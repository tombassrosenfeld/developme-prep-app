import { connect } from "react-redux";
import TaskList from "../components/TaskList";
import { onClickUserProgress } from "../data/actions_API";

const mapStateToProps = state => ({
    modules: state.get("modules"),
    userProgress: state.get('userProgress'),
});

const mapDispatchToProps = dispatch => ({
	onClickUserProgress: (id) => dispatch(onClickUserProgress(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);