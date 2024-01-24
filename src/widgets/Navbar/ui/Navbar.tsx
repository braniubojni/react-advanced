import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import AppLink from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from "shared/ThemeSwitcher";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink className={cls.mainLink} to="/">Main</AppLink>
				<AppLink to="/about">About</AppLink>
			</div>
		</div>
	)
}