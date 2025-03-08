import { NavItemDropdownItem } from '@/types';
import { IconName } from 'lucide-react/dynamic';

export const navLinkList = [
  {
    id: 1,
    path: '/',
    label: 'Home',
  },
  {
    id: 2,
    path: '/about',
    label: 'About',
  },
  {
    id: 3,
    path: '/shop',
    label: 'Shop',
  },
  {
    id: 4,
    path: '/herbal-profiles',
    label: 'Herbal Profiles',
  },
  {
    id: 5,
    path: '/ancient-herbs',
    label: 'Ancient Herbs',
  },
  {
    id: 6,
    path: '/contact',
    label: 'Contact',
  },
];

export const navLinkListTwo: {
  id: number;
  path: string;
  icon: IconName;
  size: number;
}[] = [
  {
    id: 1,
    path: '/',
    icon: 'shopping-bag',
    size: 20,
  },
  {
    id: 2,
    path: '/',
    icon: 'user-round',
    size: 22,
  },
  {
    id: 3,
    path: '/',
    icon: 'menu',
    size: 22,
  },
];

export const navLinkListThree: NavItemDropdownItem[] = [
  {
    id: 12,
    path: 'shop',
    label: 'Shop',
    dropdown: [],
  },
  {
    id: 1,
    path: '/herbal-profiles',
    label: 'Herbal Profiles',
    dropdown: [
      {
        id: 1,
        path: '/herbal-profiles/herbal-energetic',
        label: 'Herbal Energetic',
      },
      {
        id: 2,
        path: '/herbal-profiles/carribean-medicinal-plants',
        label: 'Carribean Medicinal Plants',
      },
      {
        id: 3,
        path: '/herbal-profiles/ancient-tales-of-medicinal-plants',
        label: 'Ancient Tales of Medicinal Plants',
      },
      {
        id: 4,
        path: '/herbal-profiles/modern-day-medicine',
        label: 'Modern Day Medicine',
      },
    ],
  },
  {
    id: 2,
    path: '/ancient-herbs',
    label: 'Ancient Herbs',
    dropdown: [
      {
        id: 1,
        path: 'ancient-herbs/nervous-system',
        title: 'Nervous System',
        imagePath: '',
      },
      {
        id: 2,
        path: 'ancient-herbs/endocrine-system',
        title: 'Endocrine System',
        imagePath: '',
      },
      {
        id: 3,
        path: 'ancient-herbs/digestive-system',
        title: 'Digestive System',
        imagePath: '',
      },
      {
        id: 4,
        path: 'ancient-herbs/immune-system',
        title: 'Immune System',
        imagePath: '',
      },
    ],
  },
];
