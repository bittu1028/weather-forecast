export const mockForecastApiData = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1663092000,
      main: {
        temp: 9.34,
        feels_like: 7.44,
        temp_min: 9.34,
        temp_max: 11.44,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1019,
        humidity: 76,
        temp_kf: -2.1,
      },
      weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n' }],
      clouds: { all: 40 },
      wind: { speed: 3.5, deg: 202, gust: 5.54 },
      visibility: 10000,
      pop: 0.06,
      sys: { pod: 'n' },
      dt_txt: '2022-09-13 18:00:00',
    },
    {
      dt: 1663102800,
      main: {
        temp: 10.2,
        feels_like: 9.21,
        temp_min: 10.2,
        temp_max: 11.93,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1020,
        humidity: 74,
        temp_kf: -1.73,
      },
      weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
      clouds: { all: 35 },
      wind: { speed: 2.46, deg: 181, gust: 4.31 },
      visibility: 10000,
      pop: 0.15,
      sys: { pod: 'd' },
      dt_txt: '2022-09-13 21:00:00',
    },
    {
      dt: 1663113600,
      main: {
        temp: 12.62,
        feels_like: 11.69,
        temp_min: 12.62,
        temp_max: 14.26,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1020,
        humidity: 67,
        temp_kf: -1.64,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 42 },
      wind: { speed: 2.67, deg: 104, gust: 2.98 },
      visibility: 10000,
      pop: 0.35,
      rain: { '3h': 0.65 },
      sys: { pod: 'd' },
      dt_txt: '2022-09-14 00:00:00',
    },
    {
      dt: 1663124400,
      main: {
        temp: 15.47,
        feels_like: 14.56,
        temp_min: 15.47,
        temp_max: 15.47,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1018,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 45 },
      wind: { speed: 3.79, deg: 93, gust: 3.2 },
      visibility: 10000,
      pop: 0.54,
      rain: { '3h': 0.31 },
      sys: { pod: 'd' },
      dt_txt: '2022-09-14 03:00:00',
    },
    {
      dt: 1663135200,
      main: {
        temp: 14.83,
        feels_like: 13.94,
        temp_min: 14.83,
        temp_max: 14.83,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1016,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
      clouds: { all: 42 },
      wind: { speed: 4.27, deg: 80, gust: 4.23 },
      visibility: 10000,
      pop: 0.21,
      sys: { pod: 'd' },
      dt_txt: '2022-09-14 06:00:00',
    },
    {
      dt: 1663146000,
      main: {
        temp: 13.36,
        feels_like: 12.61,
        temp_min: 13.36,
        temp_max: 13.36,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1017,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }],
      clouds: { all: 16 },
      wind: { speed: 4.46, deg: 53, gust: 6.04 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-14 09:00:00',
    },
    {
      dt: 1663156800,
      main: {
        temp: 12.55,
        feels_like: 11.85,
        temp_min: 12.55,
        temp_max: 12.55,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1016,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }],
      clouds: { all: 23 },
      wind: { speed: 3.18, deg: 1, gust: 4.7 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-14 12:00:00',
    },
    {
      dt: 1663167600,
      main: {
        temp: 11.42,
        feels_like: 10.76,
        temp_min: 11.42,
        temp_max: 11.42,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1015,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 2.09, deg: 310, gust: 2.51 },
      visibility: 10000,
      pop: 0.37,
      rain: { '3h': 0.15 },
      sys: { pod: 'n' },
      dt_txt: '2022-09-14 15:00:00',
    },
    {
      dt: 1663178400,
      main: {
        temp: 11.15,
        feels_like: 10.54,
        temp_min: 11.15,
        temp_max: 11.15,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1013,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
      clouds: { all: 100 },
      wind: { speed: 2.02, deg: 330, gust: 2.8 },
      visibility: 10000,
      pop: 0.27,
      sys: { pod: 'n' },
      dt_txt: '2022-09-14 18:00:00',
    },
    {
      dt: 1663189200,
      main: {
        temp: 11.63,
        feels_like: 11.04,
        temp_min: 11.63,
        temp_max: 11.63,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1012,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
      clouds: { all: 100 },
      wind: { speed: 1.89, deg: 326, gust: 3.43 },
      visibility: 10000,
      pop: 0.29,
      sys: { pod: 'd' },
      dt_txt: '2022-09-14 21:00:00',
    },
    {
      dt: 1663200000,
      main: {
        temp: 15.72,
        feels_like: 14.97,
        temp_min: 15.72,
        temp_max: 15.72,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1011,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 99 },
      wind: { speed: 4.14, deg: 345, gust: 5.56 },
      visibility: 10000,
      pop: 0.31,
      rain: { '3h': 0.15 },
      sys: { pod: 'd' },
      dt_txt: '2022-09-15 00:00:00',
    },
    {
      dt: 1663210800,
      main: {
        temp: 16.29,
        feels_like: 15.52,
        temp_min: 16.29,
        temp_max: 16.29,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1008,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
      clouds: { all: 99 },
      wind: { speed: 3.13, deg: 345, gust: 4.93 },
      visibility: 10000,
      pop: 0.2,
      sys: { pod: 'd' },
      dt_txt: '2022-09-15 03:00:00',
    },
    {
      dt: 1663221600,
      main: {
        temp: 14.39,
        feels_like: 13.79,
        temp_min: 14.39,
        temp_max: 14.39,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1006,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 99 },
      wind: { speed: 2.42, deg: 37, gust: 3.89 },
      visibility: 10000,
      pop: 0.47,
      rain: { '3h': 0.44 },
      sys: { pod: 'd' },
      dt_txt: '2022-09-15 06:00:00',
    },
    {
      dt: 1663232400,
      main: {
        temp: 13.24,
        feels_like: 12.97,
        temp_min: 13.24,
        temp_max: 13.24,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1005,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 5.32, deg: 19, gust: 9.66 },
      visibility: 10000,
      pop: 1,
      rain: { '3h': 1.85 },
      sys: { pod: 'n' },
      dt_txt: '2022-09-15 09:00:00',
    },
    {
      dt: 1663243200,
      main: {
        temp: 13.51,
        feels_like: 13.34,
        temp_min: 13.51,
        temp_max: 13.51,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1002,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [{ id: 501, main: 'Rain', description: 'moderate rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 5.17, deg: 25, gust: 9.39 },
      visibility: 3903,
      pop: 1,
      rain: { '3h': 5.9 },
      sys: { pod: 'n' },
      dt_txt: '2022-09-15 12:00:00',
    },
    {
      dt: 1663254000,
      main: {
        temp: 13.75,
        feels_like: 13.58,
        temp_min: 13.75,
        temp_max: 13.75,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1000,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [{ id: 501, main: 'Rain', description: 'moderate rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 6.07, deg: 347, gust: 11.7 },
      visibility: 10000,
      pop: 1,
      rain: { '3h': 7.65 },
      sys: { pod: 'n' },
      dt_txt: '2022-09-15 15:00:00',
    },
    {
      dt: 1663264800,
      main: {
        temp: 13.22,
        feels_like: 13.03,
        temp_min: 13.22,
        temp_max: 13.22,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 998,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 4.72, deg: 335, gust: 9.31 },
      visibility: 10000,
      pop: 1,
      rain: { '3h': 0.64 },
      sys: { pod: 'n' },
      dt_txt: '2022-09-15 18:00:00',
    },
    {
      dt: 1663275600,
      main: {
        temp: 13.39,
        feels_like: 13.06,
        temp_min: 13.39,
        temp_max: 13.39,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 998,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
      clouds: { all: 91 },
      wind: { speed: 3.94, deg: 321, gust: 8.19 },
      visibility: 10000,
      pop: 0.08,
      sys: { pod: 'd' },
      dt_txt: '2022-09-15 21:00:00',
    },
    {
      dt: 1663286400,
      main: {
        temp: 17.89,
        feels_like: 17.3,
        temp_min: 17.89,
        temp_max: 17.89,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 999,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
      clouds: { all: 74 },
      wind: { speed: 4.23, deg: 298, gust: 6.83 },
      visibility: 10000,
      pop: 0.03,
      sys: { pod: 'd' },
      dt_txt: '2022-09-16 00:00:00',
    },
    {
      dt: 1663297200,
      main: {
        temp: 21.39,
        feels_like: 20.6,
        temp_min: 21.39,
        temp_max: 21.39,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 997,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
      clouds: { all: 5 },
      wind: { speed: 3.02, deg: 288, gust: 6.97 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-09-16 03:00:00',
    },
    {
      dt: 1663308000,
      main: {
        temp: 21.7,
        feels_like: 21,
        temp_min: 21.7,
        temp_max: 21.7,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 996,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
      clouds: { all: 39 },
      wind: { speed: 3.84, deg: 304, gust: 7.17 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-09-16 06:00:00',
    },
    {
      dt: 1663318800,
      main: {
        temp: 16.68,
        feels_like: 15.94,
        temp_min: 16.68,
        temp_max: 16.68,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 998,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }],
      clouds: { all: 23 },
      wind: { speed: 3.63, deg: 322, gust: 8.5 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-16 09:00:00',
    },
    {
      dt: 1663329600,
      main: {
        temp: 15.1,
        feels_like: 14.42,
        temp_min: 15.1,
        temp_max: 15.1,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 998,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }],
      clouds: { all: 12 },
      wind: { speed: 3.57, deg: 339, gust: 7.96 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-16 12:00:00',
    },
    {
      dt: 1663340400,
      main: {
        temp: 14.27,
        feels_like: 13.55,
        temp_min: 14.27,
        temp_max: 14.27,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 998,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
      clouds: { all: 3 },
      wind: { speed: 4.78, deg: 348, gust: 10.93 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-16 15:00:00',
    },
    {
      dt: 1663351200,
      main: {
        temp: 13.33,
        feels_like: 12.52,
        temp_min: 13.33,
        temp_max: 13.33,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 997,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
      clouds: { all: 4 },
      wind: { speed: 3.92, deg: 331, gust: 8.94 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-16 18:00:00',
    },
    {
      dt: 1663362000,
      main: {
        temp: 13.84,
        feels_like: 12.98,
        temp_min: 13.84,
        temp_max: 13.84,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 999,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
      clouds: { all: 3 },
      wind: { speed: 3.65, deg: 317, gust: 7.72 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-09-16 21:00:00',
    },
    {
      dt: 1663372800,
      main: {
        temp: 18.59,
        feels_like: 17.68,
        temp_min: 18.59,
        temp_max: 18.59,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 999,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
      clouds: { all: 2 },
      wind: { speed: 5.71, deg: 303, gust: 11.54 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-09-17 00:00:00',
    },
    {
      dt: 1663383600,
      main: {
        temp: 20.47,
        feels_like: 19.54,
        temp_min: 20.47,
        temp_max: 20.47,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 996,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
      clouds: { all: 83 },
      wind: { speed: 7.19, deg: 295, gust: 11.4 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-09-17 03:00:00',
    },
    {
      dt: 1663394400,
      main: {
        temp: 18.94,
        feels_like: 17.99,
        temp_min: 18.94,
        temp_max: 18.94,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 997,
        humidity: 42,
        temp_kf: 0,
      },
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
      clouds: { all: 82 },
      wind: { speed: 7.88, deg: 289, gust: 12.1 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-09-17 06:00:00',
    },
    {
      dt: 1663405200,
      main: {
        temp: 14.6,
        feels_like: 13.5,
        temp_min: 14.6,
        temp_max: 14.6,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1001,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }],
      clouds: { all: 17 },
      wind: { speed: 7.39, deg: 285, gust: 13.39 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-17 09:00:00',
    },
    {
      dt: 1663416000,
      main: {
        temp: 12.76,
        feels_like: 11.53,
        temp_min: 12.76,
        temp_max: 12.76,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1001,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
      clouds: { all: 9 },
      wind: { speed: 6.55, deg: 304, gust: 13.07 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-17 12:00:00',
    },
    {
      dt: 1663426800,
      main: {
        temp: 11.98,
        feels_like: 10.75,
        temp_min: 11.98,
        temp_max: 11.98,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1000,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
      clouds: { all: 0 },
      wind: { speed: 5.85, deg: 311, gust: 11.65 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-17 15:00:00',
    },
    {
      dt: 1663437600,
      main: {
        temp: 11.73,
        feels_like: 10.5,
        temp_min: 11.73,
        temp_max: 11.73,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 999,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
      clouds: { all: 2 },
      wind: { speed: 4.54, deg: 316, gust: 9.47 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-17 18:00:00',
    },
    {
      dt: 1663448400,
      main: {
        temp: 11.83,
        feels_like: 10.69,
        temp_min: 11.83,
        temp_max: 11.83,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1002,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
      clouds: { all: 26 },
      wind: { speed: 5.44, deg: 286, gust: 10.21 },
      visibility: 10000,
      pop: 0.01,
      sys: { pod: 'd' },
      dt_txt: '2022-09-17 21:00:00',
    },
    {
      dt: 1663459200,
      main: {
        temp: 13.97,
        feels_like: 12.86,
        temp_min: 13.97,
        temp_max: 13.97,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1003,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
      clouds: { all: 61 },
      wind: { speed: 5.46, deg: 263, gust: 10.72 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-09-18 00:00:00',
    },
    {
      dt: 1663470000,
      main: {
        temp: 17.43,
        feels_like: 16.33,
        temp_min: 17.43,
        temp_max: 17.43,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1002,
        humidity: 42,
        temp_kf: 0,
      },
      weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
      clouds: { all: 34 },
      wind: { speed: 7.99, deg: 253, gust: 10.96 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-09-18 03:00:00',
    },
    {
      dt: 1663480800,
      main: {
        temp: 17.99,
        feels_like: 17.02,
        temp_min: 17.99,
        temp_max: 17.99,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1003,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
      clouds: { all: 21 },
      wind: { speed: 7.1, deg: 255, gust: 10.04 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-09-18 06:00:00',
    },
    {
      dt: 1663491600,
      main: {
        temp: 14.11,
        feels_like: 13.09,
        temp_min: 14.11,
        temp_max: 14.11,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1007,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
      clouds: { all: 3 },
      wind: { speed: 6.55, deg: 267, gust: 11.14 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-18 09:00:00',
    },
    {
      dt: 1663502400,
      main: {
        temp: 12.02,
        feels_like: 10.97,
        temp_min: 12.02,
        temp_max: 12.02,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1008,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
      clouds: { all: 4 },
      wind: { speed: 4.6, deg: 268, gust: 9.3 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-18 12:00:00',
    },
    {
      dt: 1663513200,
      main: {
        temp: 10.8,
        feels_like: 9.74,
        temp_min: 10.8,
        temp_max: 10.8,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1008,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }],
      clouds: { all: 69 },
      wind: { speed: 3.59, deg: 278, gust: 6.76 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-09-18 15:00:00',
    },
  ],
  city: {
    id: 2147714,
    name: 'Sydney',
    coord: { lat: -33.8679, lon: 151.2073 },
    country: 'AU',
    population: 1000000,
    timezone: 36000,
    sunrise: 1663099005,
    sunset: 1663141526,
  },
};

export const mockCurrentWeatherApiData = {
  coord: { lon: 151.2073, lat: -33.8679 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
  base: 'stations',
  main: {
    temp: 18.49,
    feels_like: 17.49,
    temp_min: 16.61,
    temp_max: 20.5,
    pressure: 1015,
    humidity: 42,
  },
  visibility: 10000,
  wind: { speed: 4.63, deg: 120 },
  clouds: { all: 0 },
  dt: 1662961179,
  sys: {
    type: 2,
    id: 2002865,
    country: 'AU',
    sunrise: 1662926372,
    sunset: 1662968647,
  },
  timezone: 36000,
  id: 2147714,
  name: 'Sydney',
  cod: 200,
};

export const mockCombinedRawData: any = [mockCurrentWeatherApiData, mockForecastApiData];
