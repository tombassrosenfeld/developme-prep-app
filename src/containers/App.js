import { connect } from "react-redux";
import App from "../components/App";
import { getModules } from "../data/actions";
import { authenticate } from "../data/actions";

const mapStateToProps = state => ({
	loggedIn: state.get('loggedIn'),
    isLoaded: state.get("isLoaded"),
});

const mapDispatchToProps = dispatch => ({
    getModules: () => getModules(),
    authenticate: (username, password) => dispatch(authenticate(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);