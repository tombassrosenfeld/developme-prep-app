import { connect } from "react-redux";
import Login from "../components/Login";
import { authenticate } from "../data/actions_API";
import { onFormElementChange } from "../data/actions";

const mapStateToProps = state => ({
   user: state.get('user'),
   forgotPassword: state.get('forgotPassword'),
});

const mapDispatchToProps = dispatch => ({
    authenticate: (e, username, password) => {
    	e.preventDefault();
    	dispatch(authenticate(username, password))
    },
    onFormElementChange: (id, val) => dispatch(onFormElementChange(id, val)),	
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);