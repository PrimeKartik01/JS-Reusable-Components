import { initHeroSlider } from "../components/heroslider/heroslider.js";
import { initNavbar } from "../components/navbar/navbar.js";

import { homeSliderData } from "../data/homeSliderData.js";
import { navbarData } from "../data/navbarData.js";

import { initProjectSpotlight } from "../components/heroslider2/heroslider2.js";
import { projectSpotlightData } from "../data/projectSpotlightData.js";

// product card
import { initPropertyCard } from "../components/propertycard/propertycard.js";
import { properties } from "../data/propertyData.js";


import { initForm } from "../components/form/form.js";

import { leadFormData }  from "../data/formData.js";


initHeroSlider({
    containerId: "hero-slider",
    slides: homeSliderData,
    interval: 6000,
});

initNavbar({
    containerId: "navbar",
    data: navbarData,
});

initProjectSpotlight({
    containerId: "project-spotlight",
    slides: projectSpotlightData,
    interval: 5000
});

// Property Listings
initPropertyCard({
    containerId: "property-grid",
    properties: properties,
    imageHeight: "280px",
    showPrice: true,
    showDetails: true,
    showBadge: true,
    showAgent: true,
    currency: "$",
    onCardClick: (property) => {
        console.log("Property clicked:", property.title);
    }
});

// Form 
initForm({
    containerId: "leadForm",

    data: leadFormData,

    onSubmit: (data) => {

        console.log(data);

        // API Call
    }
});