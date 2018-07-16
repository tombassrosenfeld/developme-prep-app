import { connect } from 'react-redux';
import ForgotForm from '../components/ForgotForm';
import { onForgotFormSubmit } from "../data/actions_API";


const mapStateToProps = state => ({
	forgotPassword: state.get('forgotPassword'),
	resetSuccess: state.get('resetSuccess'),
	forgotPasswordMessage: state.get('forgotPasswordMessage'),
});

const mapDispatchToProps = dispatch => ({
	onForgotFormSubmit: (data) => {
		dispatch(onForgotFormSubmit(data));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotForm);