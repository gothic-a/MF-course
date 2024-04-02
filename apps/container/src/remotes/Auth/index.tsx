import { render } from 'auth/Root'
import { useRef, useEffect } from 'react'
import { OnNavigationCallbackProps } from '../../types/remotes'
import { useHistory } from 'react-router-dom'

interface Props {
	onSignIn: () => void
}

const AuthRemote = ({ onSignIn }: Props) => {
	const ref = useRef(null)

	const history = useHistory()

	useEffect(() => {
		const options = {
			initialPathname: history.location.pathname,
			onNavigate: ({ pathname: nextPathname }: OnNavigationCallbackProps) => {
				const { pathname } = history.location

				if (nextPathname !== pathname) history.push(nextPathname)
			},
			onSignIn,
		}

		const { onNavigate } = render(ref.current, options)

		history.listen(onNavigate)
	}, [])

	return <div ref={ref} id="auth-root" />
}

export default AuthRemote
