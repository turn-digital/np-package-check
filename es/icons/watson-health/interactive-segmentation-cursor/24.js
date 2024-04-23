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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29.4139,24,15.9989,10.5663a2.0473,2.0473,0,0,0-2.8281,0l-2.586,2.586a2.0023,2.0023,0,0,0,0,2.8283L23.9989,29.4145a2.0021,2.0021,0,0,0,2.8281,0l2.5869-2.5865a1.9993,1.9993,0,0,0,0-2.8283Zm-17.415-9.4335,2.5859-2.5859,3.5,3.5L15.498,18.0676l-3.5-3.5ZM25.413,28l-8.5009-8.5188,2.5867-2.587L28,25.4143Z"></path><path d="M7.586 18.586H10.414V21.413999999999998H7.586z" transform="rotate(-45 9 20)"></path><path d="M18.586 7.586H21.413999999999998V10.414H18.586z" transform="rotate(-45 20 9)"></path><path d="M7.586 7.586H10.414V10.414H7.586z" transform="rotate(-45 9 9)"></path><path d="M11 2L2 2 2 11 4 11 4 4 11 4 11 2z"></path></svg>`;
export default svgResultCarbonIcon;
