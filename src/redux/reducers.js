import { combineReducers } from 'redux';

const textSizeReducer = (state = 6, action) => {
     switch (action.type) {
          case 'INCREMENT_TEXTSIZE':
               return state + 1;
          case 'DECREMENT_TEXTSIZE':
               return Math.max(1, state - 1);
          default:
               return state;
     }
}

const lineWidthReducer = (state = 10, action) => {
     switch (action.type) {
          case 'INCREMENT_LINEWIDTH':
               return Math.min(10, state + 1)
          case 'DECREMENT_LINEWIDTH':
               return Math.max(1, state - 1);
          default:
               return state;
     }
}

const numLinesReducer = (state = 4, action) => {
     switch (action.type) {
          case 'INCREMENT_NUMLINES':
               return state + 1;
          case 'DECREMENT_NUMLINES':
               return Math.max(1, state - 1);
          default:
               return state;
     }
}

const lockScreenReducer = (state = false, action) => {
     if (action.type === 'FLIP_LOCKSCREEN')
          return !state;
     else return state;
}

const invertMicVisualReducer = (state = 0, action) => {
  if (action.type === 'FLIP_MICVISUAL'){
       state = state + 1;
       if (state == 4) {
            state = 0;
       }
  }
  return state;
}

const switchMenusReducer = (state = false, action) => {
     if (action.type === 'FLIP_SWITCHMENUS')
          return !state;
     else return state;
}

const invertColorsReducer = (state = false, action) => {
     if (action.type === 'FLIP_INVERTCOLORS')
          return !state;
     else return state;
}

const recordingReducer = (state = true, action) => {
     if (action.type === 'FLIP_RECORDING')
          return !state
     else return state
}

const recordingAzureReducer = (state = false, action) =>{
     if (action.type == 'FLIP_RECORDING_AZURE')
          return !state
     else return state
}

const enteredKeyReducer = (state = false, action) =>{
     if (action.type == 'FLIP_ENTERED_KEY')
          return !state
     else return state
}
const enteredRegionReducer = (state = false, action) =>{
     if (action.type == 'FLIP_ENTERED_REGION')
          return !state
     else return state
}



const allReducers = combineReducers({
     enteredRegion: enteredRegionReducer,
     enteredKey: enteredKeyReducer,
     textSize: textSizeReducer,
     lineWidth: lineWidthReducer,
     numLines: numLinesReducer,
     lockScreen: lockScreenReducer,
     invertColors: invertColorsReducer,
     recording: recordingReducer,
     mic: invertMicVisualReducer,
     switchMenus: switchMenusReducer,
     recordingAzure: recordingAzureReducer,


});

export default allReducers;
