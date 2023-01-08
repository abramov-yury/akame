import { MenuController } from "../../components/menu/menu-controller.js";
import { NavigationController } from "../../components/navigation/navigation-controller.js";

const app = document.body;

const menuController = new MenuController(app);
const navigationController = new NavigationController(app);

menuController.initiate();
navigationController.initiate();
