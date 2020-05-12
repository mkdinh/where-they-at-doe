export class Collection {
    constructor(readMethod, writeMethod) {
        this._read = readMethod;
        this._write = writeMethod;
    }

    async read(predicate) {
        const data = await this._read();
        
        return predicate
            ? data.filter(predicate)
            : data;
    }

    async create(entity) {
        const data = await this._read();
        const newId = data.reduce((a, b) => {
            return Math.max(a.id, b.id)
        });
        entity.id = newId;
        data.push(entity);
        return this._write(data);
    }

    async update(updateEntity) {
        const data = await this._read();
        const entityIndex = data.findIndex(entity => entity.id == updateEntity.id);
        
        if (entityIndex == -1) {
            throw new Error(`Invalid entity: ${entity.id}`);
        }

        data[entityIndex] = updateEntity;
        await this._write(data);
    }

    async delete(id) {
        const data = await this._read();
        const entityIndex = data.findIndex(entity => entity.id == id);
        data.splice(entityIndex, 1);
        await this._write(data);
    }
}