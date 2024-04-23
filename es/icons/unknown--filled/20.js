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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29.391,14.527L17.473,2.609C17.067,2.203,16.533,2,16,2s-1.067,0.203-1.473,0.609L2.609,14.527C2.203,14.933,2,15.466,2,16	s0.203,1.067,0.609,1.473l11.917,11.917C14.933,29.797,15.467,30,16,30s1.067-0.203,1.473-0.609l11.917-11.917	C29.797,17.067,30,16.534,30,16S29.797,14.933,29.391,14.527z M16,24c-0.828,0-1.5-0.671-1.5-1.5S15.172,21,16,21s1.5,0.671,1.5,1.5	S16.828,24,16,24z M17.125,17.248v1.877h-2.25V15H17c1.034,0,1.875-0.841,1.875-1.875S18.034,11.25,17,11.25h-2	c-1.034,0-1.875,0.841-1.875,1.875v0.5h-2.25v-0.5C10.875,10.851,12.726,9,15,9h2c2.274,0,4.125,1.851,4.125,4.125	C21.125,15.358,19.342,17.182,17.125,17.248z"></path><path fill="none" d="M16,21c0.828,0,1.5,0.672,1.5,1.5S16.828,24,16,24c-0.828,0-1.5-0.672-1.5-1.5S15.172,21,16,21	z M17.125,17.248c2.217-0.066,4-1.89,4-4.123C21.125,10.851,19.274,9,17,9h-2c-2.274,0-4.125,1.851-4.125,4.125v0.5h2.25v-0.5	c0-1.034,0.841-1.875,1.875-1.875h2c1.034,0,1.875,0.841,1.875,1.875S18.034,15,17,15h-2.125v4.125h2.25V17.248z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;