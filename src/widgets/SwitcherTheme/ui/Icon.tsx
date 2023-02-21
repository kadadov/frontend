import { FC, SVGProps } from "react";
import IconDark from "shared/assets/icons/dark-mode.svg";
import IconLight from "shared/assets/icons/light-mode.svg";
import { Theme } from "../types/types";

interface IconProps extends SVGProps<SVGSVGElement> {
  theme: Theme;
}

export const Icon: FC<IconProps> = ({ theme, ...props }) => {
  return theme === Theme.LIGHT ? (
    <IconLight {...props} />
  ) : (
    <IconDark {...props} />
  );
};
