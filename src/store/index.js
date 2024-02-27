import contactUsModule from './contactUsModule.js'
import blogModule from './blogModule.js';
import { createStore } from "vuex";

const store = createStore({
    modules: {
        contactUsModule,
        blogModule
    }
});
  
export default store;