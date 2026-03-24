import img1 from "../assets/imgi_12_vivid-white-minimalist-l-shaped-kitchen-sleek-cabinets.webp";
import img2 from "../assets/imgi_13_elegant-ecru-luxurious-beige-kitchen-glossy-cabinets.webp";
import img3 from "../assets/imgi_14_gainsboro-kitchen-granite-countertops.webp";
import img4 from "../assets/imgi_15_mojave-desert-modern-metallic-kitchen-ocean-view.webp";
import img5 from "../assets/imgi_16_coastal-chic-island-kitchen-white-marble-countertops.webp";
import img6 from "../assets/imgi_17_sleek-superfoam-minimalist-straight-kitchen-industrial-accents.webp";
import img7 from "../assets/imgi_18_sleek-serenity-elegant-island-kitchen-green-bar-stools.webp";
import img8 from "../assets/imgi_19_dark-elegance-modern-open-kitchen-black-backsplash.webp";

// We'll reuse these images across categories for now, but in reality they'd be unique
import lrHero from "../assets/living-room.webp";
import kitchenHero from "../assets/bathroom design.webp"; // Placeholder
import bedroomHero from "../assets/bedroom design.webp"; // Placeholder
import bathroomHero from "../assets/bathroom design.webp"; // Placeholder
import wardrobeHero from "../assets/wardrobe designs.webp"; // Placeholder
import homeOfficeHero from "../assets/home office.jpg"; // Placeholder
import spaceSavingHero from "../assets/space-saving.webp"; // Placeholder

export const livingRoomDesigns = [
  {
    id: 1,
    title: "Teal Treasures Living Room Design",
    images: [img1, img2, img3],
  },
  { id: 3, title: "Sylvan Oasis Balcony Design", images: [img4, img5, img6] },
  {
    id: 4,
    title: "Bohemian Jungle Living Room Design",
    images: [img7, img8, img1],
  },
  {
    id: 5,
    title: "Urban Sunshine Living Room Design",
    images: [img2, img3, img4],
  },
  {
    id: 6,
    title: "Mediterranean Escape Living Room Design",
    images: [img5, img6, img7],
  },
];

// ======== DYNAMIC DATA MAP ======== //
// Keys are the exact slugs generated from the Navbar links (e.g. modular-kitchen)
export const galleryDataMap = {
  "modular-kitchen": {
    pageTitle: "Modular Kitchen Designs Shaped Around You",
    heroBg: kitchenHero,
    headerTitle: "Popular Kitchen Designs",
    designs: [
      {
        id: 1,
        title: "Sleek Minimalist L-Shaped Kitchen",
        images: [img1, img3, img5],
      },
      {
        id: 2,
        title: "Elegant Luxurious Beige Kitchen",
        images: [img2, img4, img6],
      },
      { id: 3, title: "Modern Open Kitchen", images: [img8, img7, img1] },
    ],
  },
  "living-room": {
    pageTitle: "Living Room Designs Shaped Around You",
    heroBg: lrHero,
    headerTitle: "Popular Living Room Designs",
    designs: livingRoomDesigns,
  },
  bedroom: {
    pageTitle: "Bedroom Designs Shaped Around You",
    heroBg: bedroomHero,
    headerTitle: "Popular Bedroom Designs",
    designs: [
      { id: 1, title: "Master Bedroom Haven", images: [img5, img6, img7] },
      { id: 2, title: "Cozy Guest Bedroom", images: [img3, img4, img1] },
      { id: 3, title: "Modern Minimalist Space", images: [img8, img2, img1] },
    ],
  },
  wardrobe: {
    pageTitle: "Wardrobe Designs Shaped Around You",
    heroBg: wardrobeHero,
    headerTitle: "Popular Wardrobe Designs",
    designs: [
      { id: 1, title: "Sliding Door Wardrobe", images: [img4, img1, img2] },
      { id: 2, title: "Walk-in Closet Luxury", images: [img7, img8, img5] },
    ],
  },
  "space-saving-furniture": {
    pageTitle: "Space Saving Furniture Shaped Around You",
    heroBg: spaceSavingHero,
    headerTitle: "Popular Space Saving Designs",
    designs: [
      { id: 1, title: "Foldable Wall Beds", images: [img1, img3, img6] },
      { id: 2, title: "Hidden Storage Units", images: [img2, img5, img7] },
    ],
  },
  "home-office": {
    pageTitle: "Home Office Designs Shaped Around You",
    heroBg: homeOfficeHero,
    headerTitle: "Popular Home Office Designs",
    designs: [
      { id: 1, title: "Ergonomic Corner Study", images: [img8, img6, img2] },
      { id: 2, title: "Minimalist Workspace", images: [img1, img4, img7] },
    ],
  },
  bathroom: {
    pageTitle: "Bathroom Designs Shaped Around You",
    heroBg: bathroomHero,
    headerTitle: "Popular Bathroom Designs",
    designs: [
      { id: 1, title: "Luxury Spa Bathroom", images: [img6, img5, img4] },
      { id: 2, title: "Compact Modern Bath", images: [img3, img2, img1] },
    ],
  },
};
