import { VPopover } from "v-tooltip";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("v-popover", VPopover);
  }
};

export default GlobalComponents;
