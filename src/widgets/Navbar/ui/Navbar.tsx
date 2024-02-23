import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import AppLink from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss';
import { useTranslation } from "react-i18next";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink className={cls.mainLink} to="/">{t("Main")}</AppLink>
				<AppLink to="/about">{t("About")}</AppLink>
			</div>
		</div>
	)
}