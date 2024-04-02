import { lazy, Suspense, useState } from 'react'
import Loader from './components/Loader'

const MarketingRemote = lazy(() => import('./remotes/Marketing'))
const AuthRemote = lazy(() => import('./remotes/Auth'))

import Header from './components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { StylesProvider, createGenerateClassName } from '@material-ui/core'

const generateClassName = createGenerateClassName({
	productionPrefix: 'h_co',
})

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null)

	const handleSignIn = (value: boolean) => () => {
		console.log('in sign in')
		setIsSignedIn(value)
	}

	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header isSignedIn={isSignedIn} onSignOut={handleSignIn(false)} />
					<Suspense fallback={<Loader />}>
						<Switch>
							<Route path="/auth">
								<AuthRemote onSignIn={handleSignIn(true)} />
							</Route>
							<Route path="/">
								<MarketingRemote />
							</Route>
						</Switch>
					</Suspense>
				</div>
			</StylesProvider>
		</BrowserRouter>
	)
}

export default App
