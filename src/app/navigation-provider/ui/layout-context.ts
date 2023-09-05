import { createContext } from "react"

export type LayoutContextValue = {
  footerVisibility?: boolean,
  setFooterVisibility?: (e: boolean) => void,
}

const LayoutContext = createContext<LayoutContextValue>({})

export default LayoutContext
