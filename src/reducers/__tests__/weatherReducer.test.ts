import weatherReducer from '../weatherReducer'

describe('weatherReducer', () => {
    test('should return the initial state', () => {
        expect(weatherReducer(undefined, { type: undefined })).toEqual(
            {
                currentWeather: null,
                forecast: [],
                cityInfo: null,
                errorMessage: '',
                isError: false,
                isLoading: false
            }
        )
    })
})

