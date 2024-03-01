import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface IPageError {
	className?: string
}

export const PageError: FC<IPageError> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Something went wrong. Please try again later')}</p>
            <Button onClick={reloadPage}>{t('Refresh the page')}</Button>
        </div>
    );
};
