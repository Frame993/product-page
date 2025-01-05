export interface Products {
    id:              number;
    company:         string;
    title:           string;
    description:     string;
    price:           number;
    discount:        number;
    images:          Images;
}

export interface Images {
    desktop:   string[];
    thumbnail: string[];
}
