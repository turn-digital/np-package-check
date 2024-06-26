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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30,19a4.974,4.974,0,0,0-3.2061-4.6582A6.9711,6.9711,0,0,0,13.7578,12.9a13.1418,13.1418,0,0,1,.1314-8.52A1.015,1.015,0,0,0,12.98,3a.9825.9825,0,0,0-.1746.0156A13.0958,13.0958,0,0,0,14.63,28.9971c.164.0063.3281,0,.4907,0a13.0412,13.0412,0,0,0,10.29-5.0386A4.99,4.99,0,0,0,30,19ZM14.7034,26.9976a11.0945,11.0945,0,0,1-3.201-21.584,15.1817,15.1817,0,0,0,.8443,9.3676A4.9877,4.9877,0,0,0,15,24h7.6772a11.0991,11.0991,0,0,1-7.5561,2.9976C14.9827,26.9976,14.8428,27.0024,14.7034,26.9976ZM25,22H15a2.9945,2.9945,0,0,1-.6963-5.9082l.6587-.1572.0986-.67a4.9923,4.9923,0,0,1,9.878.0005l.0986.6695.6587.1572A2.9945,2.9945,0,0,1,25,22Z"></path></svg>`;
export default svgResultCarbonIcon;
