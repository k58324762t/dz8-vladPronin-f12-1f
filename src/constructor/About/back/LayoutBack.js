import React from 'react'
import { Outlet } from 'react-router-dom'
import Back from './Back'

function LayoutBack() {
	return (
		<>
			<Back />
			<Outlet />
		</>
	)
}
export { LayoutBack }
