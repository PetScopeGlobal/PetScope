export type GenderEnums = {
    "Barnyard": GenderEnum;
    "Bird": GenderEnumOrUnknown;
    "Cat": GenderEnum;
    "Dog": GenderEnum;
    "Horse": GenderEnum;
    "Rabbit": GenderEnum;
    "Scales, Fins & Other": GenderEnumOrUnknown;
    "Small & Furry": GenderEnum;
};

type GenderEnum = "Male" | "Female";
type GenderEnumOrUnknown = GenderEnum | "Unknown";
