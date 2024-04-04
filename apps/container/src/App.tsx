import { lazy, Suspense, useState } from 'react'
import Loader from './components/Loader'

const MarketingRemote = lazy(() => import('./remotes/Marketing'))
const AuthRemote = lazy(() => import('./remotes/Auth'))
const DashboardRemote = lazy(() => import('./remotes/Dashboard'))

import Header from './components/Header'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { StylesProvider, createGenerateClassName } from '@material-ui/core'

const generateClassName = createGenerateClassName({
	productionPrefix: 'h_co',
})

const history = createBrowserHistory()

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null)

	const handleSignIn = (value: boolean) => () => {
		if (value) history.push('/dashboard')
		setIsSignedIn(value)
	}

	return (
		<Router history={history}>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header isSignedIn={isSignedIn} onSignOut={handleSignIn(false)} />
					<Suspense fallback={<Loader />}>
						<Switch>
							<Route path="/auth">
								<AuthRemote onSignIn={handleSignIn(true)} />
							</Route>
							<Route path="/dashboard">
								{!isSignedIn && <Redirect to="/" />}
								<DashboardRemote />
							</Route>
							<Route path="/">
								<MarketingRemote />
							</Route>
						</Switch>
					</Suspense>
				</div>
			</StylesProvider>
		</Router>
	)
}

export default App
