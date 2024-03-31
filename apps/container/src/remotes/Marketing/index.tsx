import { render } from 'marketing/Root'
import { useRef, useEffect } from 'react'
import { OnNavigationCallbackProps } from '../../types/remotes'
import { useHistory } from 'react-router-dom'

const MarketingRemote = () => {
	const ref = useRef(null)

	const history = useHistory()

	useEffect(() => {
		const { onNavigate } = render(ref.current, {
			onNavigate: ({ pathname: nextPathname }: OnNavigationCallbackProps) => {
				const { pathname } = history.location

				if (nextPathname !== pathname) history.push(nextPathname)
			},
		})

		history.listen(onNavigate)
	}, [])

	return <div ref={ref} id="marketing-root" />
}

export default MarketingRemote
