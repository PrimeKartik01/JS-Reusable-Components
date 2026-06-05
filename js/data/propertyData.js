export const properties = [
    {
        id: 1,
        title: "Modern Luxury Villa with Pool",
        type: "Villa",
        status: "sale",
        price: 1250000,
        beds: 5,
        baths: 4,
        sqft: 4500,
        garage: 2,
        location: "Beverly Hills, CA",
        description: "Stunning modern villa with infinity pool, smart home features, and panoramic city views.",
        image: "img/img1.webp",
        images: ["img/img1.webp", "img/img2.webp", "img/img1.webp"],
        featured: true,
        agent: {
            name: "Sarah Johnson",
            phone: "(310) 555-0123",
            image: "img/img2.webp"
        }
    },
    {
        id: 2,
        title: "Downtown Penthouse Apartment",
        type: "Apartment",
        status: "rent",
        price: 8500,
        beds: 3,
        baths: 2,
        sqft: 2200,
        garage: 1,
        location: "Manhattan, New York",
        description: "Luxury penthouse with floor-to-ceiling windows, rooftop terrace, and 24/7 concierge.",
        image: "img/img2.webp",
        images: ["img/img2.webp", "img/img1.webp"],
        featured: false,
        agent: {
            name: "Michael Chen",
            phone: "(212) 555-0456",
            image: "img/img1.webp"
        }
    },
    {
        id: 3,
        title: "Cozy Family Home in Suburbs",
        type: "House",
        status: "sale",
        price: 675000,
        oldPrice: 720000,
        beds: 4,
        baths: 3,
        sqft: 2800,
        garage: 2,
        location: "Austin, TX",
        description: "Beautiful family home with large backyard, updated kitchen, and excellent school district.",
        image: "img/img1.webp",
        images: ["img/img1.webp"],
        featured: true,
        agent: {
            name: "Emily Rodriguez",
            phone: "(512) 555-0789",
            image: "img/img2.webp"
        }
    },
    {
        id: 4,
        title: "Beachfront Condo with Ocean View",
        type: "Condo",
        status: "rent",
        price: 4200,
        beds: 2,
        baths: 2,
        sqft: 1500,
        garage: 1,
        location: "Miami Beach, FL",
        description: "Direct beach access, resort-style amenities, and breathtaking sunrise views.",
        image: "img/img2.webp",
        images: ["img/img2.webp", "img/img1.webp", "img/img2.webp"],
        featured: false
    },
];