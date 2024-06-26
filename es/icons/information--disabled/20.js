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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 3.4141L28.5859 2 2 28.5859 3.4141 30l3.4433-3.4434A13.9614 13.9614 0 0026.5565 6.8574zM28 16A11.9734 11.9734 0 018.2678 25.146L15 18.4141V22H13v2h7V22H17V16.4141l8.146-8.146A11.8967 11.8967 0 0128 16zM16 8a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 8z"></path><path d="M5.67,22.0854A11.9829,11.9829,0,0,1,22.0856,5.67L23.54,4.2163A13.985,13.985,0,0,0,4.2162,23.54Z"></path></svg>`;
export default svgResultCarbonIcon;
