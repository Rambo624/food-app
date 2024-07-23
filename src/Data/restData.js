let restuarantlist = [{
    "id": "332908",
    "name": "Dhevakeeyam Ootusaala",
    "cloudinaryImageId": "bu6v0etiaadrdmx8vhfa",
    "locality": "Jawahar Nagar",
    "areaName": "Kadavanthra",
    "costForTwo": "₹300 for two", "avgRating": 4.6
}, {
    "id": "710426",
    "name": "Chicking",
    "cloudinaryImageId": "1d90c451e0c6efdc86d4648749b05bb5",
    "locality": "Jacob Road",
    "areaName": "Fort Kochi",
    "costForTwo": "₹499 for two",
    "avgRating": 4.3
}, {
    "id": "867059",
    "name": "Al Taza",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/20/adda8638-8f8c-477c-bc47-cc925ac29e66_4290b607-7fc5-473c-8d52-3e0336029b18.jpg",
    "locality": "Thoppumpady",
    "areaName": "Fort Kochi",
    "costForTwo": "₹399 for two",
    "avgRating": 4.7
}, {
    "id": "403519",
    "name": "The Burger Junction",
    "cloudinaryImageId": "d5730c1b1206b4ba30548c07e0e963c3",
    "locality": "Panampilly Nagar",
    "areaName": "Panampilly Nagar",
    "costForTwo": "₹500 for two",
    "avgRating": 4.6
}, {
    "id": "55090",
    "name": "Burger Spot",
    "cloudinaryImageId": "bmhjnmemuhnsxz4ecmxj",
    "locality": "GCDA Shopping Complex",
    "areaName": "Panampilly Nagar",
    "costForTwo": "₹300 for two",
    "avgRating": 4.6
}, {
    "id": "233804",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_233804.JPG",
    "locality": "MG Road",
    "areaName": "Ravipuram",
    "costForTwo": "₹400 for two",
    "avgRating": 4.4
}, {
    "id": "788766",
    "name": "Seoul Fried Chicken",
    "cloudinaryImageId": "ea50fa13bd06aa3abdd0176addd90d93",
    "locality": "Eranakulam Circle",
    "areaName": "Panampilly Nagar",
    "costForTwo": "₹300 for two",
    "avgRating": 3.9
}, {
    "id": "63856",
    "name": "Rolls n Fries",
    "cloudinaryImageId": "7deb8c719f7937fb458605e5606b24d8",
    "locality": "Kochangadi",
    "areaName": "Fort Kochi",
    "costForTwo": "₹200 for two",
    "avgRating": 4.3
}]



export let restMenu = [
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
        "title": "South Indian",
        "categories": [{
            "title": "Dosa",
            "itemCards": [{
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046649",
                        "name": "Egg Roast Dosa",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with egg filling spreadout served with 2 types of flavourful chutney and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/51380749-72a4-4029-b9e0-4f5e4de6592f_abbb8a70-dcf0-4a78-9a7a-d61bc9915737.jpeg",
                        "inStock": 1,
                        "price": 14000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "NONVEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.9",
                                "ratingCount": "12 ratings",
                                "ratingCountV2": "12"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046652",
                        "name": "Ghee Roast",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with generous ghee served with 2 types of flavorful chutney and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/494da464-83e6-4ba5-af14-dbe3c1b5518b_96852a16-3d1e-46f5-ab1b-05de18bf4b36.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 12000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {
                            "text": "Bestseller",
                            "textColor": "#ffffff",
                            "topBackgroundColor": "#d53d4c",
                            "bottomBackgroundColor": "#b02331"
                        },
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "isBestseller": true,
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.7",
                                "ratingCount": "18 ratings",
                                "ratingCountV2": "18"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046671",
                        "name": "Set Dosa",
                        "category": "South Indian",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/5c9b3796-55bb-422e-af3b-e571cadda3ff_6679aa74-488d-4a9f-a650-8df644b0040f.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 8000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {
                            "text": "Bestseller",
                            "textColor": "#ffffff",
                            "topBackgroundColor": "#d53d4c",
                            "bottomBackgroundColor": "#b02331"
                        },
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "isBestseller": true,
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "4.3",
                                "ratingCount": "18 ratings",
                                "ratingCountV2": "18"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046653",
                        "name": "Masala Dosa",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with masala filling served with 2 types of flavorful chutney and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 13000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {
                            "text": "Bestseller",
                            "textColor": "#ffffff",
                            "topBackgroundColor": "#d53d4c",
                            "bottomBackgroundColor": "#b02331"
                        },
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "isBestseller": true,
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "4.1",
                                "ratingCount": "12 ratings",
                                "ratingCountV2": "12"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046648",
                        "name": "Egg Dosa",
                        "category": "South Indian",
                        "description": "Soft Dosa with an egg on top served with 2 types of flavourful chutney and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/4db8f32d-71b8-447f-94c7-4f26dbdc8226_7eb7f1db-4ea7-4691-a561-2b30ae7d73d0.jpeg",
                        "inStock": 1,
                        "price": 13000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "NONVEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046656",
                        "name": "Onion Podi Oothappam",
                        "category": "South Indian",
                        "description": "Onion Oothappam with gunpowder served with 2 types of flavourful chutney and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/f24a2b73-776d-4e96-85bc-6a00858c0c0f_571dc342-6479-4763-ad0e-8b6dbc596ea9.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 13000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "4.1",
                                "ratingCount": "7 ratings",
                                "ratingCountV2": "7"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046660",
                        "name": "Plain Roast",
                        "category": "South Indian",
                        "description": "Crispy thin dosa served with 2 types of flavorful chutney and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/b3cd8ab1-3dad-48ca-b95a-be3870225387_3b8c5bac-05f3-4a8f-b432-2e61797645b2.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 9000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "4.0",
                                "ratingCount": "10 ratings",
                                "ratingCountV2": "10"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046654",
                        "name": "Onion Ghee Podi Masala Dosa",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with onion, gunpowder and masala filling served with 2 types of flavorful chutney and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 15000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046666",
                        "name": "Podi Onion Cheese Masala Dosa",
                        "category": "South Indian",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 20000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046655",
                        "name": "Onion Oothappam",
                        "category": "South Indian",
                        "description": "Onion Oothappam served with 2 types of flavourful chutney and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/c0011333-1199-4d70-a8b8-41fd2691f94a_d0b3216f-db9b-453c-9911-cbcf50debcf8.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 12000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "4.3",
                                "ratingCount": "3 ratings",
                                "ratingCountV2": "3"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046664",
                        "name": "Podi Ghee Masala Dosa",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with our gunpowder and masala filling served with 2 types of flavorful chutney and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 15000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.7",
                                "ratingCount": "3 ratings",
                                "ratingCountV2": "3"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046661",
                        "name": "Podi Cheese Masala Dosa",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with cheese, gunpowder and masala filling served with 2 types of falvourful chutney and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 18000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.2",
                                "ratingCount": "3 ratings",
                                "ratingCountV2": "3"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046665",
                        "name": "Podi Ghee Roast",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with gunpowder and generous ghee served with 2 types of flavourful chutney and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 13000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046662",
                        "name": "Podi Ghee Cheese Masala Dosa",
                        "category": "South Indian",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 19000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046650",
                        "name": "Ghee Masala Dosa",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with masala filling served with 2 types of flavorful chutney and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 14000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046646",
                        "name": "Cheese Dosa",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with cheese filling served with 2 types of falvourful chutney and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 14000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046647",
                        "name": "Cheese Masala Dosa",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with cheese and masala filling served with 2 types of falvourful chutney and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 17000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046659",
                        "name": "Open Butter Masala Dosa",
                        "category": "South Indian",
                        "description": "An open presentation of Butter masala dosa served with 2 types of flavourful chutney and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/bf145a7e-bbae-4d07-9e80-f110b1fe9eb3_da74ca02-b600-4239-96af-b6e54976e4a0.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 13000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.7",
                                "ratingCount": "3 ratings",
                                "ratingCountV2": "3"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046672",
                        "name": "Tomato Cheese Dosa",
                        "category": "South Indian",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 15000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046651",
                        "name": "Ghee Onion Podi Oothappam",
                        "category": "South Indian",
                        "description": "Ghee Onion Oothappam with gunpowder served with 2 types of flavourful chutney and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 14000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046673",
                        "name": "Tomato Dosa",
                        "category": "South Indian",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 13000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046667",
                        "name": "Podi Onion Dosa",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with onion filling served with 2 types of flavorful chutney and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 14000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046669",
                        "name": "Rava Masala Roast",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with masala filling made with semolina batter served with 2 types of falvourful chutney and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/b9d820af-07dd-48d5-a128-29600131470f_6d872abb-da1d-4c58-b5dc-56b98c60ec0c.jpeg",
                        "isVeg": 1,
                        "price": 15000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046668",
                        "name": "Podi Rava Masala Roast",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with gunpowder and masala filling made with semolina batter served with 2 types of falvourful chutney and our special sambar",
                        "isVeg": 1,
                        "price": 16000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046657",
                        "name": "Onion Podi Rava Roast",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with onion filling made with semolina batter served with 2 types of falvourful chutney and our special sambar",
                        "isVeg": 1,
                        "price": 15000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046658",
                        "name": "Onion Rava Roast",
                        "category": "South Indian",
                        "description": "Crispy thin dosa with onion filling made with semolina batter served with 2 types of falvourful chutney and our special sambar",
                        "isVeg": 1,
                        "price": 14000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046670",
                        "name": "Rava Roast",
                        "category": "South Indian",
                        "description": "Crispy thin dosa made with semolina batter served with 2 types of falvourful chutney and our special sambar",
                        "isVeg": 1,
                        "price": 13000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }]
        }, {
            "title": "Idli & Vada",
            "itemCards": [{
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046633",
                        "name": "Ghee Podi Idli Set",
                        "category": "South Indian",
                        "description": "2 Thatte idly generously garnished with our gunpowder and ghee served with 2 flavourful chutneys and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/44cb750a-61fa-4b9b-8d88-0855ff28a2cd_558ac4b5-d2eb-4686-b561-fe6e28c66f24.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 18000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {
                            "text": "Bestseller",
                            "textColor": "#ffffff",
                            "topBackgroundColor": "#d53d4c",
                            "bottomBackgroundColor": "#b02331"
                        },
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "isBestseller": true,
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.8",
                                "ratingCount": "23 ratings",
                                "ratingCountV2": "23"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046645",
                        "name": "Vada Single",
                        "category": "South Indian",
                        "description": "Crispy and savory fried lentil fritters served with 2 flavourful chutneys",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/cdb51e25-6671-4111-b879-db445f04d03e_c179f1a7-ef90-4717-bfab-0297d68ea98b.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 2500,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.6",
                                "ratingCount": "19 ratings",
                                "ratingCountV2": "19"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046634",
                        "name": "Idly Set",
                        "category": "South Indian",
                        "description": "2 soft normal idly's served with 2 flavourful chutneys and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 7000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {
                            "text": "Bestseller",
                            "textColor": "#ffffff",
                            "topBackgroundColor": "#d53d4c",
                            "bottomBackgroundColor": "#b02331"
                        },
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "isBestseller": true,
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "4.1",
                                "ratingCount": "16 ratings",
                                "ratingCountV2": "16"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046643",
                        "name": "Thatte Idli Set",
                        "category": "South Indian",
                        "description": "2 Big idly served with 2 flavourful chutneys and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/2c8da716-d675-433f-b0f7-6e1789a62a40_f64fcd81-e320-4966-9977-e238bf5edbed.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 13000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.3",
                                "ratingCount": "8 ratings",
                                "ratingCountV2": "8"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046644",
                        "name": "Vada Set (2 Nos)",
                        "category": "South Indian",
                        "description": "Crispy and savory fried lentil fritters served with 2 flavourful chutneys",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 4500,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "4.2",
                                "ratingCount": "11 ratings",
                                "ratingCountV2": "11"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046641",
                        "name": "Idli (single)",
                        "category": "South Indian",
                        "description": "1 single normal idly - no chutney or sambar as accompaniments",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 2500,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "4.2",
                                "ratingCount": "9 ratings",
                                "ratingCountV2": "9"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046631",
                        "name": "Ghee Idli Set",
                        "category": "South Indian",
                        "description": "2 Thatte idly with a generous serving of ghee served with 2 flavourful chutneys and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/934f19ea-4f03-4667-a536-1f4a679f134c_0b02a106-2385-4e48-8db8-844f677f096f.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 17000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.2",
                                "ratingCount": "4 ratings",
                                "ratingCountV2": "4"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046628",
                        "name": "Butter Podi Idli Set",
                        "category": "South Indian",
                        "description": "2 Thatte idly generously garnished with our gunpowder and butter served with 2 flavourful chutneys and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 20000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.1",
                                "ratingCount": "3 ratings",
                                "ratingCountV2": "3"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046642",
                        "name": "Thatte Idli",
                        "category": "South Indian",
                        "description": "Big idly served with 2 flavourful chutneys and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/645ca312-c042-4657-bd4c-85c1845a0d68_2ae5055d-cfc7-45af-92b5-676b544177b5.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 7000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.8",
                                "ratingCount": "8 ratings",
                                "ratingCountV2": "8"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046632",
                        "name": "Ghee Podi Idli",
                        "category": "South Indian",
                        "description": "Thatte idly generously garnished with our gunpowder and ghee served with 2 flavourful chutneys and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/eb8a97a1-af2c-4c7e-8d26-0fcf4b1075d6_26ce5e9c-31ba-4782-b8ed-785ecd508f40.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 10000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "4.3",
                                "ratingCount": "3 ratings",
                                "ratingCountV2": "3"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046627",
                        "name": "Butter Podi Idli",
                        "category": "South Indian",
                        "description": "Thatte idly generously garnished with our gunpowder and butter served with 2 flavourful chutneys and our special sambar",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 11000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046630",
                        "name": "Ghee Idli",
                        "category": "South Indian",
                        "description": "Thatte idly with a generous serving of ghee served with 2 flavourful chutneys and our special sambar",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/8497e953-b0ae-475e-9240-f7ada28a96b8_a07981fa-9bb6-4a38-8c81-44e74a9c694c.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 9000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046637",
                        "name": "Peri Peri Button Idli",
                        "category": "South Indian",
                        "description": "10 mini idly's fried and coated with peri peri rub served with chilly sauce",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/f04cb667-149a-407d-9b66-09cbf34655d1_500f5ba5-b186-4da1-8bf6-e05823cee28b.jpeg",
                        "isVeg": 1,
                        "price": 16000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046639",
                        "name": "Sambar Button Idli",
                        "category": "South Indian",
                        "description": "10 mini idly's dipped in our special sambar",
                        "isVeg": 1,
                        "price": 14000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046638",
                        "name": "Podi Fried Button Idli",
                        "category": "South Indian",
                        "isVeg": 1,
                        "price": 16000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046629",
                        "name": "Curd Vada",
                        "category": "South Indian",
                        "isVeg": 1,
                        "price": 6000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046640",
                        "name": "Sambar Vada",
                        "category": "South Indian",
                        "isVeg": 1,
                        "price": 6000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046635",
                        "name": "Parippu Vada",
                        "category": "South Indian",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/ae020929-45ff-47a5-8f15-c49356139cab_45284b0d-cffe-453a-9c12-688aa8aa2fc4.jpeg",
                        "isVeg": 1,
                        "price": 2500,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046636",
                        "name": "Pepper Fried Button Idli",
                        "category": "South Indian",
                        "isVeg": 1,
                        "price": 16000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }]
        }, {
            "title": "Poori & Other Tiffin",
            "itemCards": [{
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046676",
                        "name": "Ghee Pongal",
                        "category": "South Indian",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/dbc8f12c-7acd-4888-be05-ef0af936fc83_7b30d7cb-8998-4836-ab56-58e28bfdfb0e.jpeg",
                        "inStock": 1,
                        "isVeg": 1,
                        "price": 12000,
                        "variants": {},
                        "variantsV2": {},
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.0",
                                "ratingCount": "4 ratings",
                                "ratingCountV2": "4"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046677",
                        "name": "Poori Masala",
                        "category": "South Indian",
                        "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/96d4c90f-efb9-40cc-aeba-3bd080927a7f_d602fa1d-51ca-468b-b578-62f39b4c70c2.jpeg",
                        "isVeg": 1,
                        "price": 13000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {
                            "text": "Bestseller",
                            "textColor": "#ffffff",
                            "topBackgroundColor": "#d53d4c",
                            "bottomBackgroundColor": "#b02331"
                        },
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "isBestseller": true,
                        "ratings": {
                            "aggregatedRating": {
                                "rating": "3.9",
                                "ratingCount": "27 ratings",
                                "ratingCountV2": "27"
                            }
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046674",
                        "name": "Chapathi (single)",
                        "category": "South Indian",
                        "isVeg": 1,
                        "price": 2500,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046675",
                        "name": "Chapathi Kurma Set",
                        "category": "South Indian",
                        "isVeg": 1,
                        "price": 15000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046678",
                        "name": "Porotta (single)",
                        "category": "South Indian",
                        "isVeg": 1,
                        "price": 2500,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }, {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                    "info": {
                        "id": "138046679",
                        "name": "Porotta Kurma Set",
                        "category": "South Indian",
                        "isVeg": 1,
                        "price": 15000,
                        "variants": {},
                        "variantsV2": {},
                        "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                        "itemAttribute": {
                            "vegClassifier": "VEG"
                        },
                        "ribbon": {},
                        "type": "ITEM",
                        "itemBadge": {},
                        "badgesV2": {},
                        "ratings": {
                            "aggregatedRating": {}
                        }
                    },
                    "analytics": {},
                    "hideRestaurantDetails": true
                }
            }]
        }]
    },
]


















/*

{
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
    "title": "South Indian",
    "categories": [{
        "title": "Dosa",
        "itemCards": [{
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046649",
                    "name": "Egg Roast Dosa",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with egg filling spreadout served with 2 types of flavourful chutney and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/51380749-72a4-4029-b9e0-4f5e4de6592f_abbb8a70-dcf0-4a78-9a7a-d61bc9915737.jpeg",
                    "inStock": 1,
                    "price": 14000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "NONVEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.9",
                            "ratingCount": "12 ratings",
                            "ratingCountV2": "12"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046652",
                    "name": "Ghee Roast",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with generous ghee served with 2 types of flavorful chutney and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/494da464-83e6-4ba5-af14-dbe3c1b5518b_96852a16-3d1e-46f5-ab1b-05de18bf4b36.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 12000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {
                        "text": "Bestseller",
                        "textColor": "#ffffff",
                        "topBackgroundColor": "#d53d4c",
                        "bottomBackgroundColor": "#b02331"
                    },
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "isBestseller": true,
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.7",
                            "ratingCount": "18 ratings",
                            "ratingCountV2": "18"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046671",
                    "name": "Set Dosa",
                    "category": "South Indian",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/5c9b3796-55bb-422e-af3b-e571cadda3ff_6679aa74-488d-4a9f-a650-8df644b0040f.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 8000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {
                        "text": "Bestseller",
                        "textColor": "#ffffff",
                        "topBackgroundColor": "#d53d4c",
                        "bottomBackgroundColor": "#b02331"
                    },
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "isBestseller": true,
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "4.3",
                            "ratingCount": "18 ratings",
                            "ratingCountV2": "18"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046653",
                    "name": "Masala Dosa",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with masala filling served with 2 types of flavorful chutney and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 13000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {
                        "text": "Bestseller",
                        "textColor": "#ffffff",
                        "topBackgroundColor": "#d53d4c",
                        "bottomBackgroundColor": "#b02331"
                    },
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "isBestseller": true,
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "12 ratings",
                            "ratingCountV2": "12"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046648",
                    "name": "Egg Dosa",
                    "category": "South Indian",
                    "description": "Soft Dosa with an egg on top served with 2 types of flavourful chutney and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/4db8f32d-71b8-447f-94c7-4f26dbdc8226_7eb7f1db-4ea7-4691-a561-2b30ae7d73d0.jpeg",
                    "inStock": 1,
                    "price": 13000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "NONVEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046656",
                    "name": "Onion Podi Oothappam",
                    "category": "South Indian",
                    "description": "Onion Oothappam with gunpowder served with 2 types of flavourful chutney and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/f24a2b73-776d-4e96-85bc-6a00858c0c0f_571dc342-6479-4763-ad0e-8b6dbc596ea9.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 13000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "7 ratings",
                            "ratingCountV2": "7"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046660",
                    "name": "Plain Roast",
                    "category": "South Indian",
                    "description": "Crispy thin dosa served with 2 types of flavorful chutney and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/b3cd8ab1-3dad-48ca-b95a-be3870225387_3b8c5bac-05f3-4a8f-b432-2e61797645b2.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 9000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "4.0",
                            "ratingCount": "10 ratings",
                            "ratingCountV2": "10"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046654",
                    "name": "Onion Ghee Podi Masala Dosa",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with onion, gunpowder and masala filling served with 2 types of flavorful chutney and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 15000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046666",
                    "name": "Podi Onion Cheese Masala Dosa",
                    "category": "South Indian",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 20000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046655",
                    "name": "Onion Oothappam",
                    "category": "South Indian",
                    "description": "Onion Oothappam served with 2 types of flavourful chutney and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/c0011333-1199-4d70-a8b8-41fd2691f94a_d0b3216f-db9b-453c-9911-cbcf50debcf8.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 12000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "4.3",
                            "ratingCount": "3 ratings",
                            "ratingCountV2": "3"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046664",
                    "name": "Podi Ghee Masala Dosa",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with our gunpowder and masala filling served with 2 types of flavorful chutney and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 15000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.7",
                            "ratingCount": "3 ratings",
                            "ratingCountV2": "3"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046661",
                    "name": "Podi Cheese Masala Dosa",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with cheese, gunpowder and masala filling served with 2 types of falvourful chutney and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 18000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.2",
                            "ratingCount": "3 ratings",
                            "ratingCountV2": "3"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046665",
                    "name": "Podi Ghee Roast",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with gunpowder and generous ghee served with 2 types of flavourful chutney and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 13000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046662",
                    "name": "Podi Ghee Cheese Masala Dosa",
                    "category": "South Indian",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 19000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046650",
                    "name": "Ghee Masala Dosa",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with masala filling served with 2 types of flavorful chutney and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 14000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046646",
                    "name": "Cheese Dosa",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with cheese filling served with 2 types of falvourful chutney and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 14000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046647",
                    "name": "Cheese Masala Dosa",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with cheese and masala filling served with 2 types of falvourful chutney and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 17000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046659",
                    "name": "Open Butter Masala Dosa",
                    "category": "South Indian",
                    "description": "An open presentation of Butter masala dosa served with 2 types of flavourful chutney and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/bf145a7e-bbae-4d07-9e80-f110b1fe9eb3_da74ca02-b600-4239-96af-b6e54976e4a0.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 13000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.7",
                            "ratingCount": "3 ratings",
                            "ratingCountV2": "3"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046672",
                    "name": "Tomato Cheese Dosa",
                    "category": "South Indian",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 15000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046651",
                    "name": "Ghee Onion Podi Oothappam",
                    "category": "South Indian",
                    "description": "Ghee Onion Oothappam with gunpowder served with 2 types of flavourful chutney and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 14000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046673",
                    "name": "Tomato Dosa",
                    "category": "South Indian",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 13000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046667",
                    "name": "Podi Onion Dosa",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with onion filling served with 2 types of flavorful chutney and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 14000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046669",
                    "name": "Rava Masala Roast",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with masala filling made with semolina batter served with 2 types of falvourful chutney and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/b9d820af-07dd-48d5-a128-29600131470f_6d872abb-da1d-4c58-b5dc-56b98c60ec0c.jpeg",
                    "isVeg": 1,
                    "price": 15000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046668",
                    "name": "Podi Rava Masala Roast",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with gunpowder and masala filling made with semolina batter served with 2 types of falvourful chutney and our special sambar",
                    "isVeg": 1,
                    "price": 16000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046657",
                    "name": "Onion Podi Rava Roast",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with onion filling made with semolina batter served with 2 types of falvourful chutney and our special sambar",
                    "isVeg": 1,
                    "price": 15000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046658",
                    "name": "Onion Rava Roast",
                    "category": "South Indian",
                    "description": "Crispy thin dosa with onion filling made with semolina batter served with 2 types of falvourful chutney and our special sambar",
                    "isVeg": 1,
                    "price": 14000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046670",
                    "name": "Rava Roast",
                    "category": "South Indian",
                    "description": "Crispy thin dosa made with semolina batter served with 2 types of falvourful chutney and our special sambar",
                    "isVeg": 1,
                    "price": 13000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }]
    }, {
        "title": "Idli & Vada",
        "itemCards": [{
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046633",
                    "name": "Ghee Podi Idli Set",
                    "category": "South Indian",
                    "description": "2 Thatte idly generously garnished with our gunpowder and ghee served with 2 flavourful chutneys and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/44cb750a-61fa-4b9b-8d88-0855ff28a2cd_558ac4b5-d2eb-4686-b561-fe6e28c66f24.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 18000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {
                        "text": "Bestseller",
                        "textColor": "#ffffff",
                        "topBackgroundColor": "#d53d4c",
                        "bottomBackgroundColor": "#b02331"
                    },
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "isBestseller": true,
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.8",
                            "ratingCount": "23 ratings",
                            "ratingCountV2": "23"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046645",
                    "name": "Vada Single",
                    "category": "South Indian",
                    "description": "Crispy and savory fried lentil fritters served with 2 flavourful chutneys",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/cdb51e25-6671-4111-b879-db445f04d03e_c179f1a7-ef90-4717-bfab-0297d68ea98b.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 2500,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.6",
                            "ratingCount": "19 ratings",
                            "ratingCountV2": "19"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046634",
                    "name": "Idly Set",
                    "category": "South Indian",
                    "description": "2 soft normal idly's served with 2 flavourful chutneys and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 7000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {
                        "text": "Bestseller",
                        "textColor": "#ffffff",
                        "topBackgroundColor": "#d53d4c",
                        "bottomBackgroundColor": "#b02331"
                    },
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "isBestseller": true,
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "16 ratings",
                            "ratingCountV2": "16"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046643",
                    "name": "Thatte Idli Set",
                    "category": "South Indian",
                    "description": "2 Big idly served with 2 flavourful chutneys and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/2c8da716-d675-433f-b0f7-6e1789a62a40_f64fcd81-e320-4966-9977-e238bf5edbed.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 13000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.3",
                            "ratingCount": "8 ratings",
                            "ratingCountV2": "8"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046644",
                    "name": "Vada Set (2 Nos)",
                    "category": "South Indian",
                    "description": "Crispy and savory fried lentil fritters served with 2 flavourful chutneys",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 4500,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "4.2",
                            "ratingCount": "11 ratings",
                            "ratingCountV2": "11"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046641",
                    "name": "Idli (single)",
                    "category": "South Indian",
                    "description": "1 single normal idly - no chutney or sambar as accompaniments",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 2500,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "4.2",
                            "ratingCount": "9 ratings",
                            "ratingCountV2": "9"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046631",
                    "name": "Ghee Idli Set",
                    "category": "South Indian",
                    "description": "2 Thatte idly with a generous serving of ghee served with 2 flavourful chutneys and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/934f19ea-4f03-4667-a536-1f4a679f134c_0b02a106-2385-4e48-8db8-844f677f096f.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 17000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.2",
                            "ratingCount": "4 ratings",
                            "ratingCountV2": "4"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046628",
                    "name": "Butter Podi Idli Set",
                    "category": "South Indian",
                    "description": "2 Thatte idly generously garnished with our gunpowder and butter served with 2 flavourful chutneys and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 20000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.1",
                            "ratingCount": "3 ratings",
                            "ratingCountV2": "3"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046642",
                    "name": "Thatte Idli",
                    "category": "South Indian",
                    "description": "Big idly served with 2 flavourful chutneys and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/645ca312-c042-4657-bd4c-85c1845a0d68_2ae5055d-cfc7-45af-92b5-676b544177b5.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 7000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.8",
                            "ratingCount": "8 ratings",
                            "ratingCountV2": "8"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046632",
                    "name": "Ghee Podi Idli",
                    "category": "South Indian",
                    "description": "Thatte idly generously garnished with our gunpowder and ghee served with 2 flavourful chutneys and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/eb8a97a1-af2c-4c7e-8d26-0fcf4b1075d6_26ce5e9c-31ba-4782-b8ed-785ecd508f40.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 10000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "4.3",
                            "ratingCount": "3 ratings",
                            "ratingCountV2": "3"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046627",
                    "name": "Butter Podi Idli",
                    "category": "South Indian",
                    "description": "Thatte idly generously garnished with our gunpowder and butter served with 2 flavourful chutneys and our special sambar",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 11000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046630",
                    "name": "Ghee Idli",
                    "category": "South Indian",
                    "description": "Thatte idly with a generous serving of ghee served with 2 flavourful chutneys and our special sambar",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/8497e953-b0ae-475e-9240-f7ada28a96b8_a07981fa-9bb6-4a38-8c81-44e74a9c694c.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 9000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046637",
                    "name": "Peri Peri Button Idli",
                    "category": "South Indian",
                    "description": "10 mini idly's fried and coated with peri peri rub served with chilly sauce",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/f04cb667-149a-407d-9b66-09cbf34655d1_500f5ba5-b186-4da1-8bf6-e05823cee28b.jpeg",
                    "isVeg": 1,
                    "price": 16000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046639",
                    "name": "Sambar Button Idli",
                    "category": "South Indian",
                    "description": "10 mini idly's dipped in our special sambar",
                    "isVeg": 1,
                    "price": 14000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046638",
                    "name": "Podi Fried Button Idli",
                    "category": "South Indian",
                    "isVeg": 1,
                    "price": 16000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046629",
                    "name": "Curd Vada",
                    "category": "South Indian",
                    "isVeg": 1,
                    "price": 6000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046640",
                    "name": "Sambar Vada",
                    "category": "South Indian",
                    "isVeg": 1,
                    "price": 6000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046635",
                    "name": "Parippu Vada",
                    "category": "South Indian",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/ae020929-45ff-47a5-8f15-c49356139cab_45284b0d-cffe-453a-9c12-688aa8aa2fc4.jpeg",
                    "isVeg": 1,
                    "price": 2500,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046636",
                    "name": "Pepper Fried Button Idli",
                    "category": "South Indian",
                    "isVeg": 1,
                    "price": 16000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:10 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }]
    }, {
        "title": "Poori & Other Tiffin",
        "itemCards": [{
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046676",
                    "name": "Ghee Pongal",
                    "category": "South Indian",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/dbc8f12c-7acd-4888-be05-ef0af936fc83_7b30d7cb-8998-4836-ab56-58e28bfdfb0e.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 12000,
                    "variants": {},
                    "variantsV2": {},
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.0",
                            "ratingCount": "4 ratings",
                            "ratingCountV2": "4"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046677",
                    "name": "Poori Masala",
                    "category": "South Indian",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/96d4c90f-efb9-40cc-aeba-3bd080927a7f_d602fa1d-51ca-468b-b578-62f39b4c70c2.jpeg",
                    "isVeg": 1,
                    "price": 13000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {
                        "text": "Bestseller",
                        "textColor": "#ffffff",
                        "topBackgroundColor": "#d53d4c",
                        "bottomBackgroundColor": "#b02331"
                    },
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "isBestseller": true,
                    "ratings": {
                        "aggregatedRating": {
                            "rating": "3.9",
                            "ratingCount": "27 ratings",
                            "ratingCountV2": "27"
                        }
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046674",
                    "name": "Chapathi (single)",
                    "category": "South Indian",
                    "isVeg": 1,
                    "price": 2500,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046675",
                    "name": "Chapathi Kurma Set",
                    "category": "South Indian",
                    "isVeg": 1,
                    "price": 15000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046678",
                    "name": "Porotta (single)",
                    "category": "South Indian",
                    "isVeg": 1,
                    "price": 2500,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046679",
                    "name": "Porotta Kurma Set",
                    "category": "South Indian",
                    "isVeg": 1,
                    "price": 15000,
                    "variants": {},
                    "variantsV2": {},
                    "nextAvailableAtMessage": "Next available at 7:11 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": {},
                    "type": "ITEM",
                    "itemBadge": {},
                    "badgesV2": {},
                    "ratings": {
                        "aggregatedRating": {}
                    }
                },
                "analytics": {},
                "hideRestaurantDetails": true
            }
        }]
    }]
}, 
{
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
    "title": "Drinks (beverages)",
    "categories": [{
        "title": "Juices",
        "itemCards": [{
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046692",
                    "name": "Pomegranate Juice",
                    "category": "Drinks (beverages)",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 18000,
                    "variants": { },
                    "variantsV2": { },
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046680",
                    "name": "Apple Juice",
                    "category": "Drinks (beverages)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/1884145d-2705-46f5-9284-48b3b71d5f63_b3347357-448a-496b-ae50-393783a239ea.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 16000,
                    "variants": { },
                    "variantsV2": { },
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046690",
                    "name": "Orange Juice",
                    "category": "Drinks (beverages)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/ba8ff043-5894-4b33-9ce5-f72dad195aa4_60c414c2-9500-4a21-9b42-14555adb47f1.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 14000,
                    "variants": { },
                    "variantsV2": { },
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046689",
                    "name": "Mosambi Juice",
                    "category": "Drinks (beverages)",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 14000,
                    "variants": { },
                    "variantsV2": { },
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046691",
                    "name": "Pineapple Juice",
                    "category": "Drinks (beverages)",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 14000,
                    "variants": { },
                    "variantsV2": { },
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046693",
                    "name": "Watermelon Juice",
                    "category": "Drinks (beverages)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/bb613dfa-c13c-4908-8b63-9630073780b7_3272c469-21bb-41e0-a7a8-bc8280ce645b.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 12000,
                    "variants": { },
                    "variantsV2": { },
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046684",
                    "name": "Grape Juice",
                    "category": "Drinks (beverages)",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 14000,
                    "variants": { },
                    "variantsV2": { },
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046685",
                    "name": "Ice Tea",
                    "category": "Drinks (beverages)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/618a8bf1-f2f0-4da3-b472-0984be33432b_8cd58281-7ec6-4ed2-b13b-b6eeb6200789.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 12000,
                    "variants": { },
                    "variantsV2": { },
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046686",
                    "name": "Lime Juice",
                    "category": "Drinks (beverages)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/42c25acb-c1b6-41fd-af0f-3d16b807364a_c9726f74-58a0-4885-9b04-9ae25de64013.jpeg",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 7500,
                    "variants": { },
                    "variantsV2": { },
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046683",
                    "name": "Ginger Lime",
                    "category": "Drinks (beverages)",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 8000,
                    "variants": { },
                    "variantsV2": { },
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046688",
                    "name": "Mint Lime",
                    "category": "Drinks (beverages)",
                    "inStock": 1,
                    "isVeg": 1,
                    "price": 8000,
                    "variants": { },
                    "variantsV2": { },
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046681",
                    "name": "Carrot Juice",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 14000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 7:12 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046682",
                    "name": "Carrot Orange Juice",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 15000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 7:12 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046687",
                    "name": "Mango Juice",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 16000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 7:12 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }]
    }, {
        "title": "Shakes",
        "itemCards": [{
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046702",
                    "name": "Cold Boost",
                    "category": "Drinks (beverages)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/e33244ea-15bd-4e53-8c91-f4d9b334e7f7_ce912a70-1010-422d-98ea-b458962ecca6.jpeg",
                    "isVeg": 1,
                    "price": 14000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046709",
                    "name": "Mohabath Ka Sharbath",
                    "category": "Drinks (beverages)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/2f28ed41-d0e8-49b0-9345-aee1a048b15e_740c01cc-0f77-4908-94a4-f5e7f4960d48.jpeg",
                    "isVeg": 1,
                    "price": 20000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046712",
                    "name": "Pomegranate Shake",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 20000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046706",
                    "name": "Hot Boost",
                    "category": "Drinks (beverages)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/e33244ea-15bd-4e53-8c91-f4d9b334e7f7_ce912a70-1010-422d-98ea-b458962ecca6.jpeg",
                    "isVeg": 1,
                    "price": 14000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046710",
                    "name": "Oreo Shake",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 17500,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046708",
                    "name": "Mango Shake",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 16000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046713",
                    "name": "Rose Milk",
                    "category": "Drinks (beverages)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/fd2b69c0-d2a2-4b8c-ba3b-47d02293891a_d7c6060f-3838-4f22-b1f7-ae539176b4e0.jpeg",
                    "isVeg": 1,
                    "price": 12000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046715",
                    "name": "Vanilla Shake",
                    "category": "Drinks (beverages)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/6a3cb0b7-d107-43e6-a9cf-e31497f765c8_dc734642-61fc-47e9-b261-e7eaa550c489.jpeg",
                    "isVeg": 1,
                    "price": 15000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046703",
                    "name": "Cold Coffee",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 15000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046714",
                    "name": "Strawberry Shake",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 15000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046707",
                    "name": "Hot Horlicks",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 14000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046701",
                    "name": "Chocolate Shake",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 15000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046704",
                    "name": "Cold Horlicks",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 14000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046699",
                    "name": "Badam Milk",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 12000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046711",
                    "name": "Pista Milk",
                    "category": "Drinks (beverages)",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/a3b2cf60-8258-4ea7-8ecd-c56d809d42f8_b131d8d6-2771-4bd3-8585-6a2e44fa4e9f.jpeg",
                    "isVeg": 1,
                    "price": 12000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046698",
                    "name": "Apple Shake",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 17500,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046700",
                    "name": "Chikku Shake",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 17500,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }, {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046705",
                    "name": "Dry Fruit Shake",
                    "category": "Drinks (beverages)",
                    "isVeg": 1,
                    "price": 20000,
                    "variants": { },
                    "variantsV2": { },
                    "nextAvailableAtMessage": "Next available at 8:21 am, tomorrow",
                    "itemAttribute": {
                        "vegClassifier": "VEG"
                    },
                    "ribbon": { },
                    "type": "ITEM",
                    "itemBadge": { },
                    "badgesV2": { },
                    "ratings": {
                        "aggregatedRating": { }
                    }
                },
                "analytics": { },
                "hideRestaurantDetails": true
            }
        }]
    }, 
    {
        "title": "Hot Beverages",
        "itemCards": [{
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                "info": {
                    "id": "138046694",
                    "name": "Filter Coffee",
                    "category": "Drinks (beverages)",
                    "description": "Kumbakonam degree coffee is freshly prepared authentic and pure filter coffee",
                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/9/8d0d1d9f-d2de-49d5-b45b-9ce4d1f8b5de_5875a232-cd42-4956-b4e2-0e7c99bb8bde.jpeg",
                    "isVeg": 1,
                    "variants": { },
                    "variantsV2": {
                        "variantGroups": [{
                            "groupId": "41082265",
                            "name": "Quantity",
                            "variations": [{
                                "name": "200 ML",
                                "price": 150,
                                "default": 1,
                                "id": "131362491",
                                "inStock": 1,
                                "isVeg": 1,
                                "isEnabled": 1
                            }, {
                                    "name": "500 ML",
                                    "price": 220,
                                    "id": "131362492",
                                    "inStock": 1,
                                    "isVeg": 1,
                                    "isEnabled": 1
                            }, {
                                    "name": "700 ML",
                                    "price": 280,
                                    "id": "131362493",
                                    "inStock": 1,
                                    "isVeg": 1,
                                    "isEnabled": 1
                            }]
                        }],
                        "pricingModels": [{
                            "variations": [{
                                "groupId": "41082265",
                                "variationId": "131362491"
                            }],
                            "price": 15000
                        }, {
                                "variations": [{
                                    "groupId": "41082265",
                                    "variationId": "131362492"
                            }],
                                "price": 22000
                        }, {
                                "variations": [{
                                    "groupId": "41082265",
                                    "variationId": "131362493"
                            }],
                                "price": 28000
                        }]
                    }
                




export default restuarantlist*/
