import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../contexts/Auth';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),
		paddingTop: theme.spacing(4),

		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '300px',
		},
		'& .MuiButtonBase-root': {
			margin: theme.spacing(2),
		},
	},
	link: {
		cursor: 'pointer',
	},
}));

const Form = ({ handleClose }) => {
	const classes = useStyles();
	const { handleSubmit, control } = useForm();
	const { user, signUp, signIn } = useAuth();
	const [loginSignup, setLoginSignup] = useState('login');
	const [authError, setAuthError] = useState(null);

	useEffect(() => {
		if (user) {
			handleClose();
		}
	}, [user, handleClose]);

	const onSubmit = async data => {
		if (loginSignup === 'signup') {
			const { error } = await signUp({
				email: data.email,
				password: data.password,
			});
			if (error) {
				setAuthError(error.message);
			}
		}
		if (loginSignup === 'login') {
			const { error } = await signIn({
				email: data.email,
				password: data.password,
			});
			if (error) {
				setAuthError(error.message);
			}
		}
	};

	const onChange = () => {
		setAuthError(null);
		loginSignup === 'signup'
			? setLoginSignup('login')
			: setLoginSignup('signup');
	};

	return (
		<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="email"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Email"
						variant="outlined"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="email"
					/>
				)}
				rules={{ required: 'Email required' }}
			/>
			<Controller
				name="password"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Password"
						variant="outlined"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="password"
					/>
				)}
				rules={{
					required: 'Password required',
					minLength: {
						value: 6,
						message: 'Password should be as least 6 characters',
					},
				}}
			/>
			<Box py={1}>
				<Typography>
					{loginSignup === 'signup' ? (
						<>
							Already have an account?{' '}
							<Link onClick={onChange} className={classes.link}>
								Login
							</Link>
						</>
					) : (
						<>
							Don't have an account yet?{' '}
							<Link onClick={onChange} className={classes.link}>
								Sign up
							</Link>
						</>
					)}
				</Typography>
			</Box>
			{authError && <Typography color="error">{authError}</Typography>}
			<div>
				<Button variant="outlined" onClick={handleClose}>
					Cancel
				</Button>
				<Button type="submit" variant="contained" color="primary">
					{loginSignup === 'signup' ? 'Sign up' : 'Login'}
				</Button>
			</div>
		</form>
	);
};

export default Form;
