import { connect } from "react-redux";
import TopicList from "../../components/instructor/TopicList";

const mapStateToProps = state => ({
    topics: state.get("topics"),
});

export default connect(mapStateToProps, null)(TopicList);