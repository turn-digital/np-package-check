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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M12.4531,25A8.7775,8.7775,0,0,0,14,20a10.6,10.6,0,0,0-.18-2H22V16H13.2175c-.0842-.2109-.17-.4194-.2556-.624A9.8586,9.8586,0,0,1,12,11a4.792,4.792,0,0,1,5-5,6.1234,6.1234,0,0,1,5.2222,2.6279l1.5556-1.2558A8.11,8.11,0,0,0,17,4a6.7781,6.7781,0,0,0-7,7,11.65,11.65,0,0,0,1.0559,5H8v2h3.7729A8.209,8.209,0,0,1,12,20c0,2.5234-1.4858,5-3,5v2H24V25Z"></path></svg>`;
export default svgResultCarbonIcon;
