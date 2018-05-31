import { connect } from "react-redux";
import ForgotPassword from "../components/ForgotPassword";
import { toggleForgot } from "../data/actions";

const mapStateToProps = state => ({
   forgotPassword: state.get('forgotPassword'),
});
const mapDispatchToProps = dispatch => ({
	toggleForgot: () => dispatch(toggleForgot()),
})


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);