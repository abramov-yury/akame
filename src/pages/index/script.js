import { MenuController } from "../../components/menu/menu-controller.js";
import { NavigationController } from "../../components/navigation/navigation-controller.js";
import { ContentController } from "../../components/content/content-controller.js";

const app = document.body;

const menuController = new MenuController(app);
const navigationController = new NavigationController(app);
const contentController = new ContentController(app);

menuController.initiate();
navigationController.initiate();
contentController.initiate();
