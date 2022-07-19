//Turns month number to text
export function monthToText(month, format) {
    const monthNamesLong = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    if(format == 'short') {
        return monthNamesShort[month];    
    } else {
        return monthNamesLong[month];
    }
    
}

//Adds given amount of hours to given date
export function addHours(numOfHours, date = new Date()) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  
    return date;
}

//Returns object with how many days,hours,minutes and seconds until specific date
export function untilDate(date = new Date()) {
    const today = new Date();
    
    var seconds = Math.floor((date - (today))/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours-(days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

    return {days: days, hours: hours, minutes: minutes, seconds: seconds}
}

//Turns number into two digits. example: 9 becomes 09
export function toTwoDigits(string) {
    return String(string).padStart(2, '0');
}