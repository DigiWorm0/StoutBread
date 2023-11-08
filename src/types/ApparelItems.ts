import ShopItem from "./ShopItem.ts";

const ApparelItems: ShopItem[] = [
    {
        id: "Cap",
        name: "Baseball Cap",
        tagline: "$25",
        shortDescription: "Represent StoutBread with the official cap!",
        types: [
            {
                id: "Black",
                name: "Black",
                customPrice: "$25",
                description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
                noNutrition: true,
            }
        ],
        images: [
            { id: "Cap", type: "Black" },
        ],
    },
    {
        id: "Beanie",
        name: "Carhartt Beanie",
        tagline: "$35",
        shortDescription: "Stay warm for the winter with our new Beanie!",
        types: [
            {
                id: "Black",
                name: "Black",
                customPrice: "$35",
                description: "WE HAVE MERCH! Represent Stout Bread with the official beanies from Carhartt. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
                noNutrition: true,
            }
        ],
        images: [
            { id: "Beanie", type: "Black" },
        ],
    },
];

export default ApparelItems;