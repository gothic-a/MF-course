import { render } from 'marketing/Root'
import { useRef, useEffect } from 'react'

const MarketingRemote = () => {
	const ref = useRef(null)

	useEffect(() => {
		render(ref.current)
		console.log('render')
	}, [])

	return <div ref={ref} id="marketing-root" />
}

export default MarketingRemote
