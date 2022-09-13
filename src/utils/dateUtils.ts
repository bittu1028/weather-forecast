

export const isGreaterThanCurrentDate = (currentDate:Date, time: number) => {
    const weatherDate = new Date(time * 1000);
    currentDate.setHours(0,0,0,0);
    weatherDate.setHours(0,0,0,0);
    return Math.floor(weatherDate.getTime() / 86400000) > Math.floor(currentDate.getTime() / 86400000);
}