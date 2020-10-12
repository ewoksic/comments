import "../styles/styles.css";
import "lazysizes";
import Person from "./modules/Person";

new Person();

if (module.hot) {
  module.hot.accept();
}
