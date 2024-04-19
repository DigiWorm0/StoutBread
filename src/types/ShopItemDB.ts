import ShopItem from "./ShopItem.ts";

const BREAD_PRICE = "$3 Mini Loaf • $12 Regular Loaf";

const ShopItemDB: ShopItem[] = [
    {
        id: "BananaBread",
        name: "Banana 🍌",
        tagline: "Classic",
        shortDescription: "The signature flavor",
        description: "Indulge in the ultimate treat with our mouthwatering banana bread! Made fresh right here at UW-Stout, this moist and flavorful delight is the perfect pick-me-up for busy students. Packed with real bananas and love, it's a delicious slice of home away from home.",
        type: "Menu",
        imageIDs: ["BananaBread", "BananaBread-2"],
        price: BREAD_PRICE
    },
    {
        id: "BananaChocolateChip",
        name: "Banana Chocolate Chip 🍫",
        tagline: "Classic",
        shortDescription: "The signature flavor",
        description: "Savor the best of both worlds with our delectable Chocolate Chip Banana Bread. Freshly baked here on campus, it's a delightful fusion of rich chocolate chips and ripe bananas. The perfect on-the-go snack for any student's sweet cravings.",
        type: "Menu",
        imageIDs: ["BananaChocolateChip"],
        price: BREAD_PRICE
    },
    {
        id: "BananaWalnut",
        name: "Banana Walnut 🥜",
        tagline: "Season Favorite",
        shortDescription: "A nutty twist on the classic banana bread",
        description: "Experience a delightful crunch in every bite with our Banana Walnut Bread. It's a harmonious blend of ripe bananas and premium walnuts. A tasty tread for students and squirrels alike",
        type: "Menu",
        imageIDs: ["BananaWalnut", "BananaWalnut-2"],
        price: BREAD_PRICE
    },
    {
        id: "LemonPoppyseed",
        name: "Lemon Poppyseed 🍋",
        tagline: "Unique Flavor",
        shortDescription: "A refreshing twist on the classic bread",
        description: "Elevate your taste buds with our zesty Lemon Poppyseed Bread. Tangy lemon zest and delicate poppy seeds create a perfect balance of flavors and textures",
        type: "Menu",
        imageIDs: ["LemonPoppyseed", "LemonPoppyseed-2"],
        price: BREAD_PRICE,
    },
    {
        id: "LemonBlueberry",
        name: "Lemon Blueberry 🫐",
        tagline: "Unique Flavor",
        shortDescription: "A refreshing twist on the classic bread",
        type: "Menu",
        imageIDs: [],
        price: BREAD_PRICE,
    },
    {
        id: "CinnamonSugar",
        name: "Cinnamon Sugar 🍪",
        tagline: "Sugar & Sweet",
        shortDescription: "A sweet treat for any time of day",
        description: "Indulge in the comforting warmth of our Cinnamon Sugar Bread, baked fresh here at UW-Stout. A heavenly fusion of aromatic cinnamon and sweet sugar, it's the perfect pick-me-up for any time of day",
        type: "Menu",
        imageIDs: ["CinnamonSugar"],
        price: BREAD_PRICE,
    },
    {
        id: "Apple",
        name: "Apple Cinnamon 🍎",
        tagline: "Season Favorite",
        shortDescription: "A taste of fall in every bite",
        description: "For a limited time only, savor the seasonal delight of our Apple Cinnamon Bread, fresh from our campus ovens. Experience the warmth of autumn with every bite, as tender apples and aromatic cinnamon come together to create a taste that's as fleeting as the season itself. Don't miss out on this delectable treat!",
        type: "Menu",
        imageIDs: ["Apple", "Apple-2", "Apple-3"],
        price: BREAD_PRICE,
    },
    {
        id: "Pumpkin",
        name: "Pumpkin Cream Cheese 🎃",
        tagline: "Season Favorite",
        shortDescription: "A little halloween surprise",
        description: "Fall in love with the flavors of the season with our limited-time Pumpkin Cream Cheese Bread. Embrace the essence of autumn as rich, spiced pumpkin bread meets a luscious cream cheese swirl. It's a seasonal delight you won't want to miss – indulge in the taste of fall today!",
        type: "Menu",
        imageIDs: ["Pumpkin"],
        price: BREAD_PRICE,
    },
    {
        id: "Zucchini",
        name: "Zucchini 🥒",
        tagline: "New Flavor!",
        shortDescription: "A fruity taste of Wisconsin",
        description: "Zucchini Bread is NOW AVAILABLE! Y’all have asked and we delivered. Flavorful loaves baked with freshly shredded Zucchini. What are you waiting for? Order one now!",
        type: "Menu",
        imageIDs: ["Zucchini", "Zucchini-2"],
        price: BREAD_PRICE
    },
    {
        id: "ZucchiniChocolateChip",
        name: "Zucchini Chocolate Chip 🍫",
        tagline: "New Flavor!",
        shortDescription: "A fruity taste of Wisconsin",
        description: "Zucchini Bread is NOW AVAILABLE! Y’all have asked and we delivered. Flavorful loaves baked with freshly shredded Zucchini. What are you waiting for? Order one now!",
        type: "Menu",
        imageIDs: ["ZucchiniChocolateChip", "ZucchiniChocolateChip-2"],
        price: BREAD_PRICE
    },
    {
        id: "ZucchiniWalnut",
        name: "Zucchini Walnut 🥜",
        description: "Zucchini Bread is NOW AVAILABLE! Y’all have asked and we delivered. Flavorful loaves baked with freshly shredded Zucchini. What are you waiting for? Order one now!",
        tagline: "New Flavor!",
        shortDescription: "A fruity taste of Wisconsin",
        type: "Menu",
        imageIDs: [],
        price: BREAD_PRICE
    },

    // Apparel
    {
        id: "Snapback-Black",
        name: "Snap Back",
        tagline: "Represent Stout Bread",
        shortDescription: "The summer essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Apparel",
        imageIDs: ["Snapback"],
        price: "$25"
    },
    {
        id: "Snapback-Gray",
        name: "Snap Back",
        tagline: "Represent Stout Bread",
        shortDescription: "The summer essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        imageIDs: ["Snapback"],
        price: "$25"
    },

    {
        id: "Crewneck-M",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Apparel",
        imageIDs: ["Crewneck"],
        price: "$30"
    },
    {
        id: "Crewneck-L",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        imageIDs: ["Crewneck"],
        price: "$30"
    },
    {
        id: "Crewneck-XL",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        imageIDs: ["Crewneck"],
        price: "$30"
    },

    {
        id: "Beanie-Black",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Apparel",
        imageIDs: ["Beanie"],
        price: "$35"
    },
    {
        id: "Beanie-Gray",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        imageIDs: ["Beanie"],
        price: "$35"
    },
    {
        id: "Beanie-LightGray",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        imageIDs: ["Beanie"],
        price: "$35"
    }
];

export default ShopItemDB;