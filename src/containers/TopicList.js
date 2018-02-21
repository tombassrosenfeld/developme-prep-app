import { connect } from "react-redux";
import TopicList from "../components/TopicList";
import { onClickUserProgress } from "../data/actions_API";

const mapStateToProps = state => ({
    topics: state.get("topics"),
});

export default connect(mapStateToProps, null)(TopicList);