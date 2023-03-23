class InputNumber {
    constructor(number) {
        this._number = number;
    }

    l_pad_zero(length) {
        return (Array(length).join("0") + this._number).slice(-length);
    }

    r_pad_zero(length) {
        return (this._number + Array(length).join("0"))
    }
}
