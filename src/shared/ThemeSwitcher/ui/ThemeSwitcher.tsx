import { useTheme, Theme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcher {
	className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcher) => {
	const { toggleTheme, theme } = useTheme();
	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	)
}