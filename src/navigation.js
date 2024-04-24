import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Call For Papers',
      href: getPermalink('/#Call-For-Papers'),
    },
    {
      text: 'Schedule',
      href: getPermalink('/#Schedule'),
    },
    {
      text: 'Speakers',
      href: getPermalink('/#Speakers'),
    },
    {
      text: 'Organizers',
      href: getPermalink('/#Organizers'),
    },
    {
      text: 'Steering Committee',
      href: getPermalink('/#Steering-Committee'),
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
};
