import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { History } from 'history'

import Pricing from './components/Pricing'
import Landing from './components/Landing'

const generateClassName = createGenerateClassName({
	productionPrefix: 'r_ma',
})

interface Props {
	history: History
}

const App = ({ history }: Props) => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route exact path="/pricing" component={Pricing} />
					<Route exact path="/" component={Landing} />
				</Switch>
			</Router>
		</StylesProvider>
	)
}

export default App
