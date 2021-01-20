import TeslaModel3 from '../assets/model3.jpeg';
import TeslaModelS from '../assets/models.jpeg';
import TeslaModelX from '../assets/modelx.jpeg';
import TeslaModelY from '../assets/modely.jpeg';
import Powerwall from '../assets/solarPanels.jpeg';
import TeslaAccessories from '../assets/accessories.jpg';

export interface TeslaInterface {
  title: string;
  description?: string;
  descriptionSecond?: string;
  descriptionLink?: string;
  backgroundImage: File;
  leftButton: string;
  leftButtonText: string;
  rightButton?: string;
  rightButtonText?: string;
  first: boolean;
  footer: boolean;
}

export const TeslaData: Array<TeslaInterface> = [
  {
    title: 'Model 3',
    description: '0% Company Car Tax.',
    descriptionSecond: 'Learn More',
    descriptionLink: 'https://www.tesla.com/en_GB/benefit-in-kind',
    backgroundImage: TeslaModel3,
    leftButton: 'https://www.tesla.com/en_gb/model3/design',
    leftButtonText: 'CUSTOM ORDER',
    rightButton: 'https://www.tesla.com/en_gb/inventory/new/m3',
    rightButtonText: 'AVAILABLE INVENTORY',
    first: true,
    footer: false,
  },
  {
    title: 'Solar and Powerwall',
    description: 'Power Everything',
    descriptionSecond: null,
    descriptionLink: null,
    backgroundImage: Powerwall,
    leftButton: 'https://www.tesla.com/en_gb/powerwall',
    leftButtonText: 'LEARN MORE',
    rightButton: null,
    rightButtonText: null,
    first: false,
    footer: false,
  },
  {
    title: 'Model S',
    description: '0% Company Car Tax.',
    descriptionSecond: 'Learn More',
    descriptionLink: 'https://www.tesla.com/en_GB/benefit-in-kind',
    backgroundImage: TeslaModelS,
    leftButton: 'https://www.tesla.com/en_gb/models/design',
    leftButtonText: 'CUSTOM ORDER',
    rightButton: 'https://www.tesla.com/en_gb/inventory/new/ms',
    rightButtonText: 'AVAILABLE INVENTORY',
    first: false,
    footer: false,
  },
  {
    title: 'Model X',
    description: '0% Company Car Tax.',
    descriptionSecond: 'Learn More',
    descriptionLink: 'https://www.tesla.com/en_GB/benefit-in-kind',
    backgroundImage: TeslaModelX,
    leftButton: 'https://www.tesla.com/en_gb/modelx/design',
    leftButtonText: 'CUSTOM ORDER',
    rightButton: 'https://www.tesla.com/en_gb/inventory/new/mx',
    rightButtonText: 'AVAILABLE INVENTORY',
    first: false,
    footer: false,
  },
  {
    title: 'Model Y',
    description: null,
    descriptionSecond: null,
    descriptionLink: null,
    backgroundImage: TeslaModelY,
    leftButton: 'https://www.tesla.com/en_gb/modely',
    leftButtonText: 'LEARN MORE',
    rightButton: null,
    rightButtonText: null,
    first: false,
    footer: false,
  },
  {
    title: 'Accessories',
    description: null,
    descriptionSecond: null,
    descriptionLink: null,
    backgroundImage: TeslaAccessories,
    leftButton: 'https://www.tesla.com/en_gb/shop',
    leftButtonText: 'SHOP NOW',
    rightButton: null,
    rightButtonText: null,
    first: false,
    footer: true,
  },
];
