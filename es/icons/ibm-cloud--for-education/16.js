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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 30h-2c0-1.6542-1.3457-3-3-3h-4c-1.6543 0-3 1.3458-3 3h-2c0-2.757 2.2429-5 5-5h4c2.7571 0 5 2.243 5 5zM15 16c-.5522 0-1 .4478-1 1v6h2v-6c0-.5522-.4478-1-1-1z"></path><path d="M32,12H14v2h4v5c0,2.7568,2.2429,5,5,5s5-2.2432,5-5v-5h4v-2Zm-9,10c-1.6543,0-3-1.3457-3-3v-1h6v1c0,1.6543-1.3457,3-3,3Zm3-6h-6v-2h6v2Z"></path><path d="M25.7983,10c-.9292-4.5586-4.9692-8-9.7983-8-4.8479,0-8.9382,3.4399-9.822,8.124-3.5232,.6294-6.178,3.7251-6.178,7.376,0,4.1357,3.3645,7.5,7.5,7.5h4.5v-2H7.5c-3.0327,0-5.5-2.4673-5.5-5.5,0-2.8779,2.2502-5.2852,5.1228-5.48l.8364-.0566,.0901-.8335c.4395-4.0645,3.8574-7.1299,7.9507-7.1299,3.7195,0,6.845,2.5552,7.7368,6h2.0615Z"></path></svg>`;
export default svgResultCarbonIcon;
