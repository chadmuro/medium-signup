import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import heroVideo from '../assets/HeroVideo.mp4';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		height: '80vh',
		position: 'relative',
		'& video': {
			objectFit: 'cover',
		},
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	title: {
		paddingBottom: theme.spacing(4),
	},
}));

const Hero = () => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<ReactPlayer
				url={heroVideo}
				playing
				loop
				muted
				width="100%"
				height="100%"
			/>
			<div className={classes.overlay}>
				<Box
					height="100%"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					color="#fff"
				>
					<Typography variant="h3" component="h1" className={classes.title}>
						Title Goes Here
					</Typography>
					<Button color="primary" variant="contained">
						Click Me
					</Button>
				</Box>
			</div>
		</section>
	);
};

export default Hero;
