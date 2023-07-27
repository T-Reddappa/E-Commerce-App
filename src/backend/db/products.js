import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "SLIM FIT CASUAL SHIRT",
    brand: "WROGN",
    price: 2000,
    color: "navy",
    rating: "4",
    size: ["S", "M", "L"],
    category: "Men",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22988256/2023/5/8/33c6069e-2134-4c8f-8ccf-ff50e2e11c531683526840922-FUBAR-Men-Blue-Slim-Fit-Opaque-Casual-Shirt-8881683526840725-2.jpg",
  },
  {
    _id: uuid(),
    name: "Printed Causal shirt",
    brand: "WROGN",
    price: 3000,
    rating: "3",
    size: ["S", "M", "L"],
    category: "Men",
    color: "black",
    imgurl:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/10/10/f0e6794f-29af-473b-9376-fd53f3f76df11570703044382-1.jpg",
  },

  {
    _id: uuid(),
    name: "Self-Design Slim Fit Pure Cotton Casual",
    brand: "WROGN",
    price: 4000,
    rating: "4",
    color: "rgb(118, 207, 203)",
    size: ["S", "M", "L"],
    category: "Men",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16217590/2022/1/28/a9969fc1-ce48-424b-9582-4dc4bc5ef4d81643358591927-WROGN-Men-Shirts-6461643358591333-1.jpg",
  },
  {
    _id: uuid(),
    name: "Slim Fit Tartan Checks Casual Shirt",
    brand: "WROGN",
    price: 3000,
    rating: "4",
    color: "white",
    size: ["S", "M", "L"],
    category: "Men",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22146962/2023/5/25/99280c72-289f-4f8e-aff0-b267e17f60041684999772660-WROGN-Men-Shirts-6981684999772222-1.jpg",
  },
  {
    _id: uuid(),
    name: "Slim Fit Striped Sustainable Casual Shirt",
    brand: "Moda Rapido",
    price: 3000,
    color: "Coffee Brown",
    rating: "4",
    color: "#653E36",
    size: ["S", "M", "L"],
    category: "Men",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12123428/2020/9/8/d37c3624-9ea7-4f6a-9754-fb9be48776211599549841073-Moda-Rapido-Men-Shirts-9381599549838827-1.jpg",
  },
  {
    _id: uuid(),
    name: "Men Pure Cotton Slim Fit Casual Shirt",
    brand: "Louis Philippe Sport",
    price: 2500,
    color: "Pink",
    rating: "4",
    size: ["M", "L"],
    category: "Men",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12848662/2020/11/21/257f8058-cf65-476f-aa25-c00fd3ae4e171605953199562-Louis-Philippe-Jeans-Men-Shirts-4951605953197671-1.jpg",
  },
  {
    _id: uuid(),
    name: "Floral Print Tiered Midi Fit & Flare Dress with Ruffles",
    brand: "Antheaa",
    price: 2500,
    color: "orange",
    rating: "4",
    size: ["S", "M"],
    category: "Women",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
  },
  {
    _id: uuid(),
    name: "Mandarin Collar Roll-Up Sleeves Straight Kurta",
    brand: "GERUA",
    price: 1500,
    color: "Grey",
    rating: "5",
    size: ["M", "L"],
    category: "Women",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2526076/2018/3/9/11520583817821-GERUA-Women-Kurtas-5741520583817647-1.jpg",
  },
  {
    _id: uuid(),
    name: "Women Coral Solid Straight Kurta",
    brand: "Vishudh",
    price: 1500,
    color: "Coral ",
    rating: "4",
    size: ["M", "L"],
    category: "Women",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2307694/2019/2/6/49cc0b17-4d24-4de5-b89c-279210d833861549451468448-Vishudh-Women-Coral-Solid-Straight-Kurta-2731549451466702-1.jpg",
  },
  {
    _id: uuid(),
    name: "Women Blue Floral Smocked Dress",
    brand: "plusS",
    price: 2000,
    color: "blueviolet",
    rating: "5",
    size: ["S", "M", "L"],
    category: "Women",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15598322/2021/11/17/963b3040-bc9e-420c-aee7-3f4381a6d0061637141563008-plusS-Women-Dresses-681637141562677-1.jpg",
  },
  {
    _id: uuid(),
    name: "White Printed Polo Collar Slim Fit T-shirt",
    brand: "U.S. Polo Assn.",
    price: 1500,
    color: "white",
    rating: "5",
    size: ["S", "M", "L"],
    category: "Men",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19023196/2022/9/7/aa3d2d96-b5c6-44f1-ad6b-4a08a5a1587f1662549269625-U-S-Polo-Assn-Men-White-Printed-Polo-Collar-Slim-Fit-T-shirt-1.jpg",
  },
  {
    _id: uuid(),
    name: "Men Green Polo Collar Pure Cotton Slim Fit T-shirt",
    brand: "U.S. Polo Assn.",
    price: 2000,
    color: "lightgreen",
    rating: "5",
    size: ["M", "L"],
    category: "Men",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19445994/2022/9/22/b85799e4-e6e3-4269-8fd5-8ac0618b48271663849299802-U-S-Polo-Assn-Men-Green-Polo-Collar-Pure-Cotton-Slim-Fit-T-s-1.jpg",
  },
  {
    _id: uuid(),
    name: " Pure Cotton Super Slim Fit Tartan Checks Casual Shirt",
    brand: "Louis Philippe Jeans",
    price: 3500,
    color: "navy",
    rating: "5",
    size: ["M", "L"],
    category: "Men",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21467718/2023/1/24/307f1b53-502f-4b54-8c04-ed77fbf84a711674537711059-Louis-Philippe-Jeans-Men-Shirts-3871674537710509-1.jpg",
  },
  {
    _id: uuid(),
    name: "Women Beige Floral Yoke Design Straight Kurta",
    brand: "KALINI",
    price: 2500,
    color: "beige ",
    rating: "4",
    size: ["S", "M", "L"],
    category: "Women",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
  },

  {
    _id: uuid(),
    name: "Purple Ethnic Motifs Embroidered Mirror Work Kurta",
    brand: "SINGNI",
    price: 3000,
    color: "purple",
    rating: "4",
    size: ["S", "M", "L"],
    category: "Women",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20695836/2022/11/10/ba1724c2-c606-481c-a0ca-63424b61a8661668078028270WomensRayonPrintedEmbroideredKurtaWithPantAndDupatta1.jpg",
  },
  {
    _id: uuid(),
    name: "Women Pink Floral Printed Kurta ",
    brand: "KALINI",
    price: 3000,
    color: "pink",
    rating: "4",
    size: ["S", "M", "L"],
    category: "Women",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg",
  },
  {
    _id: uuid(),
    name: "Women Maroon Embroidered Yoke Design Kurta ",
    brand: "Varanga",
    price: 2500,
    color: "maroon",
    rating: "3",
    size: ["S", "M", "L"],
    category: "Women",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17932254/2022/5/12/4be8baea-c808-42d5-8f70-0db0f10bf3a61652343454751-Varanga-Women-Kurta-Sets-3301652343454044-1.jpg",
  },
  //kids
  {
    _id: uuid(),
    name: "Floral Printed Pure Cotton Fit & Flare Dress",
    brand: "Marks & Spencer",
    price: 1500,
    color: "lightblue",
    rating: "3",
    size: ["S", "M"],
    category: "Kids",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22832636/2023/4/20/7801f72a-4c3a-4de5-bb33-768e7d18372d1682004915454Dresses1.jpg",
  },
  {
    _id: uuid(),
    name: "Navy Blue Colourblocked Layered Satin Dress",
    brand: "Pink Chick",
    price: 2000,
    color: "navy",
    rating: "5",
    size: ["S", "M"],
    category: "Kids",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16491076/2021/12/13/92092f8f-921e-4d52-8b0c-d9b04bb72ebd1639372865809PinkChickNavyBlueColourblockedLayeredSatinDress1.jpg",
  },
  {
    _id: uuid(),
    name: "Turquoise Blue Solid Round Neck Net Dress",
    brand: "Aarika",
    price: 2000,
    color: "lightblue",
    rating: "5",
    size: ["S", "M"],
    category: "Kids",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17844398/2022/4/11/2667f7e0-7e9b-4d12-927c-33bbbe92c9b51649658757793AarikaTurquoiseBlueNetDress1.jpg",
  },
  {
    _id: uuid(),
    name: "Schiffli Embroidered Lace Insert Tiered Dress",
    brand: "HERE&NOW",
    price: 2000,
    color: "lightpink",
    rating: "4",
    size: ["S", "M"],
    category: "Kids",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21808026/2023/7/17/c4f2c924-3e8c-4898-bee8-b45a74f8854b1689588352417-HERENOW-Schiffli-Embroidered-Lace-Insert-Tiered-Dress-489168-6.jpg",
  },
  {
    _id: uuid(),
    name: "Embellished Shoulder Straps Sequined Fit & Flare Dress",
    brand: "Pink Chick",
    price: 3000,
    color: "maroon",
    rating: "4",
    size: ["S", "M"],
    category: "Kids",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23688636/2023/6/20/bc20393f-d4cb-4c54-9b7f-4967fef59a661687250536474PinkChickBurgundyPuffSleeveFitFlareDress1.jpg",
  },
  {
    _id: uuid(),
    name: "Sea Green & Purple Embellished Colourblocked Net Layered Gown",
    brand: "Pink Chick",
    price: 3000,
    color: "seagreen",
    rating: "4",
    size: ["S", "M", "L"],
    category: "Kids",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20760870/2022/11/15/3d130fcc-1a00-4dd5-84b1-8f37a6400d4e1668518522034Dresses1.jpg",
  },
  {
    _id: uuid(),
    name: "Striped Cotton Midi Dress With Printed Shrug",
    brand: "Pink Chick",
    price: 3000,
    color: "yellow",
    rating: "5",
    size: ["S", "M", "L"],
    category: "Kids",
    imgurl:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17775244/2022/4/6/efb7e9b0-470b-4bb5-99a7-8186f4a122ea1649224516381pspeachesYellowFloralMidiDress1.jpg",
  },
];
