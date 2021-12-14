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

const completeData = {
    "lat": 41.8947,
    "lon": 12.4839,
    "timezone": "Europe/Rome",
    "timezone_offset": 3600,

    "current": {
        "dt": 1639038712,
        "sunrise": 1639031168,
        "sunset": 1639064341,
        "temp": 8.96,
        "feels_like": 8.42,
        "pressure": 1002,
        "humidity": 86,
        "dew_point": 6.75,
        "uvi": 0.6,
        "clouds": 40,
        "visibility": 10000,
        "wind_speed": 1.54,
        "wind_deg": 90,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ]
    },
    "minutely": [
        {
            "dt": 1639038720,
            "precipitation": 0
        },
        {
            "dt": 1639038780,
            "precipitation": 0
        },
        {
            "dt": 1639038840,
            "precipitation": 0
        },
        {
            "dt": 1639038900,
            "precipitation": 0
        },
        {
            "dt": 1639038960,
            "precipitation": 0
        },
        {
            "dt": 1639039020,
            "precipitation": 0
        },
        {
            "dt": 1639039080,
            "precipitation": 0
        },
        {
            "dt": 1639039140,
            "precipitation": 0
        },
        {
            "dt": 1639039200,
            "precipitation": 0
        },
        {
            "dt": 1639039260,
            "precipitation": 0
        },
        {
            "dt": 1639039320,
            "precipitation": 0
        },
        {
            "dt": 1639039380,
            "precipitation": 0
        },
        {
            "dt": 1639039440,
            "precipitation": 0
        },
        {
            "dt": 1639039500,
            "precipitation": 0
        },
        {
            "dt": 1639039560,
            "precipitation": 0
        },
        {
            "dt": 1639039620,
            "precipitation": 0
        },
        {
            "dt": 1639039680,
            "precipitation": 0
        },
        {
            "dt": 1639039740,
            "precipitation": 0
        },
        {
            "dt": 1639039800,
            "precipitation": 0
        },
        {
            "dt": 1639039860,
            "precipitation": 0
        },
        {
            "dt": 1639039920,
            "precipitation": 0
        },
        {
            "dt": 1639039980,
            "precipitation": 0
        },
        {
            "dt": 1639040040,
            "precipitation": 0
        },
        {
            "dt": 1639040100,
            "precipitation": 0
        },
        {
            "dt": 1639040160,
            "precipitation": 0
        },
        {
            "dt": 1639040220,
            "precipitation": 0
        },
        {
            "dt": 1639040280,
            "precipitation": 0
        },
        {
            "dt": 1639040340,
            "precipitation": 0
        },
        {
            "dt": 1639040400,
            "precipitation": 0
        },
        {
            "dt": 1639040460,
            "precipitation": 0
        },
        {
            "dt": 1639040520,
            "precipitation": 0
        },
        {
            "dt": 1639040580,
            "precipitation": 0
        },
        {
            "dt": 1639040640,
            "precipitation": 0
        },
        {
            "dt": 1639040700,
            "precipitation": 0
        },
        {
            "dt": 1639040760,
            "precipitation": 0
        },
        {
            "dt": 1639040820,
            "precipitation": 0
        },
        {
            "dt": 1639040880,
            "precipitation": 0
        },
        {
            "dt": 1639040940,
            "precipitation": 0
        },
        {
            "dt": 1639041000,
            "precipitation": 0
        },
        {
            "dt": 1639041060,
            "precipitation": 0
        },
        {
            "dt": 1639041120,
            "precipitation": 0
        },
        {
            "dt": 1639041180,
            "precipitation": 0
        },
        {
            "dt": 1639041240,
            "precipitation": 0
        },
        {
            "dt": 1639041300,
            "precipitation": 0
        },
        {
            "dt": 1639041360,
            "precipitation": 0
        },
        {
            "dt": 1639041420,
            "precipitation": 0
        },
        {
            "dt": 1639041480,
            "precipitation": 0
        },
        {
            "dt": 1639041540,
            "precipitation": 0
        },
        {
            "dt": 1639041600,
            "precipitation": 0
        },
        {
            "dt": 1639041660,
            "precipitation": 0
        },
        {
            "dt": 1639041720,
            "precipitation": 0
        },
        {
            "dt": 1639041780,
            "precipitation": 0
        },
        {
            "dt": 1639041840,
            "precipitation": 0
        },
        {
            "dt": 1639041900,
            "precipitation": 0
        },
        {
            "dt": 1639041960,
            "precipitation": 0
        },
        {
            "dt": 1639042020,
            "precipitation": 0
        },
        {
            "dt": 1639042080,
            "precipitation": 0
        },
        {
            "dt": 1639042140,
            "precipitation": 0
        },
        {
            "dt": 1639042200,
            "precipitation": 0
        },
        {
            "dt": 1639042260,
            "precipitation": 0
        },
        {
            "dt": 1639042320,
            "precipitation": 0
        }
    ],
    "hourly": [
        {
            "dt": 1639036800,
            "temp": 9.3,
            "feels_like": 6.54,
            "pressure": 1002,
            "humidity": 81,
            "dew_point": 6.21,
            "uvi": 0.26,
            "clouds": 45,
            "visibility": 10000,
            // "wind_speed": 5.47,
            // "wind_deg": 240,
            "wind_gust": 10.09,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.93,
            "rain": {
                "1h": 0.77
            }
        },
        {
            "dt": 1639040400,
            "temp": 8.96,
            "feels_like": 5.91,
            "pressure": 1002,
            "humidity": 86,
            "dew_point": 6.75,
            "uvi": 0.6,
            "clouds": 40,
            "visibility": 10000,
            "wind_speed": 6.04,
            "wind_deg": 238,
            "wind_gust": 9.51,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0.71
        },
        {
            "dt": 1639044000,
            "temp": 9.52,
            "feels_like": 6.58,
            "pressure": 1002,
            "humidity": 81,
            "dew_point": 6.43,
            "uvi": 0.94,
            "clouds": 48,
            "visibility": 10000,
            "wind_speed": 6.15,
            "wind_deg": 233,
            "wind_gust": 9.38,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0.71
        },
        {
            "dt": 1639047600,
            "temp": 10.26,
            "feels_like": 9.3,
            "pressure": 1002,
            "humidity": 75,
            "dew_point": 6.03,
            "uvi": 1.1,
            "clouds": 55,
            "visibility": 10000,
            "wind_speed": 5.86,
            "wind_deg": 228,
            "wind_gust": 8.72,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.91,
            "rain": {
                "1h": 0.24
            }
        },
        {
            "dt": 1639051200,
            "temp": 11.03,
            "feels_like": 9.96,
            "pressure": 1001,
            "humidity": 68,
            "dew_point": 5.36,
            "uvi": 1.03,
            "clouds": 57,
            "visibility": 10000,
            "wind_speed": 5.16,
            "wind_deg": 224,
            "wind_gust": 7.34,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.91,
            "rain": {
                "1h": 0.18
            }
        },
        {
            "dt": 1639054800,
            "temp": 11.4,
            "feels_like": 10.29,
            "pressure": 1001,
            "humidity": 65,
            "dew_point": 5.06,
            "uvi": 0.65,
            "clouds": 45,
            "visibility": 10000,
            "wind_speed": 4.34,
            "wind_deg": 240,
            "wind_gust": 6,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.8,
            "rain": {
                "1h": 0.43
            }
        },
        {
            "dt": 1639058400,
            "temp": 11.38,
            "feels_like": 10.22,
            "pressure": 1001,
            "humidity": 63,
            "dew_point": 4.37,
            "uvi": 0.34,
            "clouds": 49,
            "visibility": 10000,
            "wind_speed": 3.2,
            "wind_deg": 251,
            "wind_gust": 4.94,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.8,
            "rain": {
                "1h": 0.71
            }
        },
        {
            "dt": 1639062000,
            "temp": 10.15,
            "feels_like": 9.02,
            "pressure": 1002,
            "humidity": 69,
            "dew_point": 4.42,
            "uvi": 0.11,
            "clouds": 53,
            "visibility": 10000,
            "wind_speed": 2.15,
            "wind_deg": 254,
            "wind_gust": 3.63,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.78,
            "rain": {
                "1h": 0.69
            }
        },
        {
            "dt": 1639065600,
            "temp": 8.66,
            "feels_like": 7.79,
            "pressure": 1002,
            "humidity": 75,
            "dew_point": 4.19,
            "uvi": 0,
            "clouds": 55,
            "visibility": 10000,
            "wind_speed": 1.82,
            "wind_deg": 270,
            "wind_gust": 2.91,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.78,
            "rain": {
                "1h": 0.8
            }
        },
        {
            "dt": 1639069200,
            "temp": 8.64,
            "feels_like": 8.64,
            "pressure": 1003,
            "humidity": 73,
            "dew_point": 3.85,
            "uvi": 0,
            "clouds": 61,
            "visibility": 10000,
            "wind_speed": 0.78,
            "wind_deg": 309,
            "wind_gust": 1.95,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.79,
            "rain": {
                "1h": 0.47
            }
        },
        {
            "dt": 1639072800,
            "temp": 8.33,
            "feels_like": 8.33,
            "pressure": 1003,
            "humidity": 75,
            "dew_point": 3.84,
            "uvi": 0,
            "clouds": 66,
            "visibility": 10000,
            "wind_speed": 1.02,
            "wind_deg": 20,
            "wind_gust": 1.51,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.83
        },
        {
            "dt": 1639076400,
            "temp": 8.45,
            "feels_like": 7.75,
            "pressure": 1004,
            "humidity": 76,
            "dew_point": 4.13,
            "uvi": 0,
            "clouds": 84,
            "visibility": 10000,
            "wind_speed": 1.62,
            "wind_deg": 31,
            "wind_gust": 2.34,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.3
        },
        {
            "dt": 1639080000,
            "temp": 8.42,
            "feels_like": 7.42,
            "pressure": 1004,
            "humidity": 77,
            "dew_point": 4.31,
            "uvi": 0,
            "clouds": 87,
            "visibility": 10000,
            "wind_speed": 1.92,
            "wind_deg": 24,
            "wind_gust": 2.89,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.31
        },
        {
            "dt": 1639083600,
            "temp": 8.37,
            "feels_like": 7.41,
            "pressure": 1005,
            "humidity": 77,
            "dew_point": 4.4,
            "uvi": 0,
            "clouds": 91,
            "visibility": 10000,
            "wind_speed": 1.87,
            "wind_deg": 5,
            "wind_gust": 2.68,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.3
        },
        {
            "dt": 1639087200,
            "temp": 8.26,
            "feels_like": 7.37,
            "pressure": 1005,
            "humidity": 78,
            "dew_point": 4.39,
            "uvi": 0,
            "clouds": 93,
            "visibility": 10000,
            "wind_speed": 1.78,
            "wind_deg": 7,
            "wind_gust": 2.57,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.27
        },
        {
            "dt": 1639090800,
            "temp": 8.22,
            "feels_like": 7.68,
            "pressure": 1006,
            "humidity": 78,
            "dew_point": 4.36,
            "uvi": 0,
            "clouds": 95,
            "visibility": 10000,
            "wind_speed": 1.45,
            "wind_deg": 17,
            "wind_gust": 1.87,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.3
        },
        {
            "dt": 1639094400,
            "temp": 8.04,
            "feels_like": 8.04,
            "pressure": 1005,
            "humidity": 78,
            "dew_point": 4.29,
            "uvi": 0,
            "clouds": 96,
            "visibility": 10000,
            "wind_speed": 1.3,
            "wind_deg": 14,
            "wind_gust": 1.61,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.36
        },
        {
            "dt": 1639098000,
            "temp": 7.32,
            "feels_like": 7.32,
            "pressure": 1006,
            "humidity": 80,
            "dew_point": 3.9,
            "uvi": 0,
            "clouds": 86,
            "visibility": 10000,
            "wind_speed": 1.29,
            "wind_deg": 354,
            "wind_gust": 1.43,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.45
        },
        {
            "dt": 1639101600,
            "temp": 7.15,
            "feels_like": 6.39,
            "pressure": 1006,
            "humidity": 82,
            "dew_point": 3.99,
            "uvi": 0,
            "clouds": 89,
            "visibility": 10000,
            "wind_speed": 1.51,
            "wind_deg": 358,
            "wind_gust": 1.9,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.37
        },
        {
            "dt": 1639105200,
            "temp": 6.9,
            "feels_like": 5.92,
            "pressure": 1006,
            "humidity": 83,
            "dew_point": 4.03,
            "uvi": 0,
            "clouds": 80,
            "visibility": 10000,
            "wind_speed": 1.67,
            "wind_deg": 8,
            "wind_gust": 2.45,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.32
        },
        {
            "dt": 1639108800,
            "temp": 6.63,
            "feels_like": 5.71,
            "pressure": 1006,
            "humidity": 84,
            "dew_point": 3.9,
            "uvi": 0,
            "clouds": 75,
            "visibility": 10000,
            "wind_speed": 1.58,
            "wind_deg": 11,
            "wind_gust": 2.2,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.28
        },
        {
            "dt": 1639112400,
            "temp": 5.96,
            "feels_like": 5.14,
            "pressure": 1006,
            "humidity": 86,
            "dew_point": 3.48,
            "uvi": 0,
            "clouds": 68,
            "visibility": 10000,
            "wind_speed": 1.42,
            "wind_deg": 359,
            "wind_gust": 1.65,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.2
        },
        {
            "dt": 1639116000,
            "temp": 5.54,
            "feels_like": 5.54,
            "pressure": 1007,
            "humidity": 86,
            "dew_point": 3.23,
            "uvi": 0,
            "clouds": 59,
            "visibility": 10000,
            "wind_speed": 1.26,
            "wind_deg": 18,
            "wind_gust": 1.31,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.2
        },
        {
            "dt": 1639119600,
            "temp": 5.8,
            "feels_like": 5.8,
            "pressure": 1007,
            "humidity": 85,
            "dew_point": 3.25,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 0.83,
            "wind_deg": 13,
            "wind_gust": 0.87,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1639123200,
            "temp": 6.98,
            "feels_like": 6.98,
            "pressure": 1007,
            "humidity": 80,
            "dew_point": 3.53,
            "uvi": 0.27,
            "clouds": 66,
            "visibility": 10000,
            "wind_speed": 0.95,
            "wind_deg": 71,
            "wind_gust": 1.18,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1639126800,
            "temp": 8.34,
            "feels_like": 7.88,
            "pressure": 1008,
            "humidity": 74,
            "dew_point": 3.79,
            "uvi": 0.62,
            "clouds": 74,
            "visibility": 10000,
            "wind_speed": 1.39,
            "wind_deg": 92,
            "wind_gust": 1.53,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1639130400,
            "temp": 9.65,
            "feels_like": 8.63,
            "pressure": 1007,
            "humidity": 69,
            "dew_point": 3.94,
            "uvi": 0.66,
            "clouds": 80,
            "visibility": 10000,
            "wind_speed": 2.2,
            "wind_deg": 122,
            "wind_gust": 2.9,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1639134000,
            "temp": 10.64,
            "feels_like": 9.43,
            "pressure": 1005,
            "humidity": 64,
            "dew_point": 3.95,
            "uvi": 0.78,
            "clouds": 84,
            "visibility": 10000,
            "wind_speed": 2.41,
            "wind_deg": 150,
            "wind_gust": 4.41,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1639137600,
            "temp": 10.92,
            "feels_like": 9.76,
            "pressure": 1005,
            "humidity": 65,
            "dew_point": 4.33,
            "uvi": 0.72,
            "clouds": 87,
            "visibility": 10000,
            "wind_speed": 3.71,
            "wind_deg": 199,
            "wind_gust": 6.5,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.21,
            "rain": {
                "1h": 0.38
            }
        },
        {
            "dt": 1639141200,
            "temp": 10.35,
            "feels_like": 9.27,
            "pressure": 1003,
            "humidity": 70,
            "dew_point": 4.8,
            "uvi": 0.22,
            "clouds": 100,
            "visibility": 9544,
            "wind_speed": 5.58,
            "wind_deg": 223,
            "wind_gust": 7.93,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.94,
            "rain": {
                "1h": 0.8
            }
        },
        {
            "dt": 1639144800,
            "temp": 9.78,
            "feels_like": 7.46,
            "pressure": 1003,
            "humidity": 73,
            "dew_point": 4.85,
            "uvi": 0.12,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 4.62,
            "wind_deg": 207,
            "wind_gust": 8.24,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 1,
            "rain": {
                "1h": 0.52
            }
        },
        {
            "dt": 1639148400,
            "temp": 9.49,
            "feels_like": 7.27,
            "pressure": 1001,
            "humidity": 77,
            "dew_point": 5.34,
            "uvi": 0.03,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 4.23,
            "wind_deg": 186,
            "wind_gust": 7.91,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 1,
            "rain": {
                "1h": 0.28
            }
        },
        {
            "dt": 1639152000,
            "temp": 9.21,
            "feels_like": 6.51,
            "pressure": 1000,
            "humidity": 79,
            "dew_point": 5.53,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 5.23,
            "wind_deg": 172,
            "wind_gust": 9.38,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.98,
            "rain": {
                "1h": 0.5
            }
        },
        {
            "dt": 1639155600,
            "temp": 9.14,
            "feels_like": 5.77,
            "pressure": 999,
            "humidity": 78,
            "dew_point": 5.31,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 7.21,
            "wind_deg": 147,
            "wind_gust": 12.03,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,
            "rain": {
                "1h": 0.58
            }
        },
        {
            "dt": 1639159200,
            "temp": 8.64,
            "feels_like": 5.05,
            "pressure": 998,
            "humidity": 85,
            "dew_point": 6.03,
            "uvi": 0,
            "clouds": 100,
            "visibility": 7979,
            "wind_speed": 7.49,
            "wind_deg": 141,
            "wind_gust": 13.14,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,
            "rain": {
                "1h": 1.45
            }
        },
        {
            "dt": 1639162800,
            "temp": 9.34,
            "feels_like": 6.6,
            "pressure": 996,
            "humidity": 82,
            "dew_point": 6.02,
            "uvi": 0,
            "clouds": 100,
            "visibility": 8789,
            "wind_speed": 5.44,
            "wind_deg": 182,
            "wind_gust": 12.61,
            "weather": [
                {
                    "id": 502,
                    "main": "Rain",
                    "description": "heavy intensity rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,
            "rain": {
                "1h": 4.93
            }
        },
        {
            "dt": 1639166400,
            "temp": 10.11,
            "feels_like": 9.08,
            "pressure": 996,
            "humidity": 73,
            "dew_point": 5.19,
            "uvi": 0,
            "clouds": 96,
            "visibility": 10000,
            "wind_speed": 4.93,
            "wind_deg": 220,
            "wind_gust": 10,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,
            "rain": {
                "1h": 1.18
            }
        },
        {
            "dt": 1639170000,
            "temp": 9.7,
            "feels_like": 7.19,
            "pressure": 996,
            "humidity": 73,
            "dew_point": 4.77,
            "uvi": 0,
            "clouds": 97,
            "visibility": 7198,
            "wind_speed": 5.07,
            "wind_deg": 238,
            "wind_gust": 9.69,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,
            "rain": {
                "1h": 1.06
            }
        },
        {
            "dt": 1639173600,
            "temp": 8.5,
            "feels_like": 6.59,
            "pressure": 995,
            "humidity": 80,
            "dew_point": 4.93,
            "uvi": 0,
            "clouds": 97,
            "visibility": 7425,
            "wind_speed": 3.2,
            "wind_deg": 221,
            "wind_gust": 6.45,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,
            "rain": {
                "1h": 1.44
            }
        },
        {
            "dt": 1639177200,
            "temp": 8.25,
            "feels_like": 7.68,
            "pressure": 994,
            "humidity": 82,
            "dew_point": 5.15,
            "uvi": 0,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 1.48,
            "wind_deg": 176,
            "wind_gust": 4.05,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,
            "rain": {
                "1h": 1
            }
        },
        {
            "dt": 1639180800,
            "temp": 7.89,
            "feels_like": 6.57,
            "pressure": 993,
            "humidity": 84,
            "dew_point": 5.16,
            "uvi": 0,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 2.19,
            "wind_deg": 89,
            "wind_gust": 4.64,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 1,
            "rain": {
                "1h": 0.58
            }
        },
        {
            "dt": 1639184400,
            "temp": 7.34,
            "feels_like": 5.57,
            "pressure": 993,
            "humidity": 87,
            "dew_point": 5.04,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 2.63,
            "wind_deg": 69,
            "wind_gust": 5.92,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.45,
            "rain": {
                "1h": 0.44
            }
        },
        {
            "dt": 1639188000,
            "temp": 6.59,
            "feels_like": 4.63,
            "pressure": 993,
            "humidity": 89,
            "dew_point": 4.68,
            "uvi": 0,
            "clouds": 96,
            "visibility": 10000,
            "wind_speed": 2.7,
            "wind_deg": 46,
            "wind_gust": 5.6,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.45,
            "rain": {
                "1h": 0.26
            }
        },
        {
            "dt": 1639191600,
            "temp": 6.53,
            "feels_like": 4.62,
            "pressure": 993,
            "humidity": 89,
            "dew_point": 4.67,
            "uvi": 0,
            "clouds": 97,
            "visibility": 10000,
            "wind_speed": 2.62,
            "wind_deg": 18,
            "wind_gust": 4.92,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.49,
            "rain": {
                "1h": 0.21
            }
        },
        {
            "dt": 1639195200,
            "temp": 6.5,
            "feels_like": 4.46,
            "pressure": 993,
            "humidity": 89,
            "dew_point": 4.55,
            "uvi": 0,
            "clouds": 95,
            "visibility": 10000,
            "wind_speed": 2.78,
            "wind_deg": 11,
            "wind_gust": 5.07,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "pop": 0.49,
            "rain": {
                "1h": 0.13
            }
        },
        {
            "dt": 1639198800,
            "temp": 6.02,
            "feels_like": 3.5,
            "pressure": 993,
            "humidity": 88,
            "dew_point": 3.9,
            "uvi": 0,
            "clouds": 91,
            "visibility": 10000,
            "wind_speed": 3.34,
            "wind_deg": 12,
            "wind_gust": 6.81,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.45
        },
        {
            "dt": 1639202400,
            "temp": 5.25,
            "feels_like": 2.24,
            "pressure": 994,
            "humidity": 88,
            "dew_point": 3.19,
            "uvi": 0,
            "clouds": 80,
            "visibility": 10000,
            "wind_speed": 3.87,
            "wind_deg": 4,
            "wind_gust": 8.66,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.45
        },
        {
            "dt": 1639206000,
            "temp": 5.29,
            "feels_like": 2.05,
            "pressure": 995,
            "humidity": 86,
            "dew_point": 2.92,
            "uvi": 0,
            "clouds": 9,
            "visibility": 10000,
            "wind_speed": 4.3,
            "wind_deg": 3,
            "wind_gust": 9.88,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0.23
        }
    ],
    "daily": [
        {
            "dt": 1639047600,
            "sunrise": 1639031168,
            "sunset": 1639064341,
            "moonrise": 1639048140,
            "moonset": 1639085280,
            "moon_phase": 0.19,
            "temp": {
                "day": 10.26,
                "min": 8.26,
                "max": 11.88,
                "night": 8.26,
                "eve": 8.64,
                "morn": 9.86
            },
            "feels_like": {
                "day": 9.3,
                "night": 7.37,
                "eve": 8.64,
                "morn": 7.16
            },
            "pressure": 1002,
            "humidity": 75,
            "dew_point": 6.03,
            "wind_speed": 7.15,
            "wind_deg": 246,
            "wind_gust": 12.16,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 55,
            "pop": 0.93,
            "rain": 7.61,
            "uvi": 1.1
        },
        {
            "dt": 1639134000,
            "sunrise": 1639117620,
            "sunset": 1639150743,
            "moonrise": 1639136220,
            "moonset": 1639175880,
            "moon_phase": 0.23,
            "temp": {
                "day": 10.64,
                "min": 5.54,
                "max": 10.92,
                "night": 8.5,
                "eve": 9.14,
                "morn": 5.96
            },
            "feels_like": {
                "day": 9.43,
                "night": 6.59,
                "eve": 5.77,
                "morn": 5.14
            },
            "pressure": 1005,
            "humidity": 64,
            "dew_point": 3.95,
            "wind_speed": 7.49,
            "wind_deg": 141,
            "wind_gust": 13.14,
            "weather": [
                {
                    "id": 502,
                    "main": "Rain",
                    "description": "heavy intensity rain",
                    "icon": "10d"
                }
            ],
            "clouds": 84,
            "pop": 1,
            "rain": 13.12,
            "uvi": 0.78
        },
        {
            "dt": 1639220400,
            "sunrise": 1639204070,
            "sunset": 1639237146,
            "moonrise": 1639224060,
            "moonset": 0,
            "moon_phase": 0.25,
            "temp": {
                "day": 7.79,
                "min": 5.25,
                "max": 9.15,
                "night": 6.95,
                "eve": 8.07,
                "morn": 6.02
            },
            "feels_like": {
                "day": 4.06,
                "night": 3.05,
                "eve": 4.07,
                "morn": 3.5
            },
            "pressure": 998,
            "humidity": 77,
            "dew_point": 3.72,
            "wind_speed": 8.64,
            "wind_deg": 1,
            "wind_gust": 14.65,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 49,
            "pop": 1,
            "rain": 2.62,
            "uvi": 0.63
        },
        {
            "dt": 1639306800,
            "sunrise": 1639290518,
            "sunset": 1639323552,
            "moonrise": 1639311780,
            "moonset": 1639266180,
            "moon_phase": 0.29,
            "temp": {
                "day": 11.08,
                "min": 4.2,
                "max": 11.08,
                "night": 5.36,
                "eve": 6.52,
                "morn": 4.2
            },
            "feels_like": {
                "day": 9.52,
                "night": 3.7,
                "eve": 4.76,
                "morn": 0.8
            },
            "pressure": 1020,
            "humidity": 49,
            "dew_point": 0.52,
            "wind_speed": 6.69,
            "wind_deg": 356,
            "wind_gust": 13.59,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 1.26
        },
        {
            "dt": 1639393200,
            "sunrise": 1639376964,
            "sunset": 1639409961,
            "moonrise": 1639399440,
            "moonset": 1639356420,
            "moon_phase": 0.33,
            "temp": {
                "day": 10.52,
                "min": 3.59,
                "max": 10.52,
                "night": 5.57,
                "eve": 6.79,
                "morn": 3.59
            },
            "feels_like": {
                "day": 8.72,
                "night": 4.07,
                "eve": 5.65,
                "morn": 1.56
            },
            "pressure": 1024,
            "humidity": 42,
            "dew_point": -2.15,
            "wind_speed": 2.25,
            "wind_deg": 26,
            "wind_gust": 3.06,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 1.35
        },
        {
            "dt": 1639479600,
            "sunrise": 1639463409,
            "sunset": 1639496372,
            "moonrise": 1639487160,
            "moonset": 1639446480,
            "moon_phase": 0.36,
            "temp": {
                "day": 10.88,
                "min": 3.67,
                "max": 10.88,
                "night": 5.92,
                "eve": 7.04,
                "morn": 3.67
            },
            "feels_like": {
                "day": 8.99,
                "night": 4.35,
                "eve": 5.84,
                "morn": 1.5
            },
            "pressure": 1021,
            "humidity": 37,
            "dew_point": -3.45,
            "wind_speed": 2.39,
            "wind_deg": 15,
            "wind_gust": 3.58,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 2
        },
        {
            "dt": 1639566000,
            "sunrise": 1639549851,
            "sunset": 1639582785,
            "moonrise": 1639574940,
            "moonset": 1639536600,
            "moon_phase": 0.39,
            "temp": {
                "day": 11.67,
                "min": 4.42,
                "max": 11.67,
                "night": 6.37,
                "eve": 7.59,
                "morn": 4.42
            },
            "feels_like": {
                "day": 10.07,
                "night": 4.74,
                "eve": 6.54,
                "morn": 2.42
            },
            "pressure": 1024,
            "humidity": 45,
            "dew_point": -0.07,
            "wind_speed": 2.27,
            "wind_deg": 26,
            "wind_gust": 2.97,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 1,
            "pop": 0,
            "uvi": 2
        },
        {
            "dt": 1639652400,
            "sunrise": 1639636292,
            "sunset": 1639669200,
            "moonrise": 1639662900,
            "moonset": 1639626720,
            "moon_phase": 0.42,
            "temp": {
                "day": 11.23,
                "min": 4.22,
                "max": 11.23,
                "night": 6.61,
                "eve": 7.75,
                "morn": 4.22
            },
            "feels_like": {
                "day": 9.69,
                "night": 5.54,
                "eve": 7.75,
                "morn": 2.13
            },
            "pressure": 1028,
            "humidity": 49,
            "dew_point": 0.67,
            "wind_speed": 2.41,
            "wind_deg": 21,
            "wind_gust": 3.53,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 7,
            "pop": 0,
            "uvi": 2
        }
    ],
    "alerts": [
        {
            "sender_name": "Italian Air Force National Meteorological Service",
            "event": "Yellow Wind Warning",
            "start": 1639008000,
            "end": 1639051140,
            "description": "coasts\n (DISCLAIMER: \"Information provided on METEOALARM for Italy regard only the intensity and recurrence of the phenomena, further details can be found at www.meteoam.it. METEOALARM information do not provide the assessment of impact on the territory and they do not represent the Official Alerts messages that are issued by the National Civil Protection Service www.protezionecivile.it\")",
            "tags": [
                "Wind"
            ]
        },
        {
            "sender_name": "Italian Air Force National Meteorological Service",
            "event": "Orange Thunderstorm Warning",
            "start": 1639137600,
            "end": 1639177140,
            "description": "No Special Awareness Required\n (DISCLAIMER: \"Information provided on METEOALARM for Italy regard only the intensity and recurrence of the phenomena, further details can be found at www.meteoam.it. METEOALARM information do not provide the assessment of impact on the territory and they do not represent the Official Alerts messages that are issued by the National Civil Protection Service www.protezionecivile.it\")",
            "tags": [
                "Thunderstorm"
            ]
        },
        {
            "sender_name": "Italian Air Force National Meteorological Service",
            "event": "Yellow Rain Warning",
            "start": 1639137600,
            "end": 1639177140,
            "description": "No Special Awareness Required\n (DISCLAIMER: \"Information provided on METEOALARM for Italy regard only the intensity and recurrence of the phenomena, further details can be found at www.meteoam.it. METEOALARM information do not provide the assessment of impact on the territory and they do not represent the Official Alerts messages that are issued by the National Civil Protection Service www.protezionecivile.it\")",
            "tags": [
                "Rain"
            ]
        },
        {
            "sender_name": "Italian Air Force National Meteorological Service",
            "event": "Yellow Snow-ice Warning",
            "start": 1639137600,
            "end": 1639177140,
            "description": "Appennines > 800 m\n (DISCLAIMER: \"Information provided on METEOALARM for Italy regard only the intensity and recurrence of the phenomena, further details can be found at www.meteoam.it. METEOALARM information do not provide the assessment of impact on the territory and they do not represent the Official Alerts messages that are issued by the National Civil Protection Service www.protezionecivile.it\")",
            "tags": [
                "Snow/Ice"
            ]
        }
    ]
};

export { defaultCity, defaultData, completeData };