const defaultCity = {
    name: 'Rome',
    country: 'IT',
    lat: 41.8947,
    lon: 12.4839,
};

const defaultData = {
    "current": {
        "dt": 1619517466,
        "temp": 292.3,
        "weather": [
            {
                "description": "scattered clouds",
                "icon": "03d"
            }
        ]
    },
    "hourly": [
        {
            "dt": 1619514000,
            "temp": 292.46,
            "feels_like": 291.93,
            "pressure": 1006,
            "humidity": 57,
            "dew_point": 283.74,
            "uvi": 5.68,
            "clouds": 37,
            "visibility": 10000,
            "wind_speed": 3.9,
            "wind_deg": 189,
            "wind_gust": 6.67,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1619517600,
            "temp": 292.3,
            "feels_like": 291.81,
            "pressure": 1006,
            "humidity": 59,
            "dew_point": 284.11,
            "uvi": 2.87,
            "clouds": 40,
            "visibility": 10000,
            "wind_speed": 4.8,
            "wind_deg": 197,
            "wind_gust": 7.11,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1619521200,
            "temp": 292.3,
            "feels_like": 291.86,
            "pressure": 1006,
            "humidity": 61,
            "dew_point": 284.61,
            "uvi": 3.11,
            "clouds": 41,
            "visibility": 10000,
            "wind_speed": 4.63,
            "wind_deg": 205,
            "wind_gust": 6.54,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1619524800,
            "temp": 292.52,
            "feels_like": 292.13,
            "pressure": 1006,
            "humidity": 62,
            "dew_point": 285.06,
            "uvi": 2.92,
            "clouds": 44,
            "visibility": 10000,
            "wind_speed": 3.96,
            "wind_deg": 206,
            "wind_gust": 5.57,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1619528400,
            "temp": 293.09,
            "feels_like": 292.73,
            "pressure": 1006,
            "humidity": 61,
            "dew_point": 285.35,
            "uvi": 3.33,
            "clouds": 59,
            "visibility": 10000,
            "wind_speed": 4.12,
            "wind_deg": 216,
            "wind_gust": 5.37,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.25
        },
        {
            "dt": 1619532000,
            "temp": 293,
            "feels_like": 292.66,
            "pressure": 1006,
            "humidity": 62,
            "dew_point": 285.51,
            "uvi": 2.28,
            "clouds": 59,
            "visibility": 10000,
            "wind_speed": 4.62,
            "wind_deg": 222,
            "wind_gust": 5.64,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.29
        },
        {
            "dt": 1619535600,
            "temp": 292.35,
            "feels_like": 292.05,
            "pressure": 1006,
            "humidity": 66,
            "dew_point": 285.4,
            "uvi": 1.26,
            "clouds": 73,
            "visibility": 10000,
            "wind_speed": 3.8,
            "wind_deg": 212,
            "wind_gust": 4.77,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.21
        },
        {
            "dt": 1619539200,
            "temp": 291.68,
            "feels_like": 291.36,
            "pressure": 1006,
            "humidity": 68,
            "dew_point": 285.29,
            "uvi": 0.47,
            "clouds": 79,
            "visibility": 10000,
            "wind_speed": 3.23,
            "wind_deg": 217,
            "wind_gust": 4.07,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.21
        },
        {
            "dt": 1619542800,
            "temp": 290.77,
            "feels_like": 290.52,
            "pressure": 1006,
            "humidity": 74,
            "dew_point": 285.61,
            "uvi": 0.12,
            "clouds": 83,
            "visibility": 10000,
            "wind_speed": 2.97,
            "wind_deg": 211,
            "wind_gust": 4.04,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.21
        },
        {
            "dt": 1619546400,
            "temp": 289.43,
            "feels_like": 289.23,
            "pressure": 1007,
            "humidity": 81,
            "dew_point": 285.76,
            "uvi": 0,
            "clouds": 86,
            "visibility": 10000,
            "wind_speed": 1.84,
            "wind_deg": 204,
            "wind_gust": 2.94,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.22
        },
        {
            "dt": 1619550000,
            "temp": 289.1,
            "feels_like": 288.94,
            "pressure": 1008,
            "humidity": 84,
            "dew_point": 286.01,
            "uvi": 0,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 2.01,
            "wind_deg": 166,
            "wind_gust": 3.86,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.01
        },
        {
            "dt": 1619553600,
            "temp": 289.06,
            "feels_like": 288.87,
            "pressure": 1007,
            "humidity": 83,
            "dew_point": 285.72,
            "uvi": 0,
            "clouds": 96,
            "visibility": 10000,
            "wind_speed": 0.85,
            "wind_deg": 198,
            "wind_gust": 1.8,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1619557200,
            "temp": 288.17,
            "feels_like": 288,
            "pressure": 1008,
            "humidity": 87,
            "dew_point": 285.61,
            "uvi": 0,
            "clouds": 78,
            "visibility": 10000,
            "wind_speed": 1.38,
            "wind_deg": 227,
            "wind_gust": 2.55,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.01
        },
        {
            "dt": 1619560800,
            "temp": 287.89,
            "feels_like": 287.77,
            "pressure": 1008,
            "humidity": 90,
            "dew_point": 285.85,
            "uvi": 0,
            "clouds": 67,
            "visibility": 10000,
            "wind_speed": 1.15,
            "wind_deg": 230,
            "wind_gust": 2.53,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.04
        },
    ],
    "daily": [
        {
            "dt": 1619521200,
            "sunrise": 1619496342,
            "sunset": 1619546076,
            "moonrise": 1619548260,
            "moonset": 1619497500,
            "moon_phase": 0.5,
            "temp": {
                "day": 292.3,
                "min": 286.68,
                "max": 293.09,
                "night": 288.17,
                "eve": 290.77,
                "morn": 287.2
            },
            "feels_like": {
                "day": 291.86,
                "night": 286.07,
                "eve": 290.52,
                "morn": 286.07
            },
            "pressure": 1006,
            "humidity": 61,
            "dew_point": 284.61,
            "wind_speed": 4.8,
            "wind_deg": 197,
            "wind_gust": 7.11,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": 41,
            "pop": 0.29,
            "uvi": 5.68
        },
        {
            "dt": 1619607600,
            "sunrise": 1619582661,
            "sunset": 1619632541,
            "moonrise": 1619639520,
            "moonset": 1619585940,
            "moon_phase": 0.55,
            "temp": {
                "day": 295.29,
                "min": 286.81,
                "max": 295.29,
                "night": 288.69,
                "eve": 292.32,
                "morn": 287.43
            },
            "feels_like": {
                "day": 294.89,
                "night": 287.26,
                "eve": 291.94,
                "morn": 287.26
            },
            "pressure": 1009,
            "humidity": 51,
            "dew_point": 284.27,
            "wind_speed": 5.03,
            "wind_deg": 232,
            "wind_gust": 5.26,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 15,
            "pop": 0.37,
            "rain": 0.22,
            "uvi": 7.26
        },
        {
            "dt": 1619690400,
            "sunrise": 1619668981,
            "sunset": 1619719005,
            "moonrise": 1619730600,
            "moonset": 1619674800,
            "moon_phase": 0.59,
            "temp": {
                "day": 293.91,
                "min": 286.54,
                "max": 295.68,
                "night": 290.31,
                "eve": 295.67,
                "morn": 286.54
            },
            "feels_like": {
                "day": 293.43,
                "night": 286.26,
                "eve": 295.2,
                "morn": 286.26
            },
            "pressure": 1014,
            "humidity": 53,
            "dew_point": 283.72,
            "wind_speed": 3.98,
            "wind_deg": 232,
            "wind_gust": 4.58,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 98,
            "pop": 0.09,
            "uvi": 5.61
        },
        {
            "dt": 1619776800,
            "sunrise": 1619755302,
            "sunset": 1619805469,
            "moonrise": 0,
            "moonset": 1619764080,
            "moon_phase": 0.63,
            "temp": {
                "day": 298.48,
                "min": 289.05,
                "max": 302.92,
                "night": 294.72,
                "eve": 302.92,
                "morn": 289.05
            },
            "feels_like": {
                "day": 298.03,
                "night": 288.47,
                "eve": 301.5,
                "morn": 288.47
            },
            "pressure": 1012,
            "humidity": 37,
            "dew_point": 282.64,
            "wind_speed": 1.72,
            "wind_deg": 328,
            "wind_gust": 3.04,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 54,
            "pop": 0,
            "uvi": 8.1
        },
        {
            "dt": 1619863200,
            "sunrise": 1619841625,
            "sunset": 1619891934,
            "moonrise": 1619821260,
            "moonset": 1619853960,
            "moon_phase": 0.66,
            "temp": {
                "day": 296.64,
                "min": 290.31,
                "max": 298.78,
                "night": 290.31,
                "eve": 297.7,
                "morn": 291.85
            },
            "feels_like": {
                "day": 296.45,
                "night": 291.55,
                "eve": 297.46,
                "morn": 291.55
            },
            "pressure": 1012,
            "humidity": 54,
            "dew_point": 286.5,
            "wind_speed": 6.38,
            "wind_deg": 218,
            "wind_gust": 12.58,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 99,
            "pop": 0.01,
            "uvi": 5.55
        },
        {
            "dt": 1619949600,
            "sunrise": 1619927949,
            "sunset": 1619978398,
            "moonrise": 1619911380,
            "moonset": 1619944140,
            "moon_phase": 0.7,
            "temp": {
                "day": 294.58,
                "min": 289.37,
                "max": 296.33,
                "night": 290.01,
                "eve": 295.58,
                "morn": 289.37
            },
            "feels_like": {
                "day": 294.21,
                "night": 289.19,
                "eve": 295.08,
                "morn": 289.19
            },
            "pressure": 1016,
            "humidity": 55,
            "dew_point": 284.88,
            "wind_speed": 4.6,
            "wind_deg": 226,
            "wind_gust": 5.45,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 52,
            "pop": 0,
            "uvi": 6
        },
        {
            "dt": 1620036000,
            "sunrise": 1620014274,
            "sunset": 1620064862,
            "moonrise": 1620000720,
            "moonset": 1620034680,
            "moon_phase": 0.75,
            "temp": {
                "day": 293.96,
                "min": 287.53,
                "max": 293.96,
                "night": 287.53,
                "eve": 290.75,
                "morn": 289.44
            },
            "feels_like": {
                "day": 293.51,
                "night": 289.03,
                "eve": 290.55,
                "morn": 289.03
            },
            "pressure": 1013,
            "humidity": 54,
            "dew_point": 284.08,
            "wind_speed": 3.28,
            "wind_deg": 244,
            "wind_gust": 3.9,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 55,
            "pop": 0.92,
            "rain": 2.79,
            "uvi": 6
        },
        {
            "dt": 1620122400,
            "sunrise": 1620100600,
            "sunset": 1620151326,
            "moonrise": 1620089520,
            "moonset": 1620125100,
            "moon_phase": 0.77,
            "temp": {
                "day": 291.84,
                "min": 286.67,
                "max": 294.05,
                "night": 286.98,
                "eve": 292.56,
                "morn": 286.67
            },
            "feels_like": {
                "day": 291.23,
                "night": 286.3,
                "eve": 291.97,
                "morn": 286.3
            },
            "pressure": 1014,
            "humidity": 56,
            "dew_point": 282.35,
            "wind_speed": 4.72,
            "wind_deg": 234,
            "wind_gust": 4.39,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 57,
            "pop": 0.2,
            "rain": 0.24,
            "uvi": 6
        }
    ]
};

export { defaultCity, defaultData };