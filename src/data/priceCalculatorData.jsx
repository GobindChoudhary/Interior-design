import React from "react";

export const dummyFaqs = [
    {
        q: "How is the modular kitchen price calculated?",
        a: "The price is calculated based on factors like kitchen size, layout, cabinet material, shutter finish, hardware, and any additional accessories you choose."
    },
    {
        q: "Does the estimate include installation charges?",
        a: "Yes, the cost estimate we provide includes delivery, installation, and a 10-year warranty, so there are no hidden fees."
    },
    {
        q: "Can I customize the kitchen accessories later?",
        a: "Absolutely! You can interact with our designers to add, remove, or swap accessories to better fit your lifestyle before finalizing the design."
    },
    {
        q: "Is the estimated price the final price?",
        a: "The calculator provides an approximate cost based on standard dimensions. The final price might vary slightly after accurate site measurement."
    }
];

export const homeDummyFaqs = [
    {
        q: "How is the home interior price calculated?",
        a: "The overall price is calculated based on the size of your home, selected rooms, specific requirements (Essential/Premium/Luxe), and additional modular solutions."
    },
    {
        q: "Does this estimate cover civil work?",
        a: "This estimate covers modular furniture, design, and installation. Extensive civil work, plumbing, or electrical modifications might incur additional charges based on site inspection."
    },
    {
        q: "What is the difference between Essential and Luxe packages?",
        a: "Essential includes our standard durable finishes perfect for everyday use. Luxe involves high-end materials, custom finishes, imported hardware, and bespoke design elements."
    },
    {
        q: "Can I remove or add rooms later in the design phase?",
        a: "Yes, this calculator gives you a preliminary estimate. You can always add or remove scopes when you meet your designer."
    }
];

export const initialAccessories = [
    { id: 'detergent_bin', name: 'Detergent holder & bin holder designs', count: 1, img: "https://images.unsplash.com/photo-1595514535415-dc29835fb0a6?w=200&h=200&fit=crop" },
    { id: 'detergent_350', name: 'Detergent holder (350mm) designs', count: 1, img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=200&fit=crop" },
    { id: 'cutlery', name: 'Cutlery cup & saucer thali tray designs', count: 1, img: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=200&h=200&fit=crop" },
    { id: 'bottle', name: 'Bottle pull-out (300mm soft-close channels) designs', count: 1, img: "https://images.unsplash.com/photo-1628158580665-274719c23558?w=200&h=200&fit=crop" },
];

export const homeRooms = ["Kitchen", "Master Bedroom", "Kids Bedroom", "Guest Bedroom", "Living Room", "Dining Room", "Bathrooms"];
export const shapes = ["L-Shape", "U-Shape", "Parallel", "Straight"];
export const configs = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "5+ BHK"];

export const renderShapeIcon = (s) => {
    switch (s) {
        case "L-Shape":
            return (
                <svg className="w-16 h-16 mx-auto mb-2 text-gray-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 20 H80 V40 H40 V80 H20 Z" />
                    <circle cx="60" cy="30" r="4" fill="currentColor" />
                    <circle cx="70" cy="30" r="4" fill="currentColor" />
                </svg>
            );
        case "U-Shape":
            return (
                <svg className="w-16 h-16 mx-auto mb-2 text-gray-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 20 H80 V80 H60 V40 H40 V80 H20 Z" />
                    <circle cx="50" cy="30" r="4" fill="currentColor" />
                </svg>
            );
        case "Parallel":
            return (
                <svg className="w-16 h-16 mx-auto mb-2 text-gray-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="20" y="20" width="60" height="20" />
                    <rect x="20" y="60" width="60" height="20" />
                    <circle cx="50" cy="30" r="4" fill="currentColor" />
                </svg>
            );
        case "Straight":
            return (
                <svg className="w-16 h-16 mx-auto mb-2 text-gray-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="10" y="40" width="80" height="20" />
                    <circle cx="40" cy="50" r="4" fill="currentColor" />
                    <circle cx="50" cy="50" r="4" fill="currentColor" />
                </svg>
            );
        default:
            return null;
    }
};
