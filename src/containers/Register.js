import { connect } from "react-redux";
import Register from "../components/Register";
import { registerUser } from "../data/actions_API";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(registerUser(data)),	
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);