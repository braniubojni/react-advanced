import { lazy } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import LazyLoad from './components/common/LazyLoad'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const AboutPage = lazy(() => import('./Pages/AboutPage/AboutPage'));
const MainPage = lazy(() => import('./Pages/MainPage/MainPage'));


const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames('app', { hovered: true, selected: false }, [theme, 'cls2', 'cls3'])}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to="/">Main</Link>
			<Link to="/about">About</Link>
			<LazyLoad>
				<Routes>
					<Route path='/about' element={
						<AboutPage />
					} />
					<Route path='/' element={<MainPage />} />
				</Routes>
			</LazyLoad>
			<Counter />
		</div>
	)
}

export default App