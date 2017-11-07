import { connect } from "react-redux";
import Task from "../components/Task";

const mapStateToProps = state => ({
    modules: state.get("modules"),
    userProgress: state.get('userProgress'),
});

export default connect(mapStateToProps)(Task);