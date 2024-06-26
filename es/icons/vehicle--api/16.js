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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 11a1.9907 1.9907 0 00-.8247.1821L24.8337 9.51A3.45 3.45 0 0025 8.5a3.45 3.45 0 00-.1663-1.01l2.3416-1.6723A1.9975 1.9975 0 1026 4c0 .064.0129.124.0188.1865L23.7273 5.8232A3.4652 3.4652 0 0021.5 5a3.5 3.5 0 000 7 3.4652 3.4652 0 002.2273-.8232l2.2915 1.6367C26.0129 12.876 26 12.936 26 13a2 2 0 102-2zm-6.5-1A1.5 1.5 0 1123 8.5 1.5017 1.5017 0 0121.5 10zM29.3379 19.9336l-7.7324-2.7783L18.374 13.0967A2.99 2.99 0 0016.0537 12H8.0576a2.9982 2.9982 0 00-2.48 1.3115L2.8662 17.2949A4.9884 4.9884 0 002 20.1074V26a1 1 0 001 1H5.1421a3.9806 3.9806 0 007.7158 0h6.2842a3.9806 3.9806 0 007.7158 0H29a1 1 0 001-1V20.875A1 1 0 0029.3379 19.9336zM9 28a2 2 0 112-2A2.0027 2.0027 0 019 28zm14 0a2 2 0 112-2A2.0025 2.0025 0 0123 28zm5-3H26.8579a3.9806 3.9806 0 00-7.7158 0H12.8579a3.9806 3.9806 0 00-7.7158 0H4V20.1074A2.9977 2.9977 0 014.52 18.4189l2.711-3.9814A.9992.9992 0 018.0576 14h7.9961a.9928.9928 0 01.7647.3545l3.3994 4.2685a1.0007 1.0007 0 00.4443.3184L28 21.5781z"></path></svg>`;
export default svgResultCarbonIcon;
