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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22.17 16L19.59 18.58 21 20 25 16 21 12 19.58 13.41 22.17 16zM15.5 21L13.5851 20.4229 16.5 11 18.4149 11.5771 15.5 21zM9.83 16L12.41 13.42 11 12 7 16 11 20 12.42 18.59 9.83 16z"></path><circle cx="19" cy="28" r="1"></circle><path d="m22,29v-2c2.7568,0,5-2.2432,5-5v-12c0-2.7568-2.2432-5-5-5h-6v-2h6c3.8594,0,7,3.1401,7,7v12c0,3.8594-3.1406,7-7,7Z"></path><circle cx="13" cy="4" r="1"></circle><path d="m16,29h-6c-3.8594,0-7-3.1406-7-7v-12c0-3.8599,3.1406-7,7-7v2c-2.7568,0-5,2.2432-5,5v12c0,2.7568,2.2432,5,5,5h6v2Z"></path></svg>`;
export default svgResultCarbonIcon;
