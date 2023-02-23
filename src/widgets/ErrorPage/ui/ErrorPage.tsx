import { type FC } from "react"
import { useTranslation } from "react-i18next"

export const ErrorPage: FC = () => {
  const { t } = useTranslation()

  return <div>{t("Ошибка")}</div>
}
