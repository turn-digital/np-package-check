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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26 18L24 18 22 21.897 20 18 18 18 20.905 23 18 28 20 28 22 24.201 24 28 26 28 23.098 23 26 18zM19 6V4H13.9133a1.9906 1.9906 0 00-1.9919 1.8188L11.2686 13H7v2h4.0867l-1 11H5v2h5.0867a1.9906 1.9906 0 001.9919-1.8188L13.0952 15H18V13H13.2769l.6364-7z"></path></svg>`;
export default svgResultCarbonIcon;
