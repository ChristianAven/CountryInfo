export interface Countries {
    name: string;
    url:  string;
}

export interface Country {
    names:        Names;
    maps:         Maps;
    timezone:     Timezone;
    language:     Language[];
    electricity:  Electricity;
    telephone:    Telephone;
    water:        Water;
    vaccinations: any[];
    currency:     Currency;
    weather:      { [key: string]: Weather };
    advise:       Advise;
    neighbors:    Neighbor[];
}

export interface Advise {
    UA: CA;
    CA: CA;
}

export interface CA {
    advise: string;
    url:    string;
}

export interface Currency {
    name:    string;
    code:    string;
    symbol:  string;
    rate:    string;
    compare: Compare[];
}

export interface Compare {
    name: string;
    rate: string;
}

export interface Electricity {
    voltage:   string;
    frequency: string;
    plugs:     string[];
}

export interface Language {
    language: string;
    official: string;
}

export interface Maps {
    lat:  string;
    long: string;
    zoom: string;
}

export interface Names {
    name:      string;
    full:      string;
    iso2:      string;
    iso3:      string;
    continent: string;
}

export interface Neighbor {
    id:   string;
    name: string;
}

export interface Telephone {
    calling_code: string;
    police:       string;
    ambulance:    string;
    fire:         string;
}

export interface Timezone {
    name: string;
}

export interface Water {
    short: string;
    full:  string;
}

export interface Weather {
    tMin: string;
    tMax: string;
    tAvg: string;
    pMin: string;
    pMax: string;
    pAvg: string;
}
