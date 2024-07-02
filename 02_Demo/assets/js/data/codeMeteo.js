// @source: https://open-meteo.com/en/docs
// WMO - codes météorologiques officiels
// 0 	        Clear sky
// 1, 2, 3 	    Mainly clear, partly cloudy, and overcast
// 45, 48 	    Fog and depositing rime fog
// 51, 53, 55 	Drizzle: Light, moderate, and dense intensity
// 56, 57 	    Freezing Drizzle: Light and dense intensity
// 61, 63, 65 	Rain: Slight, moderate and heavy intensity
// 66, 67 	    Freezing Rain: Light and heavy intensity
// 71, 73, 75 	Snow fall: Slight, moderate, and heavy intensity
// 77 	        Snow grains
// 80, 81, 82 	Rain showers: Slight, moderate, and violent
// 85, 86 	    Snow showers slight and heavy
// 95 * 	    Thunderstorm: Slight or moderate
// 96, 99 * 	Thunderstorm with slight and heavy hail

const codeMeteo = {
    "01d": "soleil",
    "02d": "nuage",
    "03d": "nuage",
    "04d": "nuage",
    "09d": "pluie",
    "10d": "pluie",
    "11d": "orage",
    "13d": "neige",
    "50d": "brouillard",
    "01n": "soleil",
    "02n": "nuage",
    "03n": "nuage",
    "04n": "nuage",
    "09n": "pluie",
    "10n": "pluie",
    "11n": "orage",
    "13n": "neige",
    "50n": "brouillard",
};

const coordVilles = {
    paris: {
        coords: {
            latitude: 48.8566,
            longitude: 2.3522,
        },
    },
    marseille: {
        coords: {
            latitude: 43.2964,
            longitude: 5.37,
        },
    },
    winnipeg: {
        coords: {
            latitude: 49.8951,
            longitude: -97.1384,
        },
    },
    newyork: {
        coords: {
            latitude: 40.7128,
            longitude: -74.006,
        },
    },
    tokyo: {
        coords: {
            latitude: 35.6895,
            longitude: 139.6917,
        },
    },
    moscou: {
        coords: {
            latitude: 55.7558,
            longitude: 37.6176,
        },
    },
    sydney: {
        coords: {
            latitude: -33.8688,
            longitude: 151.2093,
        },
    },
    yellowknife: {
        coords: {
            latitude: 62.454,
            longitude: -114.3718,
        },
    },
};

export { codeMeteo, coordVilles };
export default codeMeteo;
