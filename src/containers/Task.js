import { connect } from "react-redux";
import Task from "../components/Task";

const mapStateToProps = state => ({
    topics: state.get("topics"),
    userProgress: state.get('userProgress'),
});

export default connect(mapStateToProps)(Task);