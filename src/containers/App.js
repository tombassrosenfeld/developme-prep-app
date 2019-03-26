import { connect } from "react-redux";
import App from "../components/App";
import { authenticate, checkDataFreshness } from "../data/actions_API";
import { getUserRole } from "../utilities/utilities";

const mapStateToProps = state => ({
	loggedIn: state.get('root').get('loggedIn'),
	isLoaded: state.get('root').get("isLoaded"),
	cohortsLoaded: state.get('root').get("cohortsLoaded"),
	userRole: getUserRole(state.get('root').getIn(['user', 'roles'])),
	userId: state.get('root').get('user').get('id'),
});

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticate(username, password)),
  checkDataFreshness: () => dispatch(checkDataFreshness())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);