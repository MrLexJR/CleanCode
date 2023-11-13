(() => {

  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    private httpAdapter: any;

    getProduct(id: number) {
      // Realiza una petición para obtener el producto
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos 
      console.log('Guardando en base de datos', product);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {

    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);

    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendMail(['email@gmail.com'], 'Correo Prueba', 'Hola mundo!!');
    }
  }

  class CartBloc {

    private items: Object[] = [];

    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId);
    }
  }

  class Mailer {
    private masterEmail: string = '';

    sendMail(emailList: string[], subject: string, body: string) {
      console.log('Enviando correo', body);
      console.log('Enviando correo a', emailList);
      console.log('Enviando correo con asunto', subject);
    }
  }

  const mailer = new Mailer();
  const productService = new ProductService();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.addToCart(10);

})();