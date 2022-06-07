import { Link } from 'react-router-dom'

function AboutPage() {
	return (
		<>
			<h1>about page</h1>
			<ul>
				<li>
					<Link to='/about/news1 ' state={{ name: 'news1' }}>
						news1
					</Link>
				</li>
				<li>
					<Link to='/about/news2' state={{ name: 'news2' }}>
						news2
					</Link>
				</li>
			</ul>
		</>
	)
}
export default AboutPage
