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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M7 12a5 5 0 115-5H10a3 3 0 10-3 3zM25 12V10a3 3 0 10-3-3H20a5 5 0 115 5zM7 30A5 5 0 017 20v2a3 3 0 103 3h2A5.0055 5.0055 0 017 30zM25 30a5.0055 5.0055 0 01-5-5h2a3 3 0 103-3V20a5 5 0 010 10z"></path><path d="M20,18.5859V13.4141L25.707,7.707a1,1,0,1,0-1.414-1.414l-4.4995,4.5a3.9729,3.9729,0,0,0-7.587,0L7.707,6.293a.9994.9994,0,0,0-1.414,0h0a.9994.9994,0,0,0,0,1.414L12,13.4141v5.1718L6.293,24.293a.9994.9994,0,0,0,0,1.414h0a.9994.9994,0,0,0,1.414,0l4.5-4.5a3.9729,3.9729,0,0,0,7.587,0l4.4995,4.5a1,1,0,0,0,1.414-1.414ZM18,20a2,2,0,0,1-4,0V12a2,2,0,0,1,4,0Z"></path></svg>`;
export default svgResultCarbonIcon;
