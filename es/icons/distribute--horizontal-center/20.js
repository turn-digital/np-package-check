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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24 10H23V2H21v8H20a2.0023 2.0023 0 00-2 2v8a2.0023 2.0023 0 002 2h1v8h2V22h1a2.0023 2.0023 0 002-2V12A2.0023 2.0023 0 0024 10zm0 10H20V12h4zM12 6H11V2H9V6H8A2.0023 2.0023 0 006 8V24a2.0023 2.0023 0 002 2H9v4h2V26h1a2.0023 2.0023 0 002-2V8A2.0023 2.0023 0 0012 6zm0 18H8V8h4z"></path></svg>`;
export default svgResultCarbonIcon;
