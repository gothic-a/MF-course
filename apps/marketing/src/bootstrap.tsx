import ReactDOM from 'react-dom'
import App from './App'

const render = (root: HTMLElement) => {
	ReactDOM.render(<App />, root)
}

if (process.env.NODE_ENV === 'development') {
	const root = document.getElementById('marketing-standalone-root')

	if (root) render(root)
}

export { render }
