import ShopItem from "../types/ShopItem.ts";

const BREAD_PRICE = "$3 Mini Loaf • $12 Regular Loaf";
const FULL_LOAF_PRICE = "$14 Full Loaf Only";

const ShopItemDB: ShopItem[] = [
    {
        id: "BananaBread",
        name: "Banana 🍌",
        tagline: "Classic",
        shortDescription: "Our signature flavor",
        description: "Indulge in the ultimate treat with our mouthwatering banana bread! Made fresh right here at UW-Stout, this moist and flavorful delight is the perfect pick-me-up for busy students. Packed with real bananas and love, it's a delicious slice of home away from home.",
        type: "Menu",
        imageIDs: ["BananaBread"],
        price: BREAD_PRICE,
        nutritionFacts: true
    },
    {
        id: "BananaChocolateChip",
        name: "Banana Chocolate Chip 🍫",
        tagline: "Classic",
        shortDescription: "Our signature flavor",
        description: "Savor the best of both worlds with our delectable Chocolate Chip Banana Bread. Freshly baked here on campus, it's a delightful fusion of rich chocolate chips and ripe bananas. The perfect on-the-go snack for any student's sweet cravings.",
        type: "Menu",
        imageIDs: ["BananaChocChip", "secondary/BananaChocolateChip"],
        price: BREAD_PRICE,
        nutritionFacts: true
    },
    {
        id: "BananaWalnut",
        name: "Banana Walnut 🥜",
        tagline: "Season Favorite",
        shortDescription: "A nutty twist on the classic banana bread",
        description: "Experience a delightful crunch in every bite with our Banana Walnut Bread. It's a harmonious blend of ripe bananas and premium walnuts. A tasty tread for students and squirrels alike.",
        type: "Menu",
        imageIDs: ["BananaWalnut", "secondary/BananaWalnut", "secondary/BananaWalnut-2"],
        price: BREAD_PRICE,
        nutritionFacts: true
    },
    {
        id: "Zucchini",
        name: "Zucchini 🥒",
        tagline: "New Flavor!",
        shortDescription: "A fruity taste of Wisconsin",
        description: "Zucchini Bread is NOW AVAILABLE! Y’all have asked and we delivered. Flavorful loaves baked with freshly shredded Zucchini. What are you waiting for? Order one now!",
        type: "Menu",
        imageIDs: ["Zucchini", "Zucchini-Mini", "secondary/Zucchini"],
        price: BREAD_PRICE,
        nutritionFacts: true
    },
    {
        id: "ZucchiniChocolateChip",
        name: "Zucchini Chocolate Chip 🍫",
        tagline: "New Flavor!",
        shortDescription: "A fruity taste of Wisconsin",
        description: "Zucchini Bread is NOW AVAILABLE! Y’all have asked and we delivered. Flavorful loaves baked with freshly shredded Zucchini. What are you waiting for? Order one now!",
        type: "Menu",
        imageIDs: ["ZucchiniChocChip", "ZucchiniChocChip-Mini", "secondary/ZucchiniChocolateChip"],
        price: BREAD_PRICE,
        nutritionFacts: true
    },
    {
        id: "ZucchiniWalnut",
        name: "Zucchini Walnut 🥜",
        description: "Zucchini Bread is NOW AVAILABLE! Y’all have asked and we delivered. Flavorful loaves baked with freshly shredded Zucchini. What are you waiting for? Order one now!",
        tagline: "New Flavor!",
        shortDescription: "A fruity taste of Wisconsin",
        type: "Menu",
        imageIDs: ["ZucchiniWalnut"],
        price: BREAD_PRICE
    },
    {
        id: "LemonPoppyseed",
        name: "Lemon Poppyseed 🍋",
        tagline: "Unique Flavor",
        shortDescription: "A refreshing twist on the classic bread",
        description: "Elevate your taste buds with our zesty Lemon Poppyseed Bread. Tangy lemon zest and delicate poppy seeds create a perfect balance of flavors and textures.",
        type: "Menu",
        imageIDs: ["LemonPoppyseed", "LemonPoppyseed-Mini", "secondary/LemonPoppyseed", "secondary/LemonPoppyseed-2"],
        price: BREAD_PRICE,
        nutritionFacts: true
    },
    {
        id: "LemonBlueberry",
        name: "Lemon Blueberry 🫐",
        tagline: "Unique Flavor",
        shortDescription: "A refreshing twist on the classic bread",
        description: "A delightful blend of zesty lemon and juicy blueberries, this moist and flavorful bread is perfect for any occasion. With a soft, tender crumb and a burst of fruity freshness in every bite, it's great for breakfast, dessert, or a sweet snack. Drizzled with a light lemon glaze, this loaf brings a touch of brightness and sweetness that’s sure to please!",
        type: "Menu",
        imageIDs: ["LemonBlueberry-Mini"],
        price: BREAD_PRICE
    },
    {
        id: "CinnamonSugar",
        name: "Cinnamon Sugar 🍪",
        tagline: "Sugar & Sweet",
        shortDescription: "A sweet treat for any time of day",
        description: "Indulge in the comforting warmth of our Cinnamon Sugar Bread, baked fresh here at UW-Stout. A heavenly fusion of aromatic cinnamon and sweet sugar, it's the perfect pick-me-up for any time of day",
        type: "Menu",
        imageIDs: ["Cinnamon", "Cinnamon-Mini"],
        price: BREAD_PRICE,
        nutritionFacts: true
    },
    {
        id: "Apple",
        name: "Apple Cinnamon 🍎",
        tagline: "Season Favorite",
        shortDescription: "A taste of fall in every bite",
        description: "Savor the seasonal delight of our Apple Cinnamon Bread, fresh from our campus ovens. Experience the warmth of autumn with every bite, as tender apples and aromatic cinnamon come together to create a taste that's as fleeting as the season itself. Don't miss out on this delectable treat!",
        type: "Menu",
        imageIDs: ["AppleCinnamon", "AppleCinnamon-Mini", "secondary/Apple", "secondary/Apple-2", "secondary/Apple-3"],
        price: FULL_LOAF_PRICE,
        nutritionFacts: true
    },
    {
        id: "Pumpkin",
        name: "Pumpkin Cream Cheese 🎃",
        tagline: "Season Favorite",
        shortDescription: "A little halloween surprise",
        description: "Fall in love with the flavors of the season with our limited-time Pumpkin Cream Cheese Bread. Embrace the essence of autumn as rich, spiced pumpkin bread meets a luscious cream cheese swirl. It's a seasonal delight you won't want to miss – indulge in the taste of fall today!",
        type: "Menu",
        imageIDs: ["PumpkinCreamCheese", "PumpkinCreamCheese-Mini", "secondary/Pumpkin", "secondary/Pumpkin"],
        price: FULL_LOAF_PRICE,
        nutritionFacts: true
    },

    // Apparel
    {
        id: "Snapback-Black",
        name: "Snap Back",
        tagline: "Represent Stout Bread",
        shortDescription: "The summer essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Apparel",
        imageIDs: ["Snapback", "Snapback-Black", "Snapback-Gray"],
        price: "$25"
    },
    {
        id: "Snapback-Gray",
        name: "Snap Back",
        tagline: "Represent Stout Bread",
        shortDescription: "The summer essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        imageIDs: ["Snapback", "Snapback-Black", "Snapback-Gray"],
        price: "$25"
    },

    {
        id: "Beanie-Black",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Apparel",
        imageIDs: ["Beanie", "Beanie-Black", "Beanie-DarkGray", "Beanie-LightGray"],
        price: "$35"
    },
    {
        id: "Beanie-Gray",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        imageIDs: ["Beanie", "Beanie-Black", "Beanie-DarkGray", "Beanie-LightGray"],
        price: "$35"
    },
    {
        id: "Beanie-LightGray",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        imageIDs: ["Beanie", "Beanie-Black", "Beanie-DarkGray", "Beanie-LightGray"],
        price: "$35"
    },

    {
        id: "Crewneck-M",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Apparel",
        imageIDs: ["Crewneck", "Crewneck-2"],
        price: "$30"
    },
    {
        id: "Crewneck-L",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        imageIDs: ["Crewneck", "Crewneck-2"],
        price: "$30"
    },
    {
        id: "Crewneck-XL",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        imageIDs: ["Crewneck", "Crewneck-2"],
        price: "$30"
    },
];

export default ShopItemDB;