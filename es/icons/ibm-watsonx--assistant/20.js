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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 2h-10c-1.1035 0-2 .8965-2 2v6c0 1.1035.8965 2 2 2h2.4229s1.7314 3 1.7314 3l1.7324-1-2.3096-4h-3.5771V4h10v6h-3s0 2 0 2h3c1.1035 0 2-.8965 2-2V4c0-1.1035-.8965-2-2-2zM14.6904 31l-1.7324-1 3.4648-6h5.5771c1.1046 0 2-.8954 2-2v-5h2v5c0 2.2091-1.7909 4-4 4h-4.4229l-2.8867 5z"></path><circle cx="10" cy="17" r="1"></circle><circle cx="14" cy="17" r="1"></circle><circle cx="18" cy="17" r="1"></circle><path d="m12,26h-6c-2.2091,0-4-1.7909-4-4v-10c0-2.2091,1.7909-4,4-4h8v2H6c-1.1046,0-2,.8954-2,2v10c0,1.1046.8954,2,2,2h6v2Z"></path></svg>`;
export default svgResultCarbonIcon;
