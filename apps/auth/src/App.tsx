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
}

const App = ({ history }: Props) => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route path="/auth/sign-in" component={SignIn} />
					<Route path="/auth/sign-up" component={SignUp} />
				</Switch>
			</Router>
		</StylesProvider>
	)
}

export default App
