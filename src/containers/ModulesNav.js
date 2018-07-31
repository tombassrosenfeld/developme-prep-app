import { connect } from "react-redux";
import ModulesNav from "../components/ModulesNav";
import { hasNewFeedback } from "../utilities/utilities";

const mapStateToProps = state => ({
	navItems: state.get('root').get('navItems'),
	hasMarking: state.get('root').get('studentsToMark').size > 0,
	hasNewFeedback: hasNewFeedback(state.get('root').get('topics'), state.get('root').get('sharedCode')),
});

export default connect(mapStateToProps)(ModulesNav);