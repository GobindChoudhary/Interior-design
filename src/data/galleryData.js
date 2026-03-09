// Gallery sections data — all images from assets, with descriptive names
import interiorWall       from '../assets/imgi_10_HLKT0000067-1.jpg';
import interiorContemp    from '../assets/imgi_11_HLKT0000068.jpg';
import interiorLuxeBed    from '../assets/imgi_2_HLKT0000070-1.jpg';
import interiorElegant    from '../assets/imgi_3_HLKT0000072.jpg';
import interiorCozy       from '../assets/imgi_6_1.jpg';
import interiorWarm       from '../assets/imgi_7_5.jpg';
import interiorClassic    from '../assets/imgi_8_11.jpg';
import interiorMinimal    from '../assets/imgi_9_13.jpg';

import kitchenVividWhite  from '../assets/imgi_12_vivid-white-minimalist-l-shaped-kitchen-sleek-cabinets.webp';
import kitchenEcru        from '../assets/imgi_13_elegant-ecru-luxurious-beige-kitchen-glossy-cabinets.webp';
import kitchenGainsboro   from '../assets/imgi_14_gainsboro-kitchen-granite-countertops.webp';
import kitchenMojave      from '../assets/imgi_15_mojave-desert-modern-metallic-kitchen-ocean-view.webp';
import kitchenCoastal     from '../assets/imgi_16_coastal-chic-island-kitchen-white-marble-countertops.webp';
import kitchenSleek       from '../assets/imgi_17_sleek-superfoam-minimalist-straight-kitchen-industrial-accents.webp';
import kitchenGreen       from '../assets/imgi_18_sleek-serenity-elegant-island-kitchen-green-bar-stools.webp';
import kitchenDark        from '../assets/imgi_19_dark-elegance-modern-open-kitchen-black-backsplash.webp';
import kitchenWhiteWood   from '../assets/imgi_20_flawless-white-minimalist-open-kitchen-wooden-accents..webp';
import kitchenVanilla     from '../assets/imgi_21_dark-vanilla-modern-kitchen-black-countertops.webp';

import proj835            from '../assets/imgi_4_16812825187988aa51774f366-HLKT00000835_batch-2-800x600_30-main.jpg';
import proj836            from '../assets/imgi_5_16812826479900de199faa8ef-HLKT00000836_batch-2-800x600_23-main.jpg';
import proj829            from '../assets/imgi_22_1681279874761b4875200ceaf-HLKT00000829_batch-2-800x600_7-main.jpg';
import proj828            from '../assets/imgi_23_1681205226697c70c0213a9dd-HLKT00000828_batch-3-800x600_33-main.jpg';

export const gallerySections = [
  {
    title: 'End-to-end offerings',
    href: '#',
    items: [
      { img: interiorWall,    alt: 'Modern wall unit living room' },
      { img: interiorContemp, alt: 'Contemporary interior design' },
      { img: interiorLuxeBed, alt: 'Luxe bedroom design' },
      { img: interiorElegant, alt: 'Elegant lounge interior' },
      { img: interiorCozy,    alt: 'Cozy home interior' },
      { img: interiorWarm,    alt: 'Warm living space' },
      { img: interiorClassic, alt: 'Classic bedroom' },
      { img: interiorMinimal, alt: 'Minimalist room design' },
    ],
  },
  {
    title: 'Modular Kitchen Designs',
    href: '#',
    items: [
      { img: kitchenVividWhite, alt: 'Vivid white L-shaped kitchen' },
      { img: kitchenEcru,       alt: 'Elegant ecru beige kitchen' },
      { img: kitchenGainsboro,  alt: 'Gainsboro granite kitchen' },
      { img: kitchenMojave,     alt: 'Mojave desert metallic kitchen' },
      { img: kitchenCoastal,    alt: 'Coastal chic island kitchen' },
      { img: kitchenSleek,      alt: 'Sleek straight industrial kitchen' },
      { img: kitchenGreen,      alt: 'Island kitchen with green stools' },
      { img: kitchenDark,       alt: 'Dark elegance open kitchen' },
      { img: kitchenWhiteWood,  alt: 'Flawless white wooden kitchen' },
      { img: kitchenVanilla,    alt: 'Dark vanilla black countertop kitchen' },
    ],
  },
  {
    title: 'Living Room & Bedroom Designs',
    href: '#',
    items: [
      { img: interiorWarm,    alt: 'Warm earthy living room' },
      { img: interiorClassic, alt: 'Classic luxury bedroom' },
      { img: interiorMinimal, alt: 'Minimalist bedroom' },
      { img: interiorElegant, alt: 'Elegant lounge setup' },
      { img: interiorLuxeBed, alt: 'Luxe master bedroom' },
      { img: interiorCozy,    alt: 'Cozy home interior' },
    ],
  },
  {
    title: 'Wardrobe Designs',
    href: '#',
    items: [
      { img: proj835,         alt: 'Sliding wardrobe design' },
      { img: proj836,         alt: 'Walk-in wardrobe' },
      { img: proj829,         alt: 'Mirror wardrobe bedroom' },
      { img: proj828,         alt: 'Hinged wardrobe closet' },
      { img: interiorClassic, alt: 'Built-in wardrobe bedroom' },
      { img: interiorLuxeBed, alt: 'Custom wardrobe luxury bedroom' },
    ],
  },
];
