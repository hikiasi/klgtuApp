import { IconsList, TimetableIconsList } from "."

export type TBaseIconProps = {
  size?: number,
  color?: string,
}

export type TTimetableIconProps = Omit<TBaseIconProps, 'color'>

export type TDirectedIconProps = TBaseIconProps & {
  direction: 'up' | 'left' | 'right' | 'down'
}

export type TIconsList = keyof typeof IconsList

export type TTimetableIconsList = keyof typeof TimetableIconsList
