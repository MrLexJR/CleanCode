type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) { }

  toString() {

    if (!this.isProductReady()) return;

    return `${this.name} (${this.price}), ${this.size}`;

  }

  private isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((this[key] as string).length <= 0) throw Error(`${key} is required`);
          break;
        case 'number':
          if ((this[key] as number) <= 0) throw Error(`${key} is required`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid.`);
      }
    }
    return true;
  }
}


(() => {

  const newProduct = new Product('Laptop', 0, 'XL');
  console.log(newProduct.toString());

})();