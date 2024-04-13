import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Ezhixuan',
  subtitle: '记录生活，分享知识',
  lang: 'en',
  themeHue: 250,
  banner: {
    enable: true,
    src: 'https://cdn.jsdelivr.net/gh/Ezhixuan/myPic/images/demo-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/Ezhixuan',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://cdn.jsdelivr.net/gh/Ezhixuan/myPic/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230820141449.jpg',
  name: 'Ezhixuan',
  bio: '我们都要成为更好的自己',
  links: [
    {
      name: 'weixin',
      icon: 'fa6-brands:weixin',
      url: 'https://cdn.jsdelivr.net/gh/Ezhixuan/myPic/images/1c3b2a98937b089f7dc95006c34498e.jpg',
    },
    {
      name: 'qq',
      icon: 'fa6-brands:qq',
      url: 'https://cdn.jsdelivr.net/gh/Ezhixuan/myPic/images/064ff847188b05eff276e4d6127206d.jpg',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Ezhixuan',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}


