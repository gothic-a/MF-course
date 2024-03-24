import MarketingRemote from './remotes/Marketing'
import Header from './components'
import { BrowserRouter } from 'react-router-dom'

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
					<MarketingRemote />
				</div>
			</StylesProvider>
		</BrowserRouter>
	)
}

export default App
