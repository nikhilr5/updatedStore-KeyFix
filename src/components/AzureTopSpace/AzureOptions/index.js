import React from 'react'
import UserInput from './Key'
import Dropdown from './Region'
import AzureRecord from './AzureRecord'
import EnterButton from './EnterButton'
import {
     flip_switchMenus,
     flip_invertColors,
     flip_micVisual,
     increment_textSize,
     decrement_textSize,
     increment_lineWidth,
     decrement_lineWidth,
     increment_numLines,
     decrement_numLines
} from '../../../redux/actions'

import store from '../../../store/';



export default function AzureOptions() {
    // These are functions that take an object and return an element of the object.
    // They are passed to useSelector, which feeds the global state object into them.
const items = [
  {
    id: 1,
    value: 'westus',
  },
  {
    id: 2,
    value: 'westus2',
  },
  {
    id: 3,
    value: 'ussouthcentral',
  },
  {
    id: 4,
    value: 'northcentralus',
  },
  {
    id: 5,
    value: 'useast',
  },
  {
    id: 6,
    value: 'useast2',
  },
  {
    id: 7,
    value: 'europewest',
  },
  {
    id: 8,
    value: 'europenorth',
  },
  {
    id: 9,
    value: 'brazilsouth',
  },
  {
    id: 10,
    value: 'australiaeast',
  },
  {
    id: 11,
    value: 'asiasoutheast',
  },
  {
    id: 12,
    value: 'asiaeast',
  },
];
    return (
         <div className="AzureOptions" id="azure-options-space">
              <h1>Microsoft Azure Captions</h1>
               <div className="item-wrapper">
                    <UserInput store ={store}/>
               </div>
              <div className="dd-wrapper">
                   <Dropdown title="Select Region" items={items}/>
              </div>
              <div className="item-wrapper">
                   <EnterButton />
              </div>


         </div>
    );
}
