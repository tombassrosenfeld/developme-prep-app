import { connect } from "react-redux";
import Header from "../components/Header";
import { logOut } from "../data/actions";

const mapStateToProps = state => ({
	loggedIn: state.get('loggedIn'),
	login: state.get('login'),
});

const mapDispatchToProps = dispatch => ({
	logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);