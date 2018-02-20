import { connect } from "react-redux";
import App from "../components/App";
import { authenticate } from "../data/actions_API";
import { getUserRole } from "../utilities/utilities";

const mapStateToProps = state => ({
	loggedIn: state.get('loggedIn'),
  isLoaded: state.get("isLoaded"),
  userRole: getUserRole(state.getIn(['user', 'roles'])),
});

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticate(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);