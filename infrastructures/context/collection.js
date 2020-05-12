module.exports = class Collection {
    constructor(ord, readMethod, writeMethod) {
        this.ord = ord;
        this._read = readMethod;
        this._write = writeMethod;
    }

    async where(predicate) {
        const data = await this._read(this.ord);
        return predicate
            ? data.filter(predicate)
            : data;
    }

    async first(predicate) {
        if (!predicate) throw new Error('first query need to have a predicate.');
        
        const data = await this._read(this.ord);
        return data.find(predicate)
    }
}