import { connect } from "react-redux";
import Topic from "../components/Topic";

const mapStateToProps = (state, {id}) => ({
    topic: state.get('root').get("topics").find(topic => topic.get('id') === +id),
});

export default connect(mapStateToProps)(Topic);