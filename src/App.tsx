import { lazy, useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import LazyLoad from './components/common/LazyLoad'
import './styles/index.scss'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'

const AboutPage = lazy(() => import('./Pages/AboutPage/AboutPage'));
const MainPage = lazy(() => import('./Pages/MainPage/MainPage'));


const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle</button>
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