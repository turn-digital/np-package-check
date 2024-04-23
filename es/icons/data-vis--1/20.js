/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,22a3.9553,3.9553,0,0,0-2.0193.5667L20.167,18.7529a4.9654,4.9654,0,0,0,0-5.5058L22.714,10.7A3.0284,3.0284,0,1,0,21.3,9.286l-2.547,2.547a4.9654,4.9654,0,0,0-5.5058,0L9.4332,8.0191A3.9553,3.9553,0,0,0,10,6a4,4,0,1,0-4,4,3.9553,3.9553,0,0,0,2.0191-.5668l3.8139,3.8139a4.9654,4.9654,0,0,0,0,5.5058L8.0192,22.5668A3.9556,3.9556,0,0,0,6,22a4,4,0,1,0,4,4,3.9553,3.9553,0,0,0-.5667-2.0192l3.8138-3.8138A4.9686,4.9686,0,0,0,15,20.8989v3.2848a3,3,0,1,0,2,0V20.8989a4.9686,4.9686,0,0,0,1.7529-.7319l3.8138,3.8137A3.9553,3.9553,0,0,0,22,26a4,4,0,1,0,4-4ZM16,13a3,3,0,1,1-3,3A3.0033,3.0033,0,0,1,16,13ZM4,6A2,2,0,1,1,6,8,2.002,2.002,0,0,1,4,6ZM6,28a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,28Zm20,0a2,2,0,1,1,2-2A2.0027,2.0027,0,0,1,26,28Z"></path></svg>`;
export default svgResultCarbonIcon;