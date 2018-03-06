import { connect } from "react-redux";
import Header from "../components/Header";
import { logOut } from "../data/actions";

const mapStateToProps = state => ({
	loggedIn: state.get('loggedIn'),
	user: state.get('user'),
  userRole: state.getIn(['user', 'roles']).reduce((role, r) => role += r === 'student' || r === 'instructor' ? r : '', ''),
});

const mapDispatchToProps = dispatch => ({
	logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);