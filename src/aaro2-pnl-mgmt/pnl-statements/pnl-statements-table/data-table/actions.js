import { actionTypes } from '@servicenow/ui-core';

const { COMPONENT_BOOTSTRAPPED, COMPONENT_PROPERTY_CHANGED } = actionTypes;
export default {
    actionHandlers: {
     
      [COMPONENT_PROPERTY_CHANGED]: ({action}) => {
        
        console.log('COMPONENT_PROPERTY_CHANGED:: action::', action)
      },
  }
}
  