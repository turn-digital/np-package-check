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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M29.3379 17.9336l-7.7324-2.7783L18.374 11.0967A2.99 2.99 0 0016.0537 10H8.0576a2.9982 2.9982 0 00-2.48 1.3115L2.8662 15.2949A4.9884 4.9884 0 002 18.1074V26a1 1 0 001 1H5.1421a3.9806 3.9806 0 007.7158 0h6.2842a3.9806 3.9806 0 007.7158 0H29a1 1 0 001-1V18.875A1 1 0 0029.3379 17.9336zM9 28a2 2 0 112-2A2.0027 2.0027 0 019 28zm14 0a2 2 0 112-2A2.0025 2.0025 0 0123 28zm5-3H26.8579a3.9806 3.9806 0 00-7.7158 0H12.8579a3.9806 3.9806 0 00-7.7158 0H4V18.1074A2.9977 2.9977 0 014.52 16.4189l2.711-3.9814A.9992.9992 0 018.0576 12h7.9961a.9928.9928 0 01.7647.3545l3.3994 4.2685a1.0007 1.0007 0 00.4443.3184L28 19.5781zM24.5547 6a2 2 0 012-2H30a3.9756 3.9756 0 00-7.304 1H16V7h6.696A3.9756 3.9756 0 0030 8H26.5547A2 2 0 0124.5547 6z"></path></svg>`;
export default svgResultCarbonIcon;
