import { useState, type FC } from "react"
import { useTranslation } from "react-i18next"

export const Boom: FC = () => {
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState(false)

  if (isActive) {
    throw new Error("BOOM!")
  }

  const onClick = (): void => {
    setIsActive(value => !value)
  }

  return (
    <>
      <button onClick={onClick}>{t("Запустить ошибку")}</button>
    </>
  )
}
