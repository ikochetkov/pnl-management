import { actionTypes } from '@servicenow/ui-core';
const { COMPONENT_BOOTSTRAPPED } = actionTypes;
import { createHttpEffect } from '@servicenow/ui-effect-http';


export default {

  [COMPONENT_BOOTSTRAPPED]: (coeffects) => {
    console.log("COMPONENT_CONTAINER_BOOTSTRAPPED");
  },

}