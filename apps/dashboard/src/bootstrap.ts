import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

const render = (root: HTMLElement) => {
	const app = createApp(Dashboard)

	app.mount(root)
}

if (process.env.NODE_ENV === 'development') {
	const root = document.getElementById('dashboard-standalone-root')

	if (root) render(root)
}

export { render }
