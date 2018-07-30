import { connect } from "react-redux";
import Feedback from "../components/Feedback";

const mapStateToProps = state => ({
	sharedCode: state.get('sharedCode'),
	topics: state.get('topics'),
});

export default connect(mapStateToProps)(Feedback);