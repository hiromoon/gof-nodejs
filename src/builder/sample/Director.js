export default class Director {
  constructor(builder) {
    this.builder = builder;
  }
  construct() {
    this.builder.makeTitle('Greeting');
    this.builder.makeString('Daily from Morning');
    this.builder.makeItems(['Good Morning', 'Hello']);
    this.builder.makeString('At Night');
    this.builder.makeItems(['Good Evening', 'Good Night', 'Good Bye']);
    this.builder.close();
  }
}
