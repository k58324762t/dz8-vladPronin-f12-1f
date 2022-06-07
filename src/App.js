import { Route, Routes } from 'react-router-dom'

import './App.css'
import { About } from './Page/About'
import { Blog } from './constructor/Blog'
import { Home } from './constructor/Home'
import { Layout } from './constructor/layout'
import AboutPage from './Page/AboutPage'
import { LayoutBack } from './constructor/About/back/LayoutBack'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index path='/' element={<Home />} />
					<Route path='about' element={<About />} />

					<Route path='blog' element={<Blog />} />
				</Route>

				<Route path='/' element={LayoutBack}>
					{' '}
					<Route path='about/:news' element={<AboutPage />} />{' '}
				</Route>
			</Routes>
		</>
	)
}

export default App
