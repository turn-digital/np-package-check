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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24 9L22 9 16 17.5713 10 9 8 9 15 19 8 29 10 29 16 20.4287 22 29 24 29 17 19 24 9zM20 7c-1.7771 0-3.2314-.8726-4.5144-1.6425-1.1636-.6981-2.2627-1.3575-3.4856-1.3575-1.3977 0-2.449.8629-3.2927 1.707l-1.4146-1.4141c1.0674-1.0675 2.5669-2.293 4.7073-2.293 1.7771 0 3.2314.8726 4.5144 1.6425 1.1636.6981 2.2627 1.3575 3.4856 1.3575 1.3975 0 2.4487-.8629 3.293-1.7072l1.4141 1.4143c-1.0674 1.0675-2.5671 2.2928-4.707 2.2928z"></path></svg>`;
export default svgResultCarbonIcon;
