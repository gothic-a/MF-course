import ReactDOM from 'react-dom'
import App from './App'
import { createMemoryHistory, createBrowserHistory } from 'history'
import { OnNavigationCallbackProps } from './types/navigation'

type OnNavigateCallback = (props: OnNavigationCallbackProps) => void

interface RenderOptions {
	onNavigate?: OnNavigateCallback
	defaultHistory?: ReturnType<typeof createBrowserHistory> | ReturnType<typeof createMemoryHistory>
}

const render = (root: HTMLElement, options?: RenderOptions) => {
	const history = options?.defaultHistory ?? createMemoryHistory()

	if (options?.onNavigate) {
		const { onNavigate } = options

		history.listen(onNavigate)
	}

	ReactDOM.render(<App history={history} />, root)

	const onParentNavigate: OnNavigateCallback = ({ pathname: nextPathname }) => {
		const { pathname } = history.location

		if (nextPathname !== pathname) history.push(nextPathname)
	}

	return {
		onNavigate: onParentNavigate,
	}
}

if (process.env.NODE_ENV === 'development') {
	const root = document.getElementById('auth-standalone-root')

	if (root) render(root, { defaultHistory: createBrowserHistory() })
}

export { render }
