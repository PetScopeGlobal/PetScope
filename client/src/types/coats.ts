export type CoatsEnum = {
    "Barnyard": BarnyardCoatsEnum;
    "Bird": BirdCoatsEnum;
    "Cat": CatCoatsEnum;
    "Dog": DogCoatsEnum;
    "Horse": HorseCoatsEnum;
    "Rabbit": RabbitCoatsEnum;
    "Scales, Fins & Other": ScalesCoatsEnum;
    "Small & Furry": SmallCoatsEnum;
};

type BarnyardCoatsEnum = "Short" | "Long";

type BirdCoatsEnum = [];

type CatCoatsEnum = "Hairless" | "Short" | "Medium" | "Long";

type DogCoatsEnum = "Hairless" | "Short" | "Medium" | "Long" | "Wire" | "Curly";

type HorseCoatsEnum = [];

type RabbitCoatsEnum = "Short" | "Long";

type ScalesCoatsEnum = [];

type SmallCoatsEnum = "Hairless" | "Short" | "Long";
