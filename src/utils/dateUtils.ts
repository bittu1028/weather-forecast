

export const isGreaterThanCurrentDate = (currentDate:Date, time: number) => {
    const weatherDate = new Date(time * 1000);
    currentDate.setHours(0,0,0,0);
    weatherDate.setHours(0,0,0,0);
    return Math.floor(weatherDate.getTime()) > Math.floor(currentDate.getTime());
}