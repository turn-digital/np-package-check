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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M21.684 19.051L19.167 19.891 13 15.486 13 7.369 15.555 5.665 14.445 4.001 12 5.631 9.555 4.001 8.445 5.665 11 7.369 11 14.057 6 10.486 6 8 4 8 4 10.279 1.684 11.051 2.316 12.949 4.833 12.11 10.28 16.001 4.833 19.891 2.316 19.051 1.684 20.949 4 21.721 4 24 6 24 6 21.515 11 17.944 11 24.631 8.445 26.335 9.555 27.999 12 26.368 14.445 27.999 15.555 26.335 13 24.631 13 17.943 18 21.515 18 24 20 24 20 21.721 22.316 20.949 21.684 19.051z"></path><path fill="none" d="M23.75,10h-1.5V6h1.5ZM23,11a1,1,0,1,0,1,1A1,1,0,0,0,23,11Z"></path><path d="M29.9115,13.9355,23.6284,2.3706a.7181.7181,0,0,0-1.2568,0L16.0885,13.9355A.72.72,0,0,0,16.72,15H29.28A.72.72,0,0,0,29.9115,13.9355ZM22.25,6h1.5v4h-1.5ZM23,13a1,1,0,1,1,1-1A1,1,0,0,1,23,13Z"></path></svg>`;
export default svgResultCarbonIcon;
