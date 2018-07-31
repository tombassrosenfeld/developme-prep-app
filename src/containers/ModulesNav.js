import { connect } from "react-redux";
import ModulesNav from "../components/ModulesNav";
import { hasNewFeedback } from "../utilities/utilities";
import { setActiveModule } from '../data/actions';

const mapStateToProps = state => ({
	navItems: state.get('root').get('navItems'),
	hasMarking: state.get('root').get('studentsToMark').size > 0,
	hasNewFeedback: hasNewFeedback(state.get('root').get('topics'), state.get('root').get('sharedCode')),
	activeModule: state.get('root').get('activeModule')
});

const mapDispatchToProps = dispatch => ({
	setActiveModule: (i) => {
		dispatch(setActiveModule(i));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ModulesNav);