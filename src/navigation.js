import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Call for Papers',
      href: getPermalink('/#Call-For-Papers'),
    },
    {
      text: 'Submission Guide',
      href: getPermalink('/#Submission-Guide'),
    },
    {
      text: 'Organizing Committee',
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
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
};
