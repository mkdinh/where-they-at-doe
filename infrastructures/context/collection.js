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

    async update(predicate, updatedModel) {
        if (!predicate) throw new Error("first query need to have a predicate.");
        let data = await this._read(this.ord);
        let model = data.find(predicate);

        if (!model) throw new Error("model does not exist.");

        const filtered = data.filter(entity => entity.id !== updatedModel.id);

        filtered.push(updatedModel);
        await this._write(this.ord, filtered);

        data = await this._read(this.ord);
        model = data.find(predicate);

        return model;
    }
}