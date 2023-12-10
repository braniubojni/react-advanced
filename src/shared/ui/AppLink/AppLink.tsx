import { Link, LinkProps } from "react-router-dom"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import cls from './AppLink.module.scss'
import { FC } from "react"

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
	className?: string,
	theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
	const {
		className,
		children,
		to,
		theme = AppLinkTheme.PRIMARY,
		...restProps
	} = props;

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...restProps}>
			{children}
		</Link>
	)
}

export default AppLink