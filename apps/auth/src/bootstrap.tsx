import ReactDOM from 'react-dom'
import App from './App'
import { createMemoryHistory, createBrowserHistory } from 'history'
import { OnNavigationCallbackProps } from './types/navigation'

type OnNavigateCallback = (props: OnNavigationCallbackProps) => void

interface RenderOptions {
	onNavigate?: OnNavigateCallback
	initialPathname?: string
	defaultHistory?: ReturnType<typeof createBrowserHistory> | ReturnType<typeof createMemoryHistory>
	onSignIn?: () => void
}

const render = (root: HTMLElement, options: RenderOptions) => {
	const { defaultHistory, initialPathname, onSignIn } = options

	const history =
		defaultHistory ??
		createMemoryHistory({
			initialEntries: [initialPathname],
		})

	if (options?.onNavigate) {
		const { onNavigate } = options

		history.listen(onNavigate)
	}

	ReactDOM.render(<App history={history} onSignIn={onSignIn} />, root)

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
