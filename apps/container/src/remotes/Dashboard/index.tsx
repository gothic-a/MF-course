import { render } from 'dashboard/Root'
import { useEffect, useRef } from 'react'

interface Props {
	onSignIn: () => void
}

const AuthRemote = () => {
	const ref = useRef(null)

	useEffect(() => {
		render(ref.current)
	}, [])

	return <div ref={ref} id="dashboard-root" />
}

export default AuthRemote
