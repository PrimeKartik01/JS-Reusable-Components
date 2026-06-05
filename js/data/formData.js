export const leadFormData = {
    badge: "Premium Property",

    title: "Request A Site Visit",

    subtitle:
        "Get latest pricing, floor plans, payment plans and exclusive launch offers.",

    image:
        "./img/img2.webp",

    submitText: "Book Site Visit",

    fields: [
        {
            label: "Full Name",
            name: "name",
            type: "text",
            placeholder: "Enter your full name"
        },

        {
            label: "Phone Number",
            name: "phone",
            type: "tel",
            placeholder: "Enter your phone number"
        },

        {
            label: "Email Address",
            name: "email",
            type: "email",
            placeholder: "Enter your email"
        },

        {
            label: "Budget",
            name: "budget",
            type: "select",
            options: [
                "50 Lakh - 75 Lakh",
                "75 Lakh - 1 Cr",
                "1 Cr - 2 Cr",
                "2 Cr+"
            ]
        },

        {
            label: "Message",
            name: "message",
            type: "textarea",
            placeholder:
                "Tell us about your requirements"
        }
    ]
};