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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M15 12H17V30H15zM11.33 18.22a7 7 0 010-10.44l1.34 1.49a5 5 0 000 7.46zM20.67 18.22l-1.34-1.49a5 5 0 000-7.46l1.34-1.49a7 7 0 010 10.44z"></path><path d="M8.4 21.8a11 11 0 010-17.6L9.6 5.8a9 9 0 000 14.4zM23.6 21.8l-1.2-1.6a9 9 0 000-14.4l1.2-1.6a11 11 0 010 17.6z"></path></svg>`;
export default svgResultCarbonIcon;
