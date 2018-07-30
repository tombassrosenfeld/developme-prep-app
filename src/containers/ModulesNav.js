import { connect } from "react-redux";
import ModulesNav from "../components/ModulesNav";
import { hasNewFeedback } from "../utilities/utilities";

const mapStateToProps = state => ({
	navItems: state.get('navItems'),
	hasMarking: state.get('studentsToMark').size > 0,
	hasNewFeedback: hasNewFeedback(state.get('topics'), state.get('sharedCode')),
});

export default connect(mapStateToProps)(ModulesNav);