import { type FC } from "react"
import { useTranslation } from "react-i18next"

import { Boom } from "shared/ui/Boom"

const MainPage: FC = () => {
  const { t } = useTranslation("main")

  return (
    <div>
      <h2>{t("Главная")}</h2>
      <Boom />
    </div>
  )
}

export default MainPage
