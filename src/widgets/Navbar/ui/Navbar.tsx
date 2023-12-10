import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import AppLink from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss';

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