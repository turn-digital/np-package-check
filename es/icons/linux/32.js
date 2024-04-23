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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M29.8945,23.542l-1.7238-3.4473a1.9994,1.9994,0,0,0-1.7886-1.1054h-.4683a14.887,14.887,0,0,0-1.8193-4.5977C23.0647,12.4429,22,10.4277,22,8A6,6,0,0,0,10,8a13.0041,13.0041,0,0,1-2.0486,6.2153,14.7022,14.7022,0,0,0-1.8708,4.7759H5.6184a2.0007,2.0007,0,0,0-1.7893,1.106L2.1055,23.5439a1,1,0,0,0,.0971,1.0508L6.2319,29.92a2.9995,2.9995,0,0,0,3.8482.6519l1.8735-1.1241A13.8223,13.8223,0,0,0,16,30a13.8034,13.8034,0,0,0,4.0488-.5527L21.92,30.57a2.9819,2.9819,0,0,0,1.5385.43,3.0385,3.0385,0,0,0,2.3389-1.1187l4-5.2885A1.001,1.001,0,0,0,29.8945,23.542Zm-7.5683-8.2158a14.8311,14.8311,0,0,1,1.5591,3.6631H21.738a16.6591,16.6591,0,0,0-.98-2.6455,12.7083,12.7083,0,0,1-.8789-2.4454,8.8046,8.8046,0,0,0,1.0034-1.4277l.0384-.0718A30.746,30.746,0,0,0,22.3262,15.3262ZM12,21a9.3959,9.3959,0,0,1,1.0728-3.8516c.2563-.5825.5158-1.1757.726-1.7993a4.0474,4.0474,0,0,0,4.4024,0c.21.6236.47,1.2168.726,1.7993A9.3959,9.3959,0,0,1,20,21c0,1.2881-.4146,3-4,3S12,22.2881,12,21Zm6.5105-8.5752A3.6265,3.6265,0,0,1,16,14a3.6273,3.6273,0,0,1-2.5107-1.5757,7.6356,7.6356,0,0,1,5.0212,0ZM12,8a4,4,0,0,1,8,0,10.9164,10.9164,0,0,0,.4673,3.1152A7.9811,7.9811,0,0,0,19,10.4849V8H17v2.0542a9.2522,9.2522,0,0,0-2,0V8H13v2.4849a7.9019,7.9019,0,0,0-1.4785.6372A10.7093,10.7093,0,0,0,12,8ZM9.7146,15.1592A29.8007,29.8007,0,0,0,11.0693,12.38l.0484.09a8.8046,8.8046,0,0,0,1.0034,1.4277,12.7083,12.7083,0,0,1-.8789,2.4454,16.6574,16.6574,0,0,0-.981,2.6474H8.1047A14.0567,14.0567,0,0,1,9.7146,15.1592Zm1.3708,12.4775L9.0508,28.8574a.9866.9866,0,0,1-1.2529-.1806L4.1724,23.8833l1.4458-2.8921h3.706L11.49,26.3853A1.0036,1.0036,0,0,1,11.0854,27.6367Zm2.316.1177a2.9571,2.9571,0,0,0-.0562-2.11A9.03,9.03,0,0,0,16,26a9.0237,9.0237,0,0,0,2.6562-.3564,2.9889,2.9889,0,0,0-.0546,2.11,13.8722,13.8722,0,0,1-5.2,0Zm10.83.8833a.996.996,0,0,1-1.2827.2178l-2.0342-1.2207h0a1.01,1.01,0,0,1-.396-1.273l2.157-5.3725h3.7058l1.4461,2.892Z"></path></svg>`;
export default svgResultCarbonIcon;
