import React from 'react'
import { useNavigate } from 'react-router-dom'

const Back = () => {
	const naviget = useNavigate()
	function back() {
		naviget(-1)
	}

	return <button onClick={back}></button>
}
export default Back
