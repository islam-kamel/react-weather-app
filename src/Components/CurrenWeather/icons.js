const sunny = require("../../assets/icons/0.svg").default;
const clearNight = require("../../assets/icons/0-n.svg").default;
const getIcon = (day) => require(`../../assets/icons/${day}.svg`);



const PARTLY_CLOUDY_DAY_ID = 2;
const PARTLY_CLOUDY_NIGHT_ID = 102;
const CLOUDY_DAY_ID = 3;
const CLOUDY_NIGHT_ID = 103;
const FOG_DAY_ID = 45;
const FOG_NIGHT_ID = 45;
const DRIZZLE_DAY_ID = 51;
const DRIZZLE_NIGHT_ID = 1051;
const FREEZING_DRIZZLE_DAY_ID = 57;
const FREEZING_DRIZZLE_NIGHT_ID = 1057;
const RAIN_DAY_ID = 61;
const RAIN_NIGHT_ID = 1061;
const FREEZING_RAIN_DAY_ID = 66;
const FREEZING_RAIN_NIGHT_ID = 1066;;
const SHOWERS_DAY_ID = 61;
const SHOWERS_NIGHT_ID = 61;
const SNOW_ID = 71;
const THUNDERSTORM_ID = 95;

export const icons = {
  "0": {
    "day": {
      "description": "Sunny",
      "image": sunny
    },
    "night": {
      "description": "Clear",
      "image": clearNight
    }
  },
  "1": {
    "day": {
      "description": "Mainly Sunny",
      "image": clearNight
    },
    "night": {
      "description": "Mainly Clear",
      "image": clearNight,
    }
  },
  "2": {
    "day": {
      "description": "Partly Cloudy",
      "image": getIcon(PARTLY_CLOUDY_DAY_ID),
    },
    "night": {
      "description": "Partly Cloudy",
      "image": getIcon(PARTLY_CLOUDY_NIGHT_ID)
    }
  },
  "3": {
    "day": {
      "description": "Cloudy",
      "image": getIcon(CLOUDY_DAY_ID)
    },
    "night": {
      "description": "Cloudy",
      "image": getIcon(CLOUDY_NIGHT_ID)
    }
  },
  "45": {
    "day": {
      "description": "Foggy",
      "image": getIcon(FOG_DAY_ID)
    },
    "night": {
      "description": "Foggy",
      "image": getIcon(FOG_NIGHT_ID)
    }
  },
  "48": {
    "day": {
      "description": "Rime Fog",
      "image": getIcon(FOG_DAY_ID)
    },
    "night": {
      "description": "Rime Fog",
      "image": getIcon(FOG_NIGHT_ID)
    }
  },
  "51": {
    "day": {
      "description": "Light Drizzle",
      "image": getIcon(DRIZZLE_DAY_ID)
    },
    "night": {
      "description": "Light Drizzle",
      "image": getIcon(DRIZZLE_NIGHT_ID)
    }
  },
  "53": {
    "day": {
      "description": "Drizzle",
      "image": getIcon(DRIZZLE_DAY_ID)

    },
    "night": {
      "description": "Drizzle",
      "image": getIcon(DRIZZLE_NIGHT_ID)
    }
  },
  "55": {
    "day": {
      "description": "Heavy Drizzle",
      "image": getIcon(DRIZZLE_DAY_ID)
    },
    "night": {
      "description": "Heavy Drizzle",
      "image": getIcon(DRIZZLE_NIGHT_ID)
    }
  },
  "56": {
    "day": {
      "description": "Light Freezing Drizzle",
      "image": getIcon(FREEZING_DRIZZLE_DAY_ID)
    },
    "night": {
      "description": "Light Freezing Drizzle",
      "image": getIcon(FREEZING_DRIZZLE_NIGHT_ID)
    }
  },
  "57": {
    "day": {
      "description": "Freezing Drizzle",
      "image": getIcon(FREEZING_DRIZZLE_DAY_ID)
    },
    "night": {
      "description": "Freezing Drizzle",
      "image": getIcon(FREEZING_DRIZZLE_NIGHT_ID)
    }
  },
  "61": {
    "day": {
      "description": "Light Rain",
      "image": getIcon(RAIN_DAY_ID)
    },
    "night": {
      "description": "Light Rain",
      "image": getIcon(RAIN_NIGHT_ID)
    }
  },
  "63": {
    "day": {
      "description": "Rain",
      "image": getIcon(RAIN_DAY_ID)
    },
    "night": {
      "description": "Rain",
      "image": getIcon(RAIN_NIGHT_ID)
    }
  },
  "65": {
    "day": {
      "description": "Heavy Rain",
      "image": getIcon(RAIN_DAY_ID)
    },
    "night": {
      "description": "Heavy Rain",
      "image": getIcon(RAIN_NIGHT_ID)
    }
  },
  "66": {
    "day": {
      "description": "Light Freezing Rain",
      "image": getIcon(FREEZING_RAIN_DAY_ID)
    },
    "night": {
      "description": "Freezing Rain",
      "image": getIcon(FREEZING_RAIN_NIGHT_ID)
    }
  },
  "67": {
    "day": {
      "description": "Freezing Rain",
      "image": getIcon(FREEZING_RAIN_DAY_ID)
    },
    "night": {
      "description": "Freezing Rain",
      "image": getIcon(FREEZING_RAIN_NIGHT_ID)
    }
  },
  "71": {
    "day": {
      "description": "Light Snow",
      "image": getIcon(SNOW_ID)
    },
    "night": {
      "description": "Light Snow",
      "image": getIcon(SNOW_ID)
    }
  },
  "73": {
    "day": {
      "description": "Snow",
      "image": getIcon(SNOW_ID)
    },
    "night": {
      "description": "Snow",
      "image": getIcon(SNOW_ID)
    }
  },
  "75": {
    "day": {
      "description": "Heavy Snow",
      "image": getIcon(SNOW_ID)
    },
    "night": {
      "description": "Heavy Snow",
      "image": getIcon(SNOW_ID)
    }
  },
  "77": {
    "day": {
      "description": "Snow Grains",
      "image": getIcon(SNOW_ID)
    },
    "night": {
      "description": "Snow Grains",
      "image": getIcon(SNOW_ID)
    }
  },
  "80": {
    "day": {
      "description": "Light Showers",
      "image": getIcon(SHOWERS_DAY_ID)
    },
    "night": {
      "description": "Light Showers",
      "image": getIcon(SHOWERS_NIGHT_ID)
    }
  },
  "81": {
    "day": {
      "description": "Showers",
      "image": getIcon(SHOWERS_DAY_ID)
    },
    "night": {
      "description": "Showers",
      "image": getIcon(SHOWERS_NIGHT_ID)
    }
  },
  "82": {
    "day": {
      "description": "Heavy Showers",
      "image": getIcon(SHOWERS_DAY_ID)
    },
    "night": {
      "description": "Heavy Showers",
      "image": getIcon(SHOWERS_NIGHT_ID)
    }
  },
  "85": {
    "day": {
      "description": "Light Snow Showers",
      "image": getIcon(SNOW_ID)
    },
    "night": {
      "description": "Snow Showers",
      "image": getIcon(SNOW_ID)
    }
  },
  "86": {
    "day": {
      "description": "Snow Showers",
      "image": getIcon(SNOW_ID)
    },
    "night": {
      "description": "Snow Showers",
      "image": getIcon(SNOW_ID)
    }
  },
  "95": {
    "day": {
      "description": "Thunderstorm",
      "image": getIcon(THUNDERSTORM_ID)
    },
    "night": {
      "description": "Thunderstorm",
      "image": getIcon(THUNDERSTORM_ID)
    }
  },
  "96": {
    "day": {
      "description": "Thunderstorm With Hail",
      "image": getIcon(THUNDERSTORM_ID)
    },
    "night": {
      "description": "Thunderstorm With Hail",
      "image": getIcon(THUNDERSTORM_ID)
    }
  },
  "99": {
    "day": {
      "description": "Thunderstorm With Hail",
      "image": getIcon(THUNDERSTORM_ID)
    },
    "night": {
      "description": "Thunderstorm With Hail",
      "image": getIcon(THUNDERSTORM_ID)
    }
  }
}
