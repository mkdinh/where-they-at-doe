module.exports = class Container {
  constructor() {
    this.modules = {};
  }

  register(name, Definition, dependencies, singleton) {
    this.modules[name] = {
      Definition,
      dependencies: dependencies || [],
      singleton,
    };
  }

  get(name) {
    const { Definition, dependencies, singleton } = this.modules[name];
    if (singleton) {
      return Definition;
    }
    const modules = dependencies.map((name) => this.get(name));
    return new Definition(...modules);
  }

  initialize() {
    this.modules = {};
  }
};
