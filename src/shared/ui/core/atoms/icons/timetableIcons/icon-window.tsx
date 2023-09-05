import { TTimetableIconProps } from "../types";

export const IconWindow = ({ size = 48 }: TTimetableIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={size} height={size} rx="24" fill="#2F80ED" />
      <path d="M18 31.5C15.7909 31.5 14 29.7091 14 27.5C14 25.6358 15.2753 24.0694 17.0011 23.6257C17.0004 23.5839 17 23.542 17 23.5C17 19.634 20.134 16.5 24 16.5C27.6099 16.5 30.5815 19.2325 30.9594 22.7419C32.7284 23.3481 34 25.0255 34 27C34 29.4853 31.9853 31.5 29.5 31.5C25.7609 31.5 22.1876 31.5 18 31.5Z" fill="white" />
    </svg>
  )
}
