import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

import Pricing from './components/Pricing'
import Landing from './components/Landing'

const generateClassName = createGenerateClassName({
	productionPrefix: 'R_mark',
})

const App = () => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/pricing" component={Pricing} />
					<Route path="/" component={Landing} />
				</Switch>
			</BrowserRouter>
		</StylesProvider>
	)
}

export default App
