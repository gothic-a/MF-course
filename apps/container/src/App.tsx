import MarketingRemote from './remotes/Marketing'
import AuthRemote from './remotes/Auth'
import Header from './components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { StylesProvider, createGenerateClassName } from '@material-ui/core'

const generateClassName = createGenerateClassName({
	productionPrefix: 'H_con',
})

const App = () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header signedIn={false} onSignOut={() => console.log('qwe')} />
					<Switch>
						<Route path="/auth" component={AuthRemote} />
						<Route path="/" component={MarketingRemote} />
					</Switch>
					<MarketingRemote />
				</div>
			</StylesProvider>
		</BrowserRouter>
	)
}

export default App
