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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,30l-3.4634-5.8223L6,26l1.8223-6.5369L2,16l5.8223-3.4631L6,6l6.5366,1.8223L16,2l3.4634,5.8223L26,6l-1.8223,6.5369L30,16l-5.8223,3.4631L26,26l-6.5366-1.8223Z"></path></svg>`;
export default svgResultCarbonIcon;
