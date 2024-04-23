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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,10V8H27.8989a4.9678,4.9678,0,0,0-.7319-1.7529l1.49-1.49-1.414-1.414-1.49,1.49A4.9678,4.9678,0,0,0,24,4.1011V2H22V4.1011a4.9678,4.9678,0,0,0-1.7529.7319l-1.49-1.49-1.414,1.414,1.49,1.49A4.9678,4.9678,0,0,0,18.1011,8H16v2h2.1011a4.9678,4.9678,0,0,0,.7319,1.7529l-1.49,1.49,1.414,1.414,1.49-1.49A4.9678,4.9678,0,0,0,22,13.8989V16h2V13.8989a4.9678,4.9678,0,0,0,1.7529-.7319l1.49,1.49,1.414-1.414-1.49-1.49A4.9678,4.9678,0,0,0,27.8989,10Zm-7,2a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,23,12Z"></path><path d="M25,30h-.17C5.18,28.87,2.39,12.29,2,7.23A3,3,0,0,1,4.7611,4.0088Q4.88,4,5,4h5.27a2,2,0,0,1,1.86,1.26L13.65,9a2,2,0,0,1-.44,2.16l-2.13,2.15a9.36,9.36,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,23,18.35l3.77,1.51A2,2,0,0,1,28,21.72V27A3,3,0,0,1,25,30ZM5,6a1,1,0,0,0-1.0032.9968c0,.0278.001.0555.0032.0832C4.46,13,7.41,27,24.94,28a1,1,0,0,0,1.0581-.9382Q26,27.0309,26,27V21.72l-3.77-1.51-2.87,2.85L18.88,23C10.18,21.91,9,13.21,9,13.12l-.06-.48,2.84-2.87L10.28,6Z"></path></svg>`;
export default svgResultCarbonIcon;
