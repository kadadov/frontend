import { type FC, type SVGProps } from "react"

import IconDark from "shared/assets/icons/dark-mode.svg"
import IconLight from "shared/assets/icons/light-mode.svg"

import { DEFAULT_THEME } from "../contants"
import { Theme } from "../types/types"

interface IconProps extends SVGProps<SVGSVGElement> {
  theme?: Theme
}

export const Icon: FC<IconProps> = ({ theme = DEFAULT_THEME, ...props }) => {
  return theme === Theme.LIGHT ? (
    <IconLight {...props} />
  ) : (
    <IconDark {...props} />
  )
}
