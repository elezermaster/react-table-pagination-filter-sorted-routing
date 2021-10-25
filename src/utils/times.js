export const getTime = (timeToConvert) => {
    const setPadStart = (str) => {
        if (str.toString().length < 2) {
            str = str.toString().padStart(2, "0")
        }
        return (str)
    }
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
    const ONE_MIN = 1 * 60 * 1000
    const FIVE_MIN = 5 * 60 * 1000
    const TEN_MIN = 10 * 60 * 1000
    const THIRTY_MIN = 30 * 60 * 1000
    const ONE_HOUR = 60 * 60 * 1000
    const ONE_DAY = 24 * 60 * 60 * 1000
    const ONE_MONTH = 30 * 24 * 60 * 60 * 1000
    const ONE_YEAR = 12 * 30 * 24 * 60 * 60 * 1000
    const TWO_YEARS = 2 * 12 * 30 * 24 * 60 * 60 * 1000
    const dateNow = new Date();
    const result = dateNow - timeToConvert
    let date = null
    const timestamp = Date.parse(timeToConvert);
    if (isNaN(timestamp) === true) {
         date = new Date(Number(timeToConvert));
    } else {
        date = new Date(timeToConvert)
    }
    //Math.floor(result / (24 * 60 * 60 * 1000)):
    if (result <= ONE_MIN) {
        return "1 min ago"
    } else if (result <= FIVE_MIN) {
        return "5 min ago"
    } else if (result <= TEN_MIN) {
        return "10 min ago"
    } else if (result <= THIRTY_MIN) {
        return "30 min ago"
    } else if (result <= ONE_HOUR) {
        return "1 hour ago"
    } else if (result <= ONE_DAY) {
        //console.log('date', date)
        const seconds = setPadStart(date.getSeconds())
        const minutes = setPadStart(date.getMinutes())
        const hours = setPadStart(date.getHours())
        return `${hours}:${minutes} today`
    } else if (result <= ONE_YEAR) {
        const dateInMonth = date.getDate();//.getUTCDate();
        const numberMonth = date.getMonth();
        return `${dateInMonth} ${monthNames[numberMonth]}`
    } else if (result < TWO_YEARS) {
        const dateInMonth = date.getDate();//.getUTCDate();
        const numberMonth = date.getMonth();
        const getYear = date.getFullYear();
        return `${dateInMonth} ${monthNames[numberMonth]} ${getYear}`
    } else if (result > TWO_YEARS) {
        return Math.floor(result / (12 * 30 * 24 * 60 * 60 * 1000)) + " years"
    }
    const days = Math.floor(result / (24 * 60 * 60 * 1000));
    //console.log('days: ', days)
    return `${days} days ago`
}
