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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m27,24c-.4622,0-.8948.1133-1.2859.2998l-4.8289-4.8291c.699-.981,1.1147-2.1768,1.1147-3.4707,0-3.3086-2.6917-6-6-6-1.2937,0-2.4897.416-3.4709,1.1147l-4.8289-4.8286c.1865-.3911.2998-.8237.2998-1.2861,0-1.6567-1.3433-3-3-3s-3,1.3433-3,3,1.3433,3,3,3c.4622,0,.8948-.1133,1.2859-.2998l4.8289,4.8291c-.699.981-1.1147,2.1768-1.1147,3.4707,0,3.3086,2.6917,6,6,6,1.2937,0,2.4897-.416,3.4709-1.1147l4.8289,4.8286c-.1865.3911-.2998.8237-.2998,1.2861,0,1.6567,1.3433,3,3,3s3-1.3433,3-3-1.3433-3-3-3Zm-11-4c-2.2056,0-4-1.7944-4-4s1.7944-4,4-4,4,1.7944,4,4-1.7944,4-4,4Z"></path></svg>`;
export default svgResultCarbonIcon;
