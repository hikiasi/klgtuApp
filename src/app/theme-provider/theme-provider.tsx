import { lightTheme } from "@shared/ui/theme"
import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

type Props = {
  children: ReactNode
}

export const AppThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={lightTheme} children={children} />
  )
}
