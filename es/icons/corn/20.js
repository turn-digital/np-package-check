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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23,16c-.3374,0-.67.02-1,.0508V16C22,8.115,19.0435,2,16.5,2S11,8.115,11,16v5H6v3a6.0067,6.0067,0,0,0,6,6h3A11.0125,11.0125,0,0,0,26,19V16ZM13,16h2V14H13.0728a25.8942,25.8942,0,0,1,.5654-4H16V8H14.2c.81-2.4058,1.8149-3.7715,2.3-3.9863.66.2919,2.2842,2.7036,3.0654,6.9863H18v2h1.8442A29.1625,29.1625,0,0,1,20,16v.4263A11.0554,11.0554,0,0,0,13.79,21H13ZM12,28a4.0045,4.0045,0,0,1-4-4V23h4.7639A10.9033,10.9033,0,0,0,12,27Zm12-9a9.01,9.01,0,0,1-9,9H14V27a9.01,9.01,0,0,1,9-9h1Z"></path></svg>`;
export default svgResultCarbonIcon;
