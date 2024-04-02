import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { History } from 'history'

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const generateClassName = createGenerateClassName({
	productionPrefix: 'r_au',
})

interface Props {
	history: History
	onSignIn?: () => void
}

const App = ({ history, onSignIn }: Props) => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route path="/auth/sign-in">
						<SignIn onSignIn={onSignIn} />
					</Route>
					<Route path="/auth/sign-up">
						<SignUp onSignUp={onSignIn} />
					</Route>
				</Switch>
			</Router>
		</StylesProvider>
	)
}

export default App
