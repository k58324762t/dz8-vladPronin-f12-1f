import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import { About } from '../Page/About'
import { Blog } from './Blog'
import { Home } from './Home'

function Layout() {
	return (
		<>
			<header>
				<NavLink to='/' element={<Home />} />
				<NavLink to='/about' element={<About />} />
				<NavLink to='/blog' element={<Blog />} />
			</header>

			<Outlet />
		</>
	)
}
export { Layout }
