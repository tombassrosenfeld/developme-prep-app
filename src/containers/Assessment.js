import { connect } from "react-redux";
import Assessment from "../components/Assessment";

const mapStateToProps = state => ({
    topics: state.get("topics"),
    userProgress: state.get('userProgress'),
});

export default connect(mapStateToProps)(Assessment);