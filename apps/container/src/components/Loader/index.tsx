import { makeStyles, createStyles } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles((theme) => {
	return createStyles({
		bar: {
			width: '100%',
			'& > * + *': {
				marginTop: theme.spacing(2),
			},
		},
	})
})

const Loader = () => {
	const classes = useStyles()

	return (
		<div className={classes.bar}>
			<LinearProgress />
		</div>
	)
}

export default Loader
