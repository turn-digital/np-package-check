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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="19" cy="22" r="2"></circle><path d="M27,16H23.7207l-.5439-1.6328A1.9983,1.9983,0,0,0,21.2793,13H16.7207a1.9981,1.9981,0,0,0-1.8975,1.3677L14.2793,16H11a2.0023,2.0023,0,0,0-2,2v9a2.0023,2.0023,0,0,0,2,2H27a2.0023,2.0023,0,0,0,2-2V18A2.0023,2.0023,0,0,0,27,16ZM19,26a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,19,26Z"></path><path fill="none" d="M19,26a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,19,26Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,19,20Z" data-icon-path="inner-path"></path><path d="M27 11H29V13H27zM27 7H29V9H27zM27 3H29V5H27zM23 3H25V5H23zM19 3H21V5H19zM15 3H17V5H15zM11 3H13V5H11zM7 3H9V5H7zM3 3H5V5H3zM3 7H5V9H3zM3 11H5V13H3zM3 15H5V17H3zM3 19H5V21H3zM3 23H5V25H3zM3 27H5V29H3z"></path></svg>`;
export default svgResultCarbonIcon;
