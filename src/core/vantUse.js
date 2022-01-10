import Vue from "vue";
import {
  Cascader,
  Button,
  Toast,
  Tabbar,
  NavBar,
  TabbarItem,
  Field,
  Form,
  Col,
  Grid,
  GridItem,
  Cell,
  CellGroup,
  Row,
  Tab,
  Tabs,
  Step,
  Steps,
  Icon,
  Dialog,
  Calendar,
  List,
  Popup,
  Picker,
  ActionSheet,
  DropdownMenu,
  DropdownItem,
  Image as VanImage,
  ImagePreview,
  Progress,
  Switch,
  uploader,
  NumberKeyboard,
} from "vant";

Vue.use(Switch);
Vue.use(Progress);
Vue.use(Cascader);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Step);
Vue.use(Steps);
Vue.use(List);
Vue.use(ActionSheet);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Calendar);
Vue.use(ImagePreview);
Vue.use(Button);
Vue.use(Field);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Form);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(NavBar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Dialog);
Vue.use(List);
Vue.use(Step);
Vue.use(Steps);
Vue.use(uploader);
Vue.use(NumberKeyboard);
Vue.prototype.$Toast = Toast;
Vue.prototype.$Dialog = Dialog;
Vue.prototype.$ImagePreview = ImagePreview;
