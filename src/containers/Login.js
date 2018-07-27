import { connect } from "react-redux";
import Login from "../components/Login";
import { authenticate } from "../data/actions_API";
import { onFormElementChange, cancelRegistration } from "../data/actions";

const mapStateToProps = state => ({
   user: state.get('root').get('user'),
   isRegistering: state.get('root').get('isRegistering'),
   userRegistered: state.get('root').get('userRegistered')
});

const mapDispatchToProps = dispatch => ({
    authenticate: (e, username, password) => {
    	e.preventDefault();
    	dispatch(authenticate(username, password))
    },
    onFormElementChange: (id, val) => dispatch(onFormElementChange(id, val)),
    cancel: () => dispatch(cancelRegistration()),	
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);