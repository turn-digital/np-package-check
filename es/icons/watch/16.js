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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22 8H21V2H19V8H13V2H11V8H10a2 2 0 00-2 2V22a2 2 0 002 2h1v6h2V24h6v6h2V24h1a2 2 0 002-2V10A2 2 0 0022 8zM10 22V10H22V22zM25 14H27V18H25z"></path></svg>`;
export default svgResultCarbonIcon;
