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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24.5805 13.65A9.7327 9.7327 0 006.286 17.5387 6.75 6.75 0 007 31H23a8.7465 8.7465 0 001.5805-17.35zM23 29.5H7a5.2373 5.2373 0 01-.6993-10.4293 9.7265 9.7265 0 001.1036 3.7838.75.75 0 101.3213-.709A8.25 8.25 0 0122.752 13.5133a8.754 8.754 0 00-6.315 2.95.75.75 0 101.1245.9922A7.25 7.25 0 1123 29.5zM31.8983 10.2548a.7582.7582 0 00-1.0364-.2776l-3.02 1.7438A.7587.7587 0 1028.6 13.035l3.02-1.7438A.7589.7589 0 0031.8983 10.2548zM22.6764 7.87a.7583.7583 0 001.0364-.2776l1.7438-3.02a.7587.7587 0 00-1.314-.7588l-1.7438 3.02A.7588.7588 0 0022.6764 7.87zM16 6.0811a.759.759 0 00.7588-.7588V1.8347a.7588.7588 0 10-1.5175 0V5.3223A.7589.7589 0 0016 6.0811zM8.2873 7.5922a.7587.7587 0 001.314-.7588l-1.7438-3.02a.7587.7587 0 10-1.314.7588zM4.1585 11.721l-3.02-1.7438a.7587.7587 0 10-.7588 1.314L3.4 13.035a.7587.7587 0 10.7588-1.314z"></path></svg>`;
export default svgResultCarbonIcon;
