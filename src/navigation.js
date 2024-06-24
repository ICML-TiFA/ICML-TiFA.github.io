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
      text: 'People',
      href: getPermalink('/#Organizers'),
    },
    // {
    //   text:'CO',
    //   href:getPermalink('/#Challenge-Organizer')
    // },
    // {
    //   text: 'SC',
    //   href: getPermalink('/#Steering-Committee'),
    // },
    {
      text:'Challenge',
      href:'/challenges'
    }
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
