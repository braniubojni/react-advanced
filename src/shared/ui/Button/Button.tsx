import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    ...otherProps
}) => (
    <button
        type="button"
        className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
        {...otherProps}
    >
        {children}
    </button>
);

export default Button;
