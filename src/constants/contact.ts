import {
  FaGithub,
  FaGitlab,
  FaRegEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

export interface IContact {
  href: string
  icon: IconType
}

export const contact: IContact[] = [
  {
    href: 'https://github.com/win11905',
    icon: FaGithub,
  },
  {
    href: 'https://gitlab.com/win11905',
    icon: FaGitlab,
  },
  {
    href: 'mailto:contact@pongsaphol.com',
    icon: FaRegEnvelope,
  },
  {
    href: 'https://www.linkedin.com/in/pongsaphol-pongsawakul-14b26817b/',
    icon: FaLinkedin,
  },
  {
    href: 'https://facebook.com/win11905',
    icon: FaFacebook,
  },
  {
    href: 'https://instagram.com/win11905',
    icon: FaInstagram,
  },
]
