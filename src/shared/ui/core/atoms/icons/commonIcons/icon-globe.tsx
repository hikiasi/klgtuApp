import { TBaseIconProps } from "../types";

export const IconGlobe = ({ size, color }: TBaseIconProps) => {
  return (
    <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.7409 11.151H7.53141C7.73138 8.55436 8.61035 6.06307 10.0697 3.92359C6.68272 4.7301 4.10038 7.61196 3.7409 11.151ZM12 4.1608C10.4185 6.17141 9.45702 8.60113 9.23511 11.151H14.7649C14.543 8.60113 13.5815 6.17141 12 4.1608ZM14.7649 12.849C14.543 15.3989 13.5815 17.8286 12 19.8392C10.4185 17.8286 9.45702 15.3989 9.23511 12.849H14.7649ZM7.53141 12.849H3.7409C4.10038 16.388 6.68272 19.2699 10.0697 20.0764C8.61035 17.9369 7.73138 15.4456 7.53141 12.849ZM13.9303 20.0764C15.3897 17.9369 16.2686 15.4456 16.4686 12.849H20.2591C19.8996 16.388 17.3173 19.2699 13.9303 20.0764ZM20.2591 11.151H16.4686C16.2686 8.55436 15.3896 6.06307 13.9303 3.92359C17.3173 4.7301 19.8996 7.61196 20.2591 11.151ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill={color ?? "black"} />
    </svg>
  )
}
