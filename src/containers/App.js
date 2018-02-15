import { connect } from "react-redux";
import App from "../components/App";
import { authenticate } from "../data/actions_API";

const mapStateToProps = state => ({
	loggedIn: state.get('loggedIn'),
  isLoaded: state.get("isLoaded"),
  userRole: state.getIn(['user', 'roles']).reduce((role, r) => role += r === 'student' || r === 'instructor' ? r : '', ''),
});

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticate(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);