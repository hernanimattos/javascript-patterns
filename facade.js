const main = (() => {
  const name = null;
  const privateProps = {
    get: () => {
      console.log('executou', this.name);
      return this.name;
    },
    set: (name) => {
      this.name = name;
    },
  };

  return {
    facade: ({ execute, name }) => {
      privateProps.set(name);
      if (execute) {
        privateProps.get();
      }
      // return null;
    },
  };
})();

console.log(main.facade({ execute: false, name: 'hernani' }));
