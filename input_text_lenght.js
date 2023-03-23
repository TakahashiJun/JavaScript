class InputTextLenght {
    constructor(value) {
        this._lenght = value.length;
    }

    isInputLimit(limit) {
        return this._lenght >= limit ? true : false;
    }
}
