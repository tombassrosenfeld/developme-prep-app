import { connect } from "react-redux";
import Login from "../components/Login";
import { authenticate } from "../data/actions_API";
import { onFormElementChange } from "../data/actions";

const mapStateToProps = state => ({
   login: state.get('login'),
});

const mapDispatchToProps = dispatch => ({
    authenticate: (username, password) => dispatch(authenticate(username, password)),
    onFormElementChange: (id, val) => dispatch(onFormElementChange(id, val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);