const singleton = (() => {
  const instance = null;
  const name = null;

  const main = () => {
    return {
      setName: (name) => (this.name = name),
      getName: () => this.name,
    };
  };

  return {
    init: () => {
      return instance ? intance : main();
    },
  };
})();

const one = singleton.init();
one.setName('newname');

const two = singleton.init();
console.log(two.getName());
