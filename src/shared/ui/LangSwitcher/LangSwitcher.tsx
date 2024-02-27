import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ln } from 'shared/constants';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import Button from '../Button/Button';

interface ILangSwitcher {
    className?: string
}

export const LangSwitcher: FC<ILangSwitcher> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === ln.ru ? ln.en : ln.ru);
    };

    return (
        <div>
            <Button
                className={classNames('', {}, [className])}
                onClick={toggle}
            >
                {t('Language')}
            </Button>
        </div>
    );
};
