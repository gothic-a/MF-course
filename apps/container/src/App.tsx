import MarketingRemote from './remotes/Marketing'
import Header from './components'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Header signedIn={false} onSignOut={() => console.log('qwe')} />
				<MarketingRemote />
			</div>
		</BrowserRouter>
	)
}

export default App
