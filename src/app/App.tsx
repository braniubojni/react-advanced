import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import './styles/index.scss';
import { Sidebar } from "widgets/Sidebar";



const App = () => {
	const { theme } = useTheme();
	return (
		<div className={classNames('app', { hovered: true, selected: false }, [theme])}>
			<Navbar />
			<div className="content-page">
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App