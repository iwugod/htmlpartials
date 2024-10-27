

import './style.css';

import Alpine from 'alpinejs'
(window as any).Alpine = Alpine


import ItemsSlider from './js/components/items-slider';
import contactForm from './js/components/contact-form';



Alpine.data('ItemsSlider', ItemsSlider);
Alpine.data('contactForm', contactForm);
Alpine.start()