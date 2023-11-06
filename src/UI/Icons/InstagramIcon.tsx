import { type IconProps } from "./IconModel"


const InstagramIcon = ({ fill = "none", stroke = "currentColor" }: IconProps) => {
  return (
    <svg
    fill={fill}
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="h-5 w-5"
    viewBox="0 0 24 24"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
  </svg>
  )
}

export default InstagramIcon