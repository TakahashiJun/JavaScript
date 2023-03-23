class DateObject {
    constructor() {
        const _date = new Date();
        this.year = _date.getFullYear();
        this.month = _date.getMonth() + 1;
        this.date = _date.getDate();
        this.day = _date.getDay();
        this.hour = _date.getHours();
        this.minutes = _date.getMinutes();
        this.second = _date.getSeconds();
        this.millisecond = _date.getMilliseconds();
    }

    weekday_jp(weekday = this.day) {
        let JPN= ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
        return JPN[weekday];
    }

    weekday_en(weekday = this.day) {
        let EN = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Saturday"];
        return EN[weekday];
    }

    L_pad_zero(value) {
        return (Array(2).join("0") + value).slice(-2);
    }
}
