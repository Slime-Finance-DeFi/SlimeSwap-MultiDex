import { DefaultTheme } from "styled-components";
import { light as lightAlert } from "../uikit/components/Alert/theme";
import { light as lightButton } from "../uikit/components/Button/theme";
import { light as lightCard } from "../uikit/components/Card/theme";
import { light as lightRadio } from "../uikit/components/Radio/theme";
import { light as lightToggle } from "../uikit/components/Toggle/theme";
import { light as lightNav } from "../uikit/widgets/Menu/theme";
import { light as lightModal } from "../uikit/widgets/Modal/theme";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  alert: lightAlert,
  button: lightButton,
  colors: lightColors,
  card: lightCard,
  toggle: lightToggle,
  nav: lightNav,
  modal: lightModal,
  radio: lightRadio,
};

export default lightTheme;
