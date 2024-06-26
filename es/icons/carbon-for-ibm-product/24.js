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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22.509,12.689l-6-3.55C16.352,9.046,16.176,9,16,9s-0.352,0.046-0.509,0.14l-6,3.55C9.187,12.869,9,13.196,9,13.55v6.9	c0,0.354,0.187,0.681,0.491,0.86l6,3.55C15.648,24.954,15.824,25,16,25s0.352-0.046,0.509-0.14l6-3.55	C22.813,21.131,23,20.804,23,20.45v-6.9C23,13.196,22.813,12.869,22.509,12.689z M21,19.88l-5,2.958l-5-2.958v-5.76l5-2.958l5,2.958	V19.88z"></path><path d="M6 20.184V11.07l6.2-3.664-1.017-1.722L4.491 9.639C4.187 9.819 4 10.146 4 10.5v9.684C2.839 20.598 2 21.698 2 23c0 1.654 1.346 3 3 3s3-1.346 3-3C8 21.698 7.161 20.598 6 20.184zM5 24c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1S5.551 24 5 24zM27 20c-1.654 0-3 1.346-3 3 0 .353.072.687.185 1.002L16 28.838l-6.404-3.784-1.017 1.722 6.912 4.084C15.648 30.954 15.824 31 16 31s.352-.046.509-.139l8.96-5.295C25.919 25.835 26.439 26 27 26c1.654 0 3-1.346 3-3S28.654 20 27 20zM27 24c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1S27.551 24 27 24zM16 7c.731 0 1.392-.273 1.913-.708L26 11.071V18h2v-7.5c0-.354-.187-.681-.491-.861l-8.567-5.062C18.978 4.39 19 4.198 19 4c0-1.654-1.346-3-3-3s-3 1.346-3 3S14.346 7 16 7zM16 3c.551 0 1 .448 1 1s-.449 1-1 1-1-.448-1-1S15.449 3 16 3z"></path></svg>`;
export default svgResultCarbonIcon;
