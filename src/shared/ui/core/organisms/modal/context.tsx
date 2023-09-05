import { createContext } from "react"

type TModalContext = {
  onHide: () => void
}

const ModalContext = createContext<TModalContext>({
  onHide() { },
})

export default ModalContext
