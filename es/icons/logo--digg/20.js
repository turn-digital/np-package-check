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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M6.48 7.6v3.92H2V21H9.28V7.6zm0 11.2H4.8v-5H6.48zM10.4 11.52H13.2V21.04H10.4zM10.4 7.6H13.2V10.399999999999999H10.4zM14.32 11.52V21H18.8v1.12H14.32V24.4H21.6V11.52zM18.8 18.8H17.12v-5H18.8zM22.72 11.52V21H27.2v1.12H22.72V24.4H30V11.52zM27.2 18.8H25.52v-5H27.2z"></path></svg>`;
export default svgResultCarbonIcon;
