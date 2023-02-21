import { type TFunction } from 'i18next'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import IconRussia from 'shared/assets/icons/flag-russia.svg'
import IconUSA from 'shared/assets/icons/flag-usa.svg'
import cls from './SwitcherLanguage.module.css'

export const SwitcherLanguage: FC = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = async (): Promise<TFunction> =>
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  const onClick = (): void => {
    toggleLanguage().catch(() => {
      console.log('ERROR! i18n')
    })
  }

  return (
    <button onClick={onClick}>
      {i18n.language === 'ru'
        ? (
        <IconRussia className={cls.icon} />
          )
        : (
        <IconUSA className={cls.icon} />
          )}
    </button>
  )
}
