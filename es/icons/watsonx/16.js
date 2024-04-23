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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m27.5381,21.9951l1.7734.9238c1.1045-2.1191,1.6885-4.5117,1.6885-6.9189,0-8.271-6.7285-15-15-15-3.3744,0-6.5818,1.1193-9.2048,3.1662-.244-.106-.5123-.1662-.7952-.1662-1.1046,0-2,.8954-2,2s.8954,2,2,2,2-.8954,2-2c0-.0751-.0141-.1464-.0222-.2194,1.0764-.8479,2.2672-1.5121,3.5358-1.978-.3267.6641-.5136,1.4088-.5136,2.1974,0,1.6301.7959,3.0668,2.0069,3.9802-.0457.3471-.0767.6974-.0767,1.0496,0,.7824.1179,1.5369.3282,2.2522-.6967-.1986-1.429-.3118-2.1885-.3118-3.7028,0-6.8172,2.5322-7.7248,5.9533-.2175-.9415-.345-1.9169-.345-2.9235,0-2.1152.4917-4.1328,1.4619-5.9956l-1.7744-.9238c-1.104,2.1211-1.6875,4.5137-1.6875,6.9194,0,8.2715,6.729,15,15,15,3.3738,0,6.5814-1.1195,9.2045-3.1664.244.106.5125.1664.7955.1664,1.1046,0,2-.8954,2-2s-.8954-2-2-2-2,.8954-2,2c0,.0751.014.1464.0221.2194-1.0765.8477-2.2672,1.5118-3.5356,1.9778.3266-.6641.5135-1.4086.5135-2.1971,0-1.63-.7958-3.0665-2.0067-3.9799.0457-.3479.077-.6985.077-1.0504,0-.782-.1178-1.5361-.328-2.251.6963.1985,1.4283.3116,2.1874.3116,3.7032,0,6.8178-2.533,7.725-5.955.2177.9418.3453,1.9177.3453,2.9247,0,2.1172-.4922,4.1338-1.4619,5.9951ZM16,3c1.6543,0,3,1.3457,3,3s-1.3457,3-3,3-3-1.3457-3-3,1.3457-3,3-3Zm0,26c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3,3,1.3457,3,3-1.3457,3-3,3Zm0-8c-2.7568,0-5,2.2432-5,5,0,.7863.1855,1.5291.5104,2.1917-1.851-.684-3.5008-1.7778-4.8472-3.1708-1.0212-1.1095-1.5934-2.5366-1.5934-4.0511,0-3.3086,2.6914-5.9995,6-5.9995s6.0005,2.6909,6.0005,5.9995c0,.0496-.0124.0981-.0136.1477-.3413-.0739-.6936-.1174-1.0567-.1174Zm10.9297-9.9702c0,3.3086-2.6914,6.0005-6,6.0005s-5.9995-2.6919-5.9995-6.0005c0-.0496.0123-.0976.0135-.1471.3412.0739.6934.1173,1.0563.1173,2.7568,0,5-2.2432,5-5,0-.7866-.1863-1.5293-.5114-2.1921,1.851.6838,3.5009,1.7775,4.8473,3.1703,1.0214,1.1096,1.5938,2.5363,1.5938,4.0515Z"></path></svg>`;
export default svgResultCarbonIcon;
