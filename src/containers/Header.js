import { connect } from "react-redux";
import Header from "../components/Header";
import { logOut } from "../data/actions";

const mapStateToProps = state => ({
	loggedIn: state.get('loggedIn'),
	user: state.get('user'),
});

const mapDispatchToProps = dispatch => ({
	logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);