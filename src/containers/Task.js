import { connect } from "react-redux";
import Task from "../components/Task";

const mapStateToProps = state => ({
    modules: state.get("modules"),
});

export default connect(mapStateToProps)(Task);