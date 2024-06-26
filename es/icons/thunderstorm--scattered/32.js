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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13.338 30L11.602 29 13.889 25 10 25 13.993 18 15.73 19 13.446 23 17.337 23 13.338 30z"></path><path d="M27,11A5.9955,5.9955,0,0,0,15.6335,8.3311,7.3494,7.3494,0,0,0,13.5,8a7.5509,7.5509,0,0,0-7.1492,5.2441A5.9926,5.9926,0,0,0,8,25V23a3.9925,3.9925,0,0,1-.6731-7.9292L7.99,14.958l.1458-.6562a5.496,5.496,0,0,1,10.7294,0l.1458.6562.6626.1128A3.9925,3.9925,0,0,1,19,23v2a5.9853,5.9853,0,0,0,5.2163-8.9463A5.9941,5.9941,0,0,0,27,11Zm-4.0732,3.4893a5.96,5.96,0,0,0-2.2776-1.2452,7.5157,7.5157,0,0,0-3.1853-4.0688,3.9869,3.9869,0,1,1,5.4629,5.314Z"></path><path d="M26.732 16.233H29.732V18.233H26.732z" transform="rotate(-135 28.232 17.233)"></path><path d="M29 10H32V12H29z"></path><path d="M26.732 3.768H29.732V5.768H26.732z" transform="rotate(-45 28.232 4.768)"></path><path d="M20 0H22V3H20z"></path><path d="M12.268 3.768H15.268V5.768H12.268z" transform="rotate(-135 13.768 4.768)"></path></svg>`;
export default svgResultCarbonIcon;
