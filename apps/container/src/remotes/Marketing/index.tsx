import { render } from 'marketing/Root'
import { useRef, useEffect } from 'react'

const MarketingRemote = () => {
	const ref = useRef(null)

	useEffect(() => {
		render(ref.current)
	}, [])

	return <div ref={ref} id="marketing-root"></div>
}

export default MarketingRemote
