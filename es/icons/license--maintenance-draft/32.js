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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M29.707 19.293l-3-3a.9994.9994 0 00-1.414 0L16 25.5859V30h4.4141l9.2929-9.293A.9994.9994 0 0029.707 19.293zM19.5859 28H18V26.4141l5-5L24.5859 23zM26 21.5859L24.4141 20 26 18.4141 27.5859 20zM20 13V11H17.8579a3.94 3.94 0 00-.4248-1.019L18.95 8.4644 17.5356 7.05 16.019 8.5669A3.9443 3.9443 0 0015 8.1421V6H13V8.1421a3.9443 3.9443 0 00-1.019.4248L10.4644 7.05 9.05 8.4644 10.5669 9.981A3.94 3.94 0 0010.1421 11H8v2h2.1421a3.94 3.94 0 00.4248 1.019L9.05 15.5356 10.4644 16.95l1.5166-1.5166A3.9443 3.9443 0 0013 15.8579V18h2V15.8579a3.9443 3.9443 0 001.019-.4248L17.5356 16.95 18.95 15.5356 17.4331 14.019A3.94 3.94 0 0017.8579 13zm-6 1a2 2 0 112-2A2.0025 2.0025 0 0114 14z"></path><path d="M12,30H6a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,6,2H22a2.0021,2.0021,0,0,1,2,2V14H22V4H6V28h6Z"></path></svg>`;
export default svgResultCarbonIcon;
