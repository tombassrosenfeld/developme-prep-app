import { connect } from "react-redux";
import App from "../components/App";
import { authenticate } from "../data/actions_API";
import { getUserRole } from "../utilities/utilities";

const mapStateToProps = state => ({
	loggedIn: state.get('root').get('loggedIn'),
	isLoaded: state.get('root').get("isLoaded"),
	loading: state.get('root').get('loading'),
	cohortsLoaded: state.get('root').get("cohortsLoaded"),
	userRole: getUserRole(state.get('root').getIn(['user', 'roles'])),
});

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticate(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);