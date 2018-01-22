import { connect } from "react-redux";
import TopicStatus from "../components/TopicStatus";

const mapStateToProps = state => ({
    topics: state.get("topics"),
});

export default connect(mapStateToProps)(TopicStatus);