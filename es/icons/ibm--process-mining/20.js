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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="m26,22c-1.8584,0-3.4106,1.2798-3.8579,3h-12.2842c-.3635-1.3984-1.4629-2.4927-2.8579-2.8579v-3.1421c0-1.1025.8972-2,2-2h14c2.2056,0,4-1.7944,4-4v-3.1421c1.7202-.4473,3-1.9995,3-3.8579,0-2.2056-1.7944-4-4-4s-4,1.7944-4,4c0,1.8584,1.2798,3.4106,3,3.8579v3.1421c0,1.1025-.8972,2-2,2h-14c-2.2056,0-4,1.7944-4,4v3.1421c-1.7202.4473-3,1.9995-3,3.8579,0,2.2056,1.7944,4,4,4,1.8584,0,3.4106-1.2798,3.8579-3h12.2842c.4473,1.7202,1.9995,3,3.8579,3,2.2056,0,4-1.7944,4-4s-1.7944-4-4-4Zm-2-16c0-1.1025.8972-2,2-2s2,.8975,2,2-.8972,2-2,2-2-.8975-2-2ZM6,28c-1.1028,0-2-.8975-2-2s.8972-2,2-2,2,.8975,2,2-.8972,2-2,2Zm20,0c-1.1028,0-2-.8975-2-2s.8972-2,2-2,2,.8975,2,2-.8972,2-2,2Z"></path><path d="m6,10c.7395,0,1.4241-.2153,2.019-.5669l3.5669,3.5669,1.4141-1.4141-3.5669-3.5669c.3516-.5947.5669-1.2798.5669-2.019,0-2.2056-1.7944-4-4-4S2,3.7944,2,6s1.7944,4,4,4Zm0-6c1.1028,0,2,.8975,2,2s-.8972,2-2,2-2-.8975-2-2,.8972-2,2-2Z"></path></svg>`;
export default svgResultCarbonIcon;
