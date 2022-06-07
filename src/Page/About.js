import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
	const params = useParams()

	return (
		<>
			<h1> About page</h1>
			<h2>{params.news} </h2>
			<p>lorem</p>
		</>
	)
}
export { About }
