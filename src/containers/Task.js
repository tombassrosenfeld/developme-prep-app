import { connect } from "react-redux";
import Task from "../components/Task";

const mapStateToProps = (state, {topicID}) => ({
    topic: state.get('root').get("topics").find(topic => topic.get('id') === +topicID),
    userProgress: state.get('root').get('userProgress'),
});

export default connect(mapStateToProps)(Task);