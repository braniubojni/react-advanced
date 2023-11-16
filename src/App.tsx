import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import './index.scss'
import { Link } from 'react-router-dom'
import LazyLoad from './components/common/LazyLoad'
import { lazy } from 'react'

const AboutPage = lazy(() => import('./Pages/AboutPage/AboutPage'));
const MainPage = lazy(() => import('./Pages/MainPage/MainPage'));


const App = () => {
	return (
		<div className='app'>
			<Link to="/">Main</Link>
			<Link to="/about">About</Link>
			<Routes>
				<Route path='/about' element={
					<LazyLoad>
						<AboutPage />
					</LazyLoad>
				} />
				<Route path='/' element={
					<LazyLoad>
						<MainPage />
					</LazyLoad>} />
			</Routes>
			<Counter />
		</div>
	)
}

export default App