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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28 2H23V4h5V28H23v2h5a2.0059 2.0059 0 002-2V4A2.0059 2.0059 0 0028 2zM14 17H8a.9448.9448 0 00-1 1v6a.9448.9448 0 001 1h6a.9448.9448 0 001-1V18A.9448.9448 0 0014 17zm-1 6H9V19h4z"></path><path d="M25 24V18a.9448.9448 0 00-1-1H18a.9448.9448 0 00-1 1v6a.9448.9448 0 001 1h6A1.0021 1.0021 0 0025 24zm-2-1H19V19h4zM14 7H8A.9448.9448 0 007 8v6a.9448.9448 0 001 1h6a.9448.9448 0 001-1V8A.9448.9448 0 0014 7zm-1 6H9V9h4zM18 15h6a.9448.9448 0 001-1V8a.9448.9448 0 00-1-1H18a.9448.9448 0 00-1 1v6A1.0021 1.0021 0 0018 15zm1-6h4v4H19z"></path><path d="M4,4H9V2H4A2.0059,2.0059,0,0,0,2,4V28a2.0059,2.0059,0,0,0,2,2H9V28H4Z"></path></svg>`;
export default svgResultCarbonIcon;
