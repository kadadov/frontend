import { type FC } from "react"
import { useTranslation } from "react-i18next"

const AboutPage: FC = () => {
  const { t } = useTranslation("about")

  return (
    <div>
      <h2>{t("О нас")}</h2>
    </div>
  )
}

export default AboutPage
