import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface INotFoundPage {
	className?: string
}

export const NotFoundPage: FC<INotFoundPage> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page was not found')}
        </div>
    );
};
