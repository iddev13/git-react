import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { Input } from '../../common/form-controls/FormControls';


const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div><Field
				placeholder="Login"
				name="login"
				component={Input}
				validate={[required]}
			/></div>
			<div><Field
				placeholder="Password"
				name="password"
				component={Input}
				validate={[required]}
			/></div>
			<div><Field name="rememberMe" type="checkbox" component={Input} /></div>
			<div><button>Login</button></div>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm);

export default LoginReduxForm;