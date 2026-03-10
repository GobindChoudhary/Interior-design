import ncrImg from '../assets/imgi_60_NCR.jpg';
import blrImg from '../assets/imgi_61_Bangalore.jpg';
import hydImg from '../assets/imgi_62_hyd.jpg';
import chennaiImg from '../assets/imgi_63_chennai.jpg';
import mumbaiImg from '../assets/imgi_64_Mumbai.jpg';

// Main cities with images for carousels
export const cityData = [
    { id: 1, name: 'NCR', image: ncrImg, link: '/cities/interior-designers-ncr' },
    { id: 2, name: 'Bengaluru', image: blrImg, link: '/cities/interior-designers-bengaluru' },
    { id: 3, name: 'Hyderabad', image: hydImg, link: '/cities/interior-designers-hyderabad' },
    { id: 4, name: 'Chennai', image: chennaiImg, link: '/cities/interior-designers-chennai' },
    { id: 5, name: 'Mumbai', image: mumbaiImg, link: '/cities/interior-designers-mumbai' },
    { id: 6, name: 'Pune', image: ncrImg, link: '/cities/interior-designers-pune' },
    { id: 7, name: 'Kolkata', image: blrImg, link: '/cities/interior-designers-kolkata' },
];

// Flat list of all cities for the dropdown
export const allCities = [
  "Ahmedabad", "Bengaluru", "Bhubaneswar", "Chandigarh",
  "Chennai", "Coimbatore", "Dimapur", "Ghaziabad",
  "Gurgaon", "Guwahati", "Hyderabad", "Jaipur",
  "Jamshedpur", "Karimnagar", "Kochi", "Kolkata",
  "Lucknow", "Madurai", "Mangalore", "Mumbai",
  "Mysore", "Nagpur", "Nashik", "New Delhi",
  "Nizamabad", "Noida", "Patna", "Pune",
  "Ranchi", "Salem", "Shimoga", "Siliguri",
  "Surat", "Thane", "Thrissur", "Tirupati",
  "Trichy", "Trivandrum", "Vadodara", "Vijayawada",
  "Visakhapatnam", "Warangal"
];
