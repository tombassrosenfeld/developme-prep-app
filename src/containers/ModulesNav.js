import { connect } from "react-redux";
import ModulesNav from "../components/ModulesNav";

const mapStateToProps = state => ({
	navItems: state.get('navItems'),
	hasMarking: state.get('studentsToMark').size > 0,
});

export default connect(mapStateToProps)(ModulesNav);