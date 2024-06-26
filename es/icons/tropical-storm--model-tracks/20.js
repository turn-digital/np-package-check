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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M10,17a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,10,17Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,10,11Z"></path><path d="M14.8188 6.65c.1163-.1211 1.8643-1.919 2.8882-2.9434A1 1 0 0017 2C11.812 2 2 4.2988 2 13a7.8938 7.8938 0 003.1812 6.35c-.1612.1675-1.9507 2.0054-2.8882 2.9429A1 1 0 003 24c5.188 0 15-2.2988 15-11A7.8927 7.8927 0 0014.8188 6.65zM9.7065 20.793a20.94 20.94 0 01-4.0932.9853c.1621-.166 2.7685-2.9053 2.7685-2.9053l-1.1743-.6074A5.9064 5.9064 0 014 13c0-3.667 2.1177-6.2886 6.2935-7.793a20.94 20.94 0 014.0932-.9853c-.227.2324-2.769 2.9057-2.769 2.9057l1.1748.607A5.9075 5.9075 0 0116 13C16 16.667 13.8823 19.2886 9.7065 20.793zM30 17l-5-5-5 5 1.4126 1.4155L24 15.8325V19a9.01 9.01 0 01-9 9H12v2h3A11.0125 11.0125 0 0026 19V15.8325l2.5859 2.5816z"></path></svg>`;
export default svgResultCarbonIcon;
