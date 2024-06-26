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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="m28.5678,12.8926l-.0366-.0934-3.5388-9.2356c-.072-.181-.1995-.3346-.3642-.4386-.3375-.2095-.7699-.1863-1.083.0582-.1512.1228-.2608.2892-.3141.4765l-2.3894,7.3105h-9.6756l-2.3894-7.3105c-.0518-.1884-.1617-.3556-.3141-.4779-.3131-.2445-.7455-.2677-1.083-.0582-.1643.1045-.2917.2579-.3642.4386l-3.5456,9.2315-.0352.0934c-1.0465,2.7345-.1578,5.8315,2.1796,7.5948l.0122.0095.0325.023,5.3908,4.037,2.667,2.0185,1.6246,1.2265c.3905.2965.9308.2965,1.3213,0l1.6246-1.2265,2.667-2.0185,5.4233-4.0614.0135-.0108c2.3319-1.7635,3.219-4.8551,2.1769-7.5867Z"></path></svg>`;
export default svgResultCarbonIcon;
