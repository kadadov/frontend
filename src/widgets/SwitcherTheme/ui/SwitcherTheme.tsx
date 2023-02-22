import { type FC } from "react"

import { useTheme } from "../hooks/useTheme"

import { Icon } from "./Icon"
import cls from "./SwitcherTheme.module.css"

export const SwitcherTheme: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      <Icon theme={theme} className={cls.icon} />
    </button>
  )
}
