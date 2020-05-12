class Container {
    constructor() {
        this.modules = {};
    }

    register(name, Definition, dependencies) {
        this.modules[name] = {
            Definition,
            dependencies: dependencies || []
        }
    }

    get(name) {
        const { Definition, dependencies } = this.module[name];
        const modules = dependencies.map(name => this.get(name));
        return new Definition(...modules);
    }
}