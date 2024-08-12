class Res {
    constructor({ value, other }) {
        this.value = value || '';
        this.other = other || {};
    }

    static extractValue(response) {
        if (response.status !== 200) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        return new Res({
            value: response.data.value,
            other: response.data.other
        });
    }
}

module.exports = Res;
