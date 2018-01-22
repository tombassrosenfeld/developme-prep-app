import { connect } from "react-redux";
import TopicStatus from "../components/TopicStatus";

const mapStateToProps = state => ({
    userProgress: state.get('userProgress'),
});

export default connect(mapStateToProps)(TopicStatus);