import { connect } from "react-redux";
import Login from "../components/Login";
import { authenticate } from "../data/actions";

const mapStateToProps = state => ({
   
});

const mapDispatchToProps = dispatch => ({
    authenticate: (username, password) => dispatch(authenticate(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);