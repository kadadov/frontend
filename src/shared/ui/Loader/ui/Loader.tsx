import { type FC } from "react"

import cls from "./Loader.module.css"

export const Loader: FC = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.loader}>{"text"}</div>
    </div>
  )
}
