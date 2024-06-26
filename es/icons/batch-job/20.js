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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M32 26v-2h-2.1011c-.1299-.6372-.3843-1.2285-.7319-1.7529l1.4897-1.4897-1.4141-1.4141-1.4897 1.4897c-.5244-.3477-1.1157-.6021-1.7529-.7319v-2.1011h-2v2.1011c-.6372.1299-1.2285.3843-1.7529.7319l-1.4897-1.4897-1.4141 1.4141 1.4897 1.4897c-.3477.5244-.6021 1.1157-.7319 1.7529h-2.1011v2h2.1011c.1299.6372.3843 1.2285.7319 1.7529l-1.4897 1.4897 1.4141 1.4141 1.4897-1.4897c.5244.3477 1.1157.6021 1.7529.7319v2.1011h2v-2.1011c.6372-.1299 1.2285-.3843 1.7529-.7319l1.4897 1.4897 1.4141-1.4141-1.4897-1.4897c.3477-.5244.6021-1.1157.7319-1.7529h2.1011zm-7 2c-1.6543 0-3-1.3457-3-3s1.3457-3 3-3 3 1.3457 3 3-1.3457 3-3 3zM20 17H12c-1.1046 0-2-.8954-2-2V4c0-1.1046.8954-2 2-2h8c1.1046 0 2 .8954 2 2V15c0 1.1046-.8954 2-2 2zm-8-2h8V4H12V15z"></path><path d="M17,21H8c-1.1046,0-2-.8954-2-2V7h2v12h9v2Z"></path><path d="M13,25H4c-1.1028,0-2-.8972-2-2V11h2v12H13v2Z"></path></svg>`;
export default svgResultCarbonIcon;
