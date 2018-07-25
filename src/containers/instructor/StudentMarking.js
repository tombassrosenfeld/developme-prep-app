import { connect } from "react-redux";
import StudentMarking from "../../components/instructor/StudentMarking";

const mapStateToProps = state => ({
	topics: state.get('topics'),
});

export default connect(mapStateToProps)(StudentMarking);