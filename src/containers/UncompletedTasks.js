import { connect } from "react-redux";
import UncompletedTasks from "../components/UncompletedTasks";

const mapStateToProps = (state, {id}) => ({
    topic: state.get("topics").find(topic => topic.get('id') === +id),
});

export default connect(mapStateToProps)(UncompletedTasks);