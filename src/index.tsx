import { createRoot } from "react-dom/client"

import { App } from "app/App"
import "app/styles/index.css"
import "shared/config/languageConfig/i18n"

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container)

root.render(<App />)
