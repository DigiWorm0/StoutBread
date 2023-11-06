import ShopItem from "./ShopItem.ts";

const MenuItems: ShopItem[] = [
    {
        id: "BananaBread",
        name: "Banana 🍌",
        tagline: "Classic",
        shortDescription: "The signature flavor",
        types: [
            {
                id: "BananaBread",
                name: "Plain 🍞",
                description: "Indulge in the ultimate treat with our mouthwatering banana bread! Made fresh right here at UW-Stout, this moist and flavorful delight is the perfect pick-me-up for busy students. Packed with real bananas and love, it's a delicious slice of home away from home.",
            },
            {
                id: "ChocolateChip",
                name: "Chocolate Chip 🍫",
                description: "Savor the best of both worlds with our delectable Chocolate Chip Banana Bread. Freshly baked here on campus, it's a delightful fusion of rich chocolate chips and ripe bananas. The perfect on-the-go snack for any student's sweet cravings.",
            }
        ],
        images: [
            { id: "BananaBread", type: "BananaBread" },
            { id: "ChocolateChip", type: "ChocolateChip" }
        ],
    },
    {
        id: "GlutenFree",
        name: "Gluten-Free Banana ⛔",
        tagline: "Diet Friendly",
        shortDescription: "The signature flavor, now Gluten-Free",
        types: [
            {
                id: "GlutenFree",
                name: "Plain 🍞",
                customPrice: "$12 Whole Loaf Only",
                description: "For those with gluten allergies, we offer a gluten free option. Our gluten free banana bread is made with locally sourced bananas and baked to perfection. It's the perfect snack for any time of day.",
            },
            {
                id: "GlutenFreeChocolateChip",
                name: "Chocolate Chip 🍫",
                customPrice: "$12 Whole Loaf Only",
                description: "For those with gluten allergies, we offer a gluten free option. Our gluten free, chocolate chip banana bread is made with fresh chocolate chips and locally sourced bananas. It's the perfect snack for any time of day.",
            }
        ],
        images: [
            { id: "GlutenFree", type: "GlutenFree" },
            { id: "GlutenFreeChocolateChip", type: "GlutenFreeChocolateChip" }
        ],
    },
    {
        id: "BananaWalnut",
        name: "Banana Walnut 🥜",
        tagline: "Season Favorite",
        shortDescription: "A nutty twist on the classic banana bread",
        types: [
            {
                id: "BananaWalnut",
                name: "Walnut 🌰",
                description: "Experience a delightful crunch in every bite with our Banana Walnut Bread. It's a harmonious blend of ripe bananas and premium walnuts. A tasty tread for students and squirrels alike.",
            },
        ],
        images: [
            { id: "BananaWalnut", type: "BananaWalnut" },
            { id: "BananaWalnut-2", type: "BananaWalnut" },
        ],
    },
    {
        id: "LemonPoppyseed",
        name: "Lemon Poppyseed 🍋",
        tagline: "Unique Flavor",
        shortDescription: "A refreshing twist on the classic bread",
        types: [
            {
                id: "LemonPoppyseed",
                name: "Lemon Poppyseed 🍋",
                description: "Elevate your taste buds with our zesty Lemon Poppyseed Bread. Tangy lemon zest and delicate poppy seeds create a perfect balance of flavors and textures.",
            }
        ],
        images: [
            { id: "LemonPoppyseed", type: "LemonPoppyseed" },
            { id: "LemonPoppyseed-2", type: "LemonPoppyseed" },
        ],
    },
    {
        id: "CinnamonSugar",
        name: "Cinnamon Sugar 🍪",
        tagline: "Sugar & Sweet",
        shortDescription: "A sweet treat for any time of day",
        types: [
            {
                id: "CinnamonSugar",
                name: "Cinnamon Sugar 🍪",
                description: "Indulge in the comforting warmth of our Cinnamon Sugar Bread, baked fresh here at UW-Stout. A heavenly fusion of aromatic cinnamon and sweet sugar, it's the perfect pick-me-up for any time of day.",
            }
        ],
        images: [
            { id: "CinnamonSugar", type: "CinnamonSugar" },
        ],
    },
    {
        id: "Apple",
        name: "Apple Cinnamon 🍎",
        tagline: "Season Favorite",
        shortDescription: "A taste of fall in every bite",
        types: [
            {
                id: "Apple",
                name: "Apple Cinnamon 🍎",
                customPrice: "$14 Whole Loaf Only",
                description: "For a limited time only, savor the seasonal delight of our Apple Cinnamon Bread, fresh from our campus ovens. Experience the warmth of autumn with every bite, as tender apples and aromatic cinnamon come together to create a taste that's as fleeting as the season itself. Don't miss out on this delectable treat!",
            }
        ],
        images: [
            { id: "Apple", type: "Apple" },
            { id: "Apple-2", type: "Apple" },
            { id: "Apple-3", type: "Apple" },
        ],
    },
    {
        id: "Pumpkin",
        name: "Pumpkin Cream Cheese 🎃",
        tagline: "Season Favorite",
        shortDescription: "A little halloween surprise",
        types: [
            {
                id: "Pumpkin",
                name: "Pumpkin Cream Cheese 🎃",
                customPrice: "$14 Whole Loaf Only",
                description: "Fall in love with the flavors of the season with our limited-time Pumpkin Cream Cheese Bread. Embrace the essence of autumn as rich, spiced pumpkin bread meets a luscious cream cheese swirl. It's a seasonal delight you won't want to miss – indulge in the taste of fall today!",
            }
        ],
        images: [
            { id: "Pumpkin", type: "Pumpkin" },
        ],
    },
    {
        id: "Zucchini",
        name: "Zucchini 🥒",
        tagline: "New Flavor!",
        shortDescription: "A fruity taste of Wisconsin",
        types: [
            {
                id: "Zucchini",
                name: "Zucchini 🥒",
                customPrice: "$4 Mini • $14 Regular Loaf",
                description: "Zucchini Bread is NOW AVAILABLE! Y’all have asked and we delivered. Flavorful loaves baked with freshly shredded Zucchini. What are you waiting for? Order one now!",
            },
            {
                id: "ZucchiniChocolateChip",
                name: "Zucchini Chocolate Chip 🍫",
                customPrice: "$4 Mini • $14 Regular Loaf",
                description: "Zucchini Bread is NOW AVAILABLE! Y’all have asked and we delivered. Flavorful loaves baked with freshly shredded Zucchini. What are you waiting for? Order one now!",
            }
        ],
        images: [
            { id: "Zucchini", type: "Zucchini" },
            { id: "Zucchini-2", type: "Zucchini" },
            { id: "ZucchiniChocolateChip", type: "ZucchiniChocolateChip" },
            { id: "ZucchiniChocolateChip-2", type: "ZucchiniChocolateChip" },
        ],
    },
];

export default MenuItems;