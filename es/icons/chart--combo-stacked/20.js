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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27,28V16H19V28H15V12H7V28H4V2H2V28a2,2,0,0,0,2,2H30V28ZM13,14v6H9V14Zm12,4v6H21V18Z"></path><path d="M22.7856,14a1.9877,1.9877,0,0,1-1.1787-.3865L11.2041,5.987,8.2419,10,6.6374,8.8065l2.9812-4a1.9978,1.9978,0,0,1,2.749-.446l10.4214,7.64,3.6045-4.8613L28,8.3306l-3.6045,4.8611A2.0014,2.0014,0,0,1,22.7856,14Z"></path></svg>`;
export default svgResultCarbonIcon;
