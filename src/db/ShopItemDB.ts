import ShopItem from "../types/ShopItem.ts";

const BREAD_PRICE = "$4 Mini Loaf • $14 Regular Loaf";
const SPECIALTY_BREAD_PRICE = "$5 Mini Loaf • $15 Regular Loaf";

const ShopItemDB: ShopItem[] = [
    {
        id: "BananaBread",
        name: "Banana 🍌",
        tagline: "Classic",
        shortDescription: "Our signature flavor",
        description: "Indulge in the ultimate treat with our mouthwatering banana bread! Made fresh right here at UW-Stout, this moist and flavorful delight is the perfect pick-me-up for busy students. Packed with real bananas and love, it's a delicious slice of home away from home.",
        type: "Menu",
        thumbnailID: "Banana/Banana_Thumb",
        imageIDs: [
            "Banana/Banana1_Vignette",
            "Banana/Banana2_Vignette",
            "Banana/Banana3_Vignette",
            "Banana/Banana4_Vignette",
            "Banana/Banana5_Vignette"
        ],
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
        thumbnailID: "Ban. Choc. Chip/BanChocChip_Thumb",
        imageIDs: [
            "Ban. Choc. Chip/BanChocChip1_Vignette",
            "Ban. Choc. Chip/BanChocChip2_Vignette",
            "Ban. Choc. Chip/BanChocChip3_Vignette",
            "Ban. Choc. Chip/BanChocChip4_Vignette",
            "Ban. Choc. Chip/BanChocChip5_Vignette",
            "Ban. Choc. Chip/BanChocChip6_Vignette",
            "Ban. Choc. Chip/BanChocChip7_Vignette"
        ],
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
        thumbnailID: "Walnut/Walnut_Thumb",
        imageIDs: [
            "Walnut/Walnut1_Vignette",
            "Walnut/Walnut2_Vignette",
            "Walnut/Walnut3_Vignette",
            "Walnut/Walnut4_Vignette",
            "Walnut/Walnut5_Vignette",
            "Walnut/Walnut6_Vignette",
            "Walnut/Walnut7_Vignette",
            "Walnut/Walnut8_Vignette",
            "Walnut/Walnut9_Vignette",
            "Walnut/Walnut10_Vignette"
        ],
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
        thumbnailID: "Zucchini/Zucchini_Thumb",
        imageIDs: [
            "Zucchini/Zucchini1_Vignette",
            "Zucchini/Zucchini2_Vignette",
            "Zucchini/Zucchini3_Vignette",
            "Zucchini/Zucchini4_Vignette",
            "Zucchini/Zucchini5_Vignette"
        ],
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
        thumbnailID: "Zucchini Choc. Chip/ZucchiniChocChip_Thumb",
        imageIDs: [
            "Zucchini Choc. Chip/ZucchiniChocChip1_Vignette",
            "Zucchini Choc. Chip/ZucchiniChocChip2_Vignette",
            "Zucchini Choc. Chip/ZucchiniChocChip3_Vignette",
            "Zucchini Choc. Chip/ZucchiniChocChip4_Vignette",
            "Zucchini Choc. Chip/ZucchiniChocChip5_Vignette",
        ],
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
        thumbnailID: "Zucchini Walnut/ZucchiniWalnut_Thumb",
        imageIDs: [
            "Zucchini Walnut/ZucchiniWalnut1_Vignette",
            "Zucchini Walnut/ZucchiniWalnut2_Vignette",
            "Zucchini Walnut/ZucchiniWalnut3_Vignette",
            "Zucchini Walnut/ZucchiniWalnut4_Vignette",
            "Zucchini Walnut/ZucchiniWalnut5_Vignette",
        ],
        price: BREAD_PRICE
    },
    {
        id: "LemonPoppyseed",
        name: "Lemon Poppyseed 🍋",
        tagline: "Unique Flavor",
        shortDescription: "A refreshing twist on the classic bread",
        description: "Elevate your taste buds with our zesty Lemon Poppyseed Bread. Tangy lemon zest and delicate poppy seeds create a perfect balance of flavors and textures.",
        type: "Menu",
        thumbnailID: "Lemon Poppyseed/LemonPoppyseed_Thumb",
        imageIDs: [
            "Lemon Poppyseed/LemonPoppyseed1_Vignette",
            "Lemon Poppyseed/LemonPoppyseed2_Vignette",
            "Lemon Poppyseed/LemonPoppyseed3_Vignette",
            "Lemon Poppyseed/LemonPoppyseed4_Vignette",
            "Lemon Poppyseed/LemonPoppyseed5_Vignette"
        ],
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
        thumbnailID: "Lemon Blueberry/LemonBlueberry_Thumb",
        imageIDs: [
            "Lemon Blueberry/LemonBlueberry1_Vignette",
            "Lemon Blueberry/LemonBlueberry2_Vignette",
            "Lemon Blueberry/LemonBlueberry3_Vignette",
            "Lemon Blueberry/LemonBlueberry4_Vignette",
            "Lemon Blueberry/LemonBlueberry5_Vignette"
        ],
        price: BREAD_PRICE
    },
    {
        id: "CinnamonSugar",
        name: "Cinnamon Sugar 🍪",
        tagline: "Sugar & Sweet",
        shortDescription: "A sweet treat for any time of day",
        description: "Indulge in the comforting warmth of our Cinnamon Sugar Bread, baked fresh here at UW-Stout. A heavenly fusion of aromatic cinnamon and sweet sugar, it's the perfect pick-me-up for any time of day",
        type: "Menu",
        thumbnailID: "Cinnamon Sugar/CinnSugar_Thumb",
        imageIDs: [
            "Cinnamon Sugar/CinnSugar1_Vignette",
            "Cinnamon Sugar/CinnSugar2_Vignette",
            "Cinnamon Sugar/CinnSugar3_Vignette",
            "Cinnamon Sugar/CinnSugar4_Vignette",
            "Cinnamon Sugar/CinnSugar5_Vignette",
            "Cinnamon Sugar/CinnSugar6_Vignette",
            "Cinnamon Sugar/CinnSugar7_Vignette"
        ],
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
        thumbnailID: "Apple Cinnamon/AppleCinnamon_Thumb",
        imageIDs: [
            "Apple Cinnamon/AppleCinnamon1_Vignette",
            "Apple Cinnamon/AppleCinnamon2_Vignette",
            "Apple Cinnamon/AppleCinnamon3_Vignette",
            "Apple Cinnamon/AppleCinnamon4_Vignette",
            "Apple Cinnamon/AppleCinnamon5_Vignette"
        ],
        price: SPECIALTY_BREAD_PRICE,
        nutritionFacts: true
    },
    {
        id: "Pumpkin",
        name: "Pumpkin Cream Cheese 🎃",
        tagline: "Season Favorite",
        shortDescription: "A little halloween surprise",
        description: "Fall in love with the flavors of the season with our limited-time Pumpkin Cream Cheese Bread. Embrace the essence of autumn as rich, spiced pumpkin bread meets a luscious cream cheese swirl. It's a seasonal delight you won't want to miss – indulge in the taste of fall today!",
        type: "Menu",
        thumbnailID: "Pumpkin Cream Cheese/PumpkinCreamCheese_Thumb",
        imageIDs: [
            "Pumpkin Cream Cheese/PumpkinCreamCheese1_Vignette",
            "Pumpkin Cream Cheese/PumpkinCreamCheese2_Vignette",
            "Pumpkin Cream Cheese/PumpkinCreamCheese3_Vignette",
            "Pumpkin Cream Cheese/PumpkinCreamCheese4_Vignette",
            "Pumpkin Cream Cheese/PumpkinCreamCheese5_Vignette"
        ],
        price: SPECIALTY_BREAD_PRICE,
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
        thumbnailID: "Snapbacks/Snapback-Thumb",
        imageIDs: [
            "Snapbacks/Snapback",
            "Snapbacks/Snapback-Black",
            "Snapbacks/Snapback-Gray"
        ],
        price: "$25"
    },
    {
        id: "Snapback-Gray",
        name: "Snap Back",
        tagline: "Represent Stout Bread",
        shortDescription: "The summer essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        thumbnailID: "Snapbacks/Snapback-Thumb",
        imageIDs: [
            "Snapbacks/Snapback",
            "Snapbacks/Snapback-Black",
            "Snapbacks/Snapback-Gray"
        ],
        price: "$25"
    },

    {
        id: "Beanie-Black",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Apparel",
        thumbnailID: "Beanies/Beanie-Thumb",
        imageIDs: [
            "Beanies/Beanie",
            "Beanies/Beanie-Black",
            "Beanies/Beanie-DarkGray",
            "Beanies/Beanie-LightGray"
        ],
        price: "$35"
    },
    {
        id: "Beanie-Gray",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        thumbnailID: "Beanies/Beanie-Thumb",
        imageIDs: [
            "Beanies/Beanie",
            "Beanies/Beanie-Black",
            "Beanies/Beanie-DarkGray",
            "Beanies/Beanie-LightGray"
        ],
        price: "$35"
    },
    {
        id: "Beanie-LightGray",
        name: "Beanie",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        thumbnailID: "Beanies/Beanie-Thumb",
        imageIDs: [
            "Beanies/Beanie",
            "Beanies/Beanie-Black",
            "Beanies/Beanie-DarkGray",
            "Beanies/Beanie-LightGray"
        ],
        price: "$35"
    },

    {
        id: "Crewneck-M",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Apparel",
        thumbnailID: "Crewnecks/Crewneck-Thumb",
        imageIDs: [
            "Crewnecks/Crewneck",
            "Crewnecks/Crewneck-2"
        ],
        price: "$30"
    },
    {
        id: "Crewneck-L",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        thumbnailID: "Crewnecks/Crewneck-Thumb",
        imageIDs: [
            "Crewnecks/Crewneck",
            "Crewnecks/Crewneck-2"
        ],
        price: "$30"
    },
    {
        id: "Crewneck-XL",
        name: "Crewneck Sweatshirt",
        tagline: "Stay warm",
        shortDescription: "The winter essential",
        description: "WE HAVE MERCH! Represent Stout Bread with the official baseball cap. All profits are donated to the Blue Devil Robotics club on campus. Pickup or Delivery is also available.",
        type: "Hidden",
        thumbnailID: "Crewnecks/Crewneck-Thumb",
        imageIDs: [
            "Crewnecks/Crewneck",
            "Crewnecks/Crewneck-2"
        ],
        price: "$30"
    },
];

export default ShopItemDB;