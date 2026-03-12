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
    title: 'Popular Interior Designs for Every Room',
    href: '#',
    items: [
      { 
        img: interiorWall, 
        alt: 'Modern wall unit living room',
        name: 'Oceanus Wall-Mounted TV Unit with Storage',
        description: 'Your living room is the perfect place to showcase your collectables, books and trophies and more.',
        layout: 'Lounge Style',
        dimension: '12 x 16 feet',
        colour: 'Base Unit: Orange, Wall and Loft units: Burgundy',
        material: 'Cabinet Material: Engineered Wood, Shutter Finish: Gloss',
        relatedItems: [proj835, proj836, proj829, proj828]
      },
      { 
        img: interiorContemp, 
        alt: 'Contemporary interior design',
        name: 'Contemporary Open-Plan Living Space',
        description: 'A seamless blend of comfort and style, this open-plan design maximizes natural light and space.',
        layout: 'Modern Open Plan',
        dimension: '20 x 25 feet',
        colour: 'Neutral Tones with Oak Accents',
        material: 'Flooring: Hardwood, Walls: Satin Finish Paint',
        relatedItems: [interiorWall, interiorLuxeBed, interiorElegant]
      },
      { 
        img: interiorLuxeBed, 
        alt: 'Luxe bedroom design',
        name: 'Royal Master Suite with Premium Finish',
        description: 'Experience luxury living with this master suite featuring a king-sized bed and integrated lighting.',
        layout: 'Master Suite',
        dimension: '14 x 18 feet',
        colour: 'Charcoal Grey & Gold',
        material: 'Headboard: Velvet, Side Tables: Marble Top',
        relatedItems: [interiorClassic, interiorMinimal, proj835]
      },
      { 
        img: interiorElegant, 
        alt: 'Elegant lounge interior',
        name: 'Gilded Elegance Lounge Area',
        description: 'An elegant space designed for relaxation and high-end social gatherings.',
        layout: 'Classy Formal Lounge',
        dimension: '15 x 20 feet',
        colour: 'Cream & Gold',
        material: 'Upholstery: Premium Fabric, Lighting: Crystal Chandelier',
        relatedItems: [interiorWall, interiorContemp, interiorWarm]
      },
      { img: interiorCozy, alt: 'Cozy home interior', name: 'Cozy Family Corner', description: 'A warm and inviting space for family time.', layout: 'Compact Lounge', dimension: '10 x 12 feet', colour: 'Teracotta & Beige', material: 'Rug: Wool, Furniture: Solid Wood', relatedItems: [interiorWarm, interiorClassic] },
      { img: interiorWarm, alt: 'Warm living space', name: 'Sun-Kissed Living Room', description: 'Bright and airy living room with large windows.', layout: 'Airy Modern', dimension: '18 x 22 feet', colour: 'Soft Yellow & White', material: 'Windows: UPVC, Blinds: Roller', relatedItems: [interiorCozy, interiorMinimal] },
      { img: interiorClassic, alt: 'Classic bedroom', name: 'Timeless Classic Bedroom', description: 'A bedroom that never goes out of style.', layout: 'Traditional', dimension: '12 x 14 feet', colour: 'Mahogany & Cream', material: 'Bed Frame: Teak Wood, Wardrobe: Mirror Finish', relatedItems: [interiorLuxeBed, proj836] },
      { img: interiorMinimal, alt: 'Minimalist room design', name: 'Zen Minimalist Sanctuary', description: 'Clutter-free design focusing on essential elements.', layout: 'Zen Minimalist', dimension: '12 x 12 feet', colour: 'Pure White & Ash', material: 'Paint: Low VOC, Lighting: Recessed LED', relatedItems: [interiorContemp, interiorWarm] },
    ],
  },
  {
    title: 'Inspiring Kitchen Designs',
    href: '/home-interiors/modular-kitchen',
    items: [
      { 
        img: kitchenVividWhite, 
        alt: 'Vivid white L-shaped kitchen',
        name: 'Vivid White Minimalist Kitchen',
        description: 'Sleek L-shaped kitchen with handle-less cabinets and a clean aesthetic.',
        layout: 'L-Shaped',
        dimension: '10 x 12 feet',
        colour: 'Arctic White',
        material: 'Countertop: Quartz, Shutters: Acrylic',
        relatedItems: [kitchenEcru, kitchenGainsboro, kitchenMojave]
      },
      { 
        img: kitchenEcru, 
        alt: 'Elegant ecru beige kitchen',
        name: 'Ecru Elegance Premium Kitchen',
        description: 'Luxurious beige kitchen with glossy finishes and integrated appliances.',
        layout: 'Straight Line',
        dimension: '8 x 14 feet',
        colour: 'Ecru Beige',
        material: 'Countertop: Granite, Shutters: High Gloss Laminate',
        relatedItems: [kitchenVividWhite, kitchenCoastal, kitchenSleek]
      },
      { img: kitchenGainsboro, alt: 'Gainsboro granite kitchen', name: 'Modern Granite Galley', description: 'Functional galley kitchen with durable granite surfaces.', layout: 'Galley', dimension: '8 x 12 feet', colour: 'Gainsboro Grey', material: 'Countertop: Black Pearl Granite', relatedItems: [kitchenVividWhite, kitchenDark] },
      { img: kitchenMojave, alt: 'Mojave desert metallic kitchen', name: 'Metallic Mojave Modern Kitchen', description: 'Unique metallic finish shutters with a panoramic ocean view.', layout: 'Island Kitchen', dimension: '15 x 15 feet', colour: 'Mojave Copper', material: 'Shutters: Metallic Decorative Film', relatedItems: [kitchenGreen, kitchenVanilla] },
      { img: kitchenCoastal, alt: 'Coastal chic island kitchen', name: 'Coastal Chic Marble Kitchen', description: 'Lighthearted design with marble countertops and blue accents.', layout: 'U-Shaped with Island', dimension: '18 x 20 feet', colour: 'White & Baby Blue', material: 'Countertop: Statuario Marble', relatedItems: [kitchenVividWhite, kitchenGreen] },
      { img: kitchenSleek, alt: 'Sleek straight industrial kitchen', name: 'Industrial Sleek Kitchen', description: 'Minimalist straight kitchen with concrete finishes and black metal accents.', layout: 'Straight', dimension: '10 x 8 feet', colour: 'Concrete Grey & Black', material: 'Shutters: Textured Laminate', relatedItems: [kitchenDark, kitchenWhiteWood] },
      { img: kitchenGreen, alt: 'Island kitchen with green stools', name: 'Sage Serenity Farmhouse Kitchen', description: 'A refreshing take on farmhouse style with sage green details.', layout: 'Parallel', dimension: '12 x 14 feet', colour: 'Sage Green & Oak', material: 'Sink: Farmhouse Ceramic', relatedItems: [kitchenCoastal, kitchenWhiteWood] },
      { img: kitchenDark, alt: 'Dark elegance open kitchen', name: 'Midnight Matte Modern Kitchen', description: 'Bold black matte finish with ambient under-cabinet lighting.', layout: 'Open Plan', dimension: '14 x 16 feet', colour: 'Matte Black', material: 'Countertop: Neolith', relatedItems: [kitchenGainsboro, kitchenVanilla] },
      { img: kitchenWhiteWood, alt: 'Flawless white wooden kitchen', name: 'Scandi-Style White Kitchen', description: 'Combination of white gloss and light wood for a Scandinavian feel.', layout: 'L-Shaped', dimension: '10 x 10 feet', colour: 'White & Light Oak', material: 'Handle: Integrated Wood', relatedItems: [kitchenVividWhite, kitchenGreen] },
      { img: kitchenVanilla, alt: 'Dark vanilla black countertop kitchen', name: 'Vanilla Bean Gourmet Kitchen', description: 'Warm vanilla tones paired with heavy-duty black granite.', layout: 'Island', dimension: '16 x 18 feet', colour: 'Vanilla Cream & Black', material: 'Countertop: Absolute Black Granite', relatedItems: [kitchenDark, kitchenMojave] },
    ],
  },
  {
    title: 'Bedroom Designs That Spell Comfort',
    href: '/home-interiors/bedroom',
    items: [
      { img: interiorWarm, alt: 'Warm earthy living room', name: 'Warm Earthy Bedroom', description: 'Soft tones and natural textures for a restful sleep.', layout: 'Master Bedroom', dimension: '14 x 16 feet', colour: 'Beige & Terracotta', material: 'Bed Headboard: Fabric Padding', relatedItems: [interiorClassic, interiorMinimal] },
      { img: interiorClassic, alt: 'Classic luxury bedroom', name: 'Luxurious Classic Suite', description: 'Traditional design with carved wood and rich fabrics.', layout: 'Executive Suite', dimension: '16 x 20 feet', colour: 'Gold & Ivory', material: 'Furniture: Solid Rosewood', relatedItems: [interiorLuxeBed, proj836] },
      { img: interiorMinimal, alt: 'Minimalist bedroom', name: 'Bare Essentials Bedroom', description: 'Maximum functionality with minimum decorative clutter.', layout: 'Studio Bedroom', dimension: '10 x 12 feet', colour: 'Cool Grey & White', material: 'Storage: Built-in Hidden', relatedItems: [interiorContemp, interiorWarm] },
    ],
  },
  {
    title: 'Wardrobe Designs That Wow',
    href: '/home-interiors/wardrobe',
    items: [
      { img: proj835, alt: 'Sliding wardrobe design', name: 'Sleek Sliding Door Wardrobe', description: 'Space-saving sliding wardrobe with tinted glass and LED internals.', layout: 'Wall-to-Wall', dimension: '8 x 10 feet', colour: 'Smokey Chrome', material: 'Glass: Toughened Tinted', relatedItems: [proj836, proj829] },
      { img: proj836, alt: 'Walk-in wardrobe', name: 'Boutique Walk-in Closet', description: 'A dream walk-in wardrobe with dedicated sections for shoes and accessories.', layout: 'Walk-in', dimension: '10 x 12 feet', colour: 'White & Brass', material: 'Shelving: Plywood with Laminate', relatedItems: [proj835, proj828] },
    ],
  },
];
