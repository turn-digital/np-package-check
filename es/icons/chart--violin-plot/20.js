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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"></path><path d="M14.86 7.8232L13 4.7231V2H11V4.7231l-1.86 3.1A7.9986 7.9986 0 008 11.939v.122a7.9961 7.9961 0 001.14 4.1158l1.86 3.1V26h2V19.2769l1.86-3.1A7.9986 7.9986 0 0016 12.061v-.122A7.9961 7.9961 0 0014.86 7.8232zM12 6.9434l1.145 1.9087A6.0027 6.0027 0 0113.9185 11h-3.837a6.0086 6.0086 0 01.7735-2.1484zm0 10.1132l-1.145-1.9087A6.0027 6.0027 0 0110.0815 13h3.837a6.0086 6.0086 0 01-.7735 2.1484zM27.86 11.8232L26 8.7231V2H24V8.7231l-1.86 3.1A7.9986 7.9986 0 0021 15.939v.122a7.9961 7.9961 0 001.14 4.1158l1.86 3.1V26h2V23.2769l1.86-3.1A7.9986 7.9986 0 0029 16.061v-.122A7.9961 7.9961 0 0027.86 11.8232zm-2.86-.88l1.145 1.9087A6.0027 6.0027 0 0126.9185 15h-3.837a6.0086 6.0086 0 01.7735-2.1484zm0 10.1132l-1.145-1.9087A6.0027 6.0027 0 0123.0815 17h3.837a6.0086 6.0086 0 01-.7735 2.1484z"></path></svg>`;
export default svgResultCarbonIcon;
