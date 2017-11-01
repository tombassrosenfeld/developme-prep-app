import { connect } from "react-redux";
import App from "../components/App";
import { authenticate } from "../data/actions";

const mapStateToProps = state => ({
	loggedIn: state.get('loggedIn'),
    isLoaded: state.get("isLoaded"),
});

const mapDispatchToProps = dispatch => ({
    authenticate: (username, password) => dispatch(authenticate(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);