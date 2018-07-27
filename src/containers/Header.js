import { connect } from "react-redux";
import Header from "../components/Header";
import { logOut, setRegistering, cancelRegistration } from "../data/actions";

const mapStateToProps = state => ({
	loggedIn: state.get('loggedIn'),
	user: state.get('user'),
	isRegistering: state.get('isRegistering'),
  	userRole: state.getIn(['user', 'roles']).reduce((role, r) => role += r === 'student' || r === 'instructor' ? r : '', ''),
});

const mapDispatchToProps = dispatch => ({
	logOut: () => dispatch(logOut()),
	setRegistering: () => dispatch(setRegistering()),
    cancel: () => dispatch(cancelRegistration()),	
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);