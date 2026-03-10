import ncrImg from '../assets/imgi_60_NCR.jpg';
import blrImg from '../assets/imgi_61_Bangalore.jpg';
import hydImg from '../assets/imgi_62_hyd.jpg';
import chennaiImg from '../assets/imgi_63_chennai.jpg';
import mumbaiImg from '../assets/imgi_64_Mumbai.jpg';

// In case the user specifically wants the cities from the screenshot,
// we'll map the available images to those names or just use real names.
// I'll stick to real names of the assets.
export const cityData = [
    {
        id: 1,
        name: 'NCR',
        image: ncrImg,
        link: '/cities/ncr'
    },
    {
        id: 2,
        name: 'Bangalore',
        image: blrImg,
        link: '/cities/bangalore'
    },
    {
        id: 3,
        name: 'Hyderabad',
        image: hydImg,
        link: '/cities/hyderabad'
    },
    {
        id: 4,
        name: 'Chennai',
        image: chennaiImg,
        link: '/cities/chennai'
    },
    {
        id: 5,
        name: 'Mumbai',
        image: mumbaiImg,
        link: '/cities/mumbai'
    },
    // Duplicating some to have more items for the carousel to scroll properly if needed
    {
        id: 6,
        name: 'Pune',
        image: ncrImg, // Reusing image
        link: '/cities/pune'
    },
    {
        id: 7,
        name: 'Kolkata',
        image: blrImg, // Reusing image
        link: '/cities/kolkata'
    },
];
