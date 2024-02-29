import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import './Loader.scss';

interface ILoader {
	className?: string
}

export const Loader: FC<ILoader> = ({ className }) => (
    <span className={classNames('loader', {}, [className])} />
);
