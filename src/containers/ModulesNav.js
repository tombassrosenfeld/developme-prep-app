import { connect } from "react-redux";
import ModulesNav from "../components/ModulesNav";

const mapStateToProps = state => ({
	navItems: state.get('navItems'),
});

export default connect(mapStateToProps)(ModulesNav);