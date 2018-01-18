import { connect } from "react-redux";
import Topic from "../components/Topic";

const mapStateToProps = state => ({
    topics: state.get("topics"),
});

export default connect(mapStateToProps)(Topic);