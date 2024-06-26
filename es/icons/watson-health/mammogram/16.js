/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M25 32L32 32 32 25 30 25 30 30 25 30 25 32zM25 27H22V17h3a3.0033 3.0033 0 013 3v4A3.0033 3.0033 0 0125 27zm-1-2h1a1.0006 1.0006 0 001-1V20a1.0006 1.0006 0 00-1-1H24zM20 27H14V23a2.002 2.002 0 012-2h2V19H14V17h4a2.0023 2.0023 0 012 2v2a2.0023 2.0023 0 01-2 2H16v2h4zM25 15H22V5h3a3.0033 3.0033 0 013 3v4A3.0033 3.0033 0 0125 15zm-1-2h1a1.0009 1.0009 0 001-1V8a1.0009 1.0009 0 00-1-1H24zM18 5H14V7h4V9H15v2h3v2H14v2h4a2.0027 2.0027 0 002-2V7A2.0023 2.0023 0 0018 5zM10 27H8V23.9541C3.2847 23.5117 2 19.9443 2 18c0-3.0146 2.082-4.5015 3.9189-5.814C7.5723 11.0054 9 9.9854 9 8V5h2V8c0 3.0146-2.082 4.5015-3.9189 5.814C5.4277 14.9946 4 16.0146 4 18c.0054.4033.1914 4 5 4a1 1 0 011 1zM7 0L0 0 0 7 2 7 2 2 7 2 7 0z"></path></svg>`;
export default svgResultCarbonIcon;
