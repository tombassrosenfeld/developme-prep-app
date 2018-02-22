import { connect } from "react-redux";
import TopicList from "../components/TopicList";

const mapStateToProps = state => ({
    topics: state.get("topics"),
});

export default connect(mapStateToProps, null)(TopicList);