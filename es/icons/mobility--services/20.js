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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29.3379 19.9336l-7.7324-2.7783L18.374 13.0967A2.99 2.99 0 0016.0537 12H8.0576a2.9982 2.9982 0 00-2.48 1.3115L2.8662 17.2949A4.9884 4.9884 0 002 20.1074V26a1 1 0 001 1H5.1421a3.9806 3.9806 0 007.7158 0h6.2842a3.9806 3.9806 0 007.7158 0H29a1 1 0 001-1V20.875A1 1 0 0029.3379 19.9336zM9 28a2 2 0 112-2A2.0027 2.0027 0 019 28zm14 0a2 2 0 112-2A2.0025 2.0025 0 0123 28zm5-3H26.8579a3.9806 3.9806 0 00-7.7158 0H12.8579a3.9806 3.9806 0 00-7.7158 0H4V20.1074A2.9977 2.9977 0 014.52 18.4189l2.711-3.9814A.9992.9992 0 018.0576 14h7.9961a.9928.9928 0 01.7647.3545l3.3994 4.2685a1.0007 1.0007 0 00.4443.3184L28 21.5781zM28 2H24a2.0023 2.0023 0 00-2 2v8a2.0023 2.0023 0 002 2h4a2.0023 2.0023 0 002-2V4A2.0023 2.0023 0 0028 2zm0 2V6H24V4zm-4 8V8h4v4z"></path></svg>`;
export default svgResultCarbonIcon;
