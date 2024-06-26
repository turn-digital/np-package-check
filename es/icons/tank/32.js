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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30,13V11H18.6182l-.7237-1.4473A1,1,0,0,0,17,9H9a1,1,0,0,0-1,1v5H4v2H22.6379l3.6,3H3a1,1,0,0,0-1,1v2a5.0057,5.0057,0,0,0,5,5H25a5.0057,5.0057,0,0,0,5-5V21a1.0011,1.0011,0,0,0-.36-.7686l-6-5A1.0015,1.0015,0,0,0,23,15H20.6182l-1-2ZM28,23a3.0033,3.0033,0,0,1-3,3H7a3.0033,3.0033,0,0,1-3-3V22H28ZM10,15V11h6.3821l2,4Z"></path></svg>`;
export default svgResultCarbonIcon;
