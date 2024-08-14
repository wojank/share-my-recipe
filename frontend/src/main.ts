import { createApp } from "vue";
import "./assets/sass/main.scss";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
// import {  faUserSecret } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faFacebook, faSquareInstagram, faTwitter, faLinkedin, faPinterest);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
