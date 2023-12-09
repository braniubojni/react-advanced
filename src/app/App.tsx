import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Link } from 'react-router-dom';
import { classNames } from "shared/lib/helpers/classNames/classNames";
import './styles/index.scss';



const App = () => {
	const { theme, toggleTheme } = useTheme();
	console.log(classNames('app', { hovered: true, selected: false }, [theme, 'cls2', 'cls3']), 'class');
	return (
		<div className={classNames('app', { hovered: true, selected: false }, [theme, 'cls2', 'cls3'])}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to="/">Main</Link>
			<Link to="/about">About</Link>
			<AppRouter />
		</div>
	)
}

export default App