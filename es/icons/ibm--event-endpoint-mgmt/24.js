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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="29" cy="29" r="2"></circle><path d="M25 30h-8c-1.1028 0-2-.8972-2-2v-4h2v4h8v2zM30 25h-2v-8h-5v-2h5c1.1028 0 2 .8972 2 2v8zM20.4141 14.5859l-3-3c-.3774-.3779-.8799-.5859-1.4141-.5859s-1.0366.208-1.4143.5859l-2.9998 3c-.3899.3896-.5859.9019-.5859 1.4141s.196 1.0244.5859 1.4141l2.9998 3c.3777.3779.8801.5859 1.4143.5859s1.0366-.208 1.4141-.5859l3-3c.3899-.3896.5859-.9019.5859-1.4141s-.196-1.0244-.5859-1.4141zm-4.4141 4.4141l-3-3 3-3 2.9998 3-2.9998 3zM9 17H4c-1.1028 0-2-.8972-2-2V7h2v8h5v2zM17 8h-2V4H7v-2h8c1.1028 0 2 .8972 2 2v4z"></path><circle cx="3" cy="3" r="2"></circle></svg>`;
export default svgResultCarbonIcon;
