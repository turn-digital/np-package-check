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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M6,16c2.9727,0,4.2324-2.251,5.3447-4.2373C12.4741,9.7441,13.45,8,16,8s3.5259,1.7441,4.6553,3.7627C21.7676,13.749,23.0273,16,26,16h4V14H26c-1.7129,0-2.4834-1.2207-3.5991-3.2144C21.2075,8.6543,19.7231,6,16,6s-5.2075,2.6543-6.4009,4.7856C8.4834,12.7793,7.7129,14,6,14H4V2H2V28a2,2,0,0,0,2,2H30V28H28V22H26v6H21.9992L22,20H20v8H16V16H14V28H9.9992L10,20H8v8H4V16Z"></path></svg>`;
export default svgResultCarbonIcon;
