import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const NotFoundPage: FC = () => {
  const { t } = useTranslation('notFountPage')

  return (
    <div>
      <h2>{t('404 страница не найдена')}</h2>
    </div>
  )
}

export default NotFoundPage
