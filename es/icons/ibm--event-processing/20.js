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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="16" cy="29" r="2"></circle><path d="M22.5 30h-2.5v-2h2.5c3.0327 0 5.5-2.4673 5.5-5.5 0-2.5634-1.7395-4.7644-4.23-5.3528l.46-1.9465c3.3972.8026 5.77 3.8042 5.77 7.2993 0 4.1355-3.3645 7.5-7.5 7.5zM20.4141 14.5859l-3-3c-.3774-.3779-.8799-.5859-1.4141-.5859s-1.0366.208-1.4143.5859l-2.9998 3c-.3899.3896-.5859.9019-.5859 1.4141s.196 1.0244.5859 1.4141l2.9998 3c.3777.3779.8801.5859 1.4143.5859s1.0366-.208 1.4141-.5859l3-3c.3899-.3896.5859-.9019.5859-1.4141s-.196-1.0244-.5859-1.4141zm-4.4141 4.4141l-3-3 3-3 2.9998 3-2.9998 3z"></path><circle cx="16" cy="3" r="2"></circle><path d="m7.77,16.7993c-3.3972-.8026-5.77-3.8042-5.77-7.2993C2,5.3645,5.3645,2,9.5,2h2.5v2h-2.5c-3.0327,0-5.5,2.4673-5.5,5.5,0,2.5634,1.7395,4.7645,4.23,5.3528l-.46,1.9465Z"></path></svg>`;
export default svgResultCarbonIcon;
