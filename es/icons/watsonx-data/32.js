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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="m26,24c-1.1046,0-2,.8954-2,2,0,.0764.0142.1488.0225.2229-2.2808,1.7963-5.0792,2.7771-8.0225,2.7771-2.7746,0-5.3432-.881-7.4566-2.3676.2576.0261.517.0444.7798.0444,4.2329,0,7.6768-3.4438,7.6768-7.6768h-2c0,3.1304-2.5464,5.6768-5.6768,5.6768-2.2111,0-4.1977-1.2816-5.1318-3.2725-.1365-.2972-.2595-.6007-.3738-.9094.6602.322,1.3998.5051,2.1824.5051,2.7568,0,5-2.2432,5-5v-2h-2v2c0,1.6543-1.3457,3-3,3s-3-1.3457-3-3c0-2.1152.4917-4.1328,1.4619-5.9956l-1.7744-.9238c-1.104,2.1211-1.6875,4.5137-1.6875,6.9194,0,8.271,6.729,15,15,15,3.3744,0,6.5818-1.1193,9.2048-3.1662.244.106.5123.1662.7952.1662,1.1046,0,2-.8954,2-2s-.8954-2-2-2Z"></path><path d="M21 21H23V23H21z" transform="rotate(90 22 22)"></path><path d="M15 15H17V17H15z" transform="rotate(90 16 16)"></path><path d="M9 9H11V11H9z" transform="rotate(-90 10 10)"></path><path d="m16,1c-3.3744,0-6.5818,1.1193-9.2048,3.1662-.244-.106-.5123-.1662-.7952-.1662-1.1046,0-2,.8954-2,2s.8954,2,2,2,2-.8954,2-2c0-.0764-.0142-.1488-.0225-.2229,2.2808-1.7963,5.0792-2.7771,8.0225-2.7771,2.7708,0,5.3363.8784,7.4481,2.3613-.249-.0242-.5005-.038-.7547-.038-4.2329,0-7.6768,3.4438-7.6768,7.6768h2c0-3.1304,2.5464-5.6768,5.6768-5.6768,2.0554,0,3.9068,1.0953,4.9186,2.8651.2153.4283.4053.8701.5729,1.3237-.6615-.3234-1.4005-.5121-2.1849-.5121-2.7568,0-5,2.2432-5,5v2h2v-2c0-1.6543,1.3457-3,3-3s3,1.3457,3,3c0,2.1152-.4917,4.1328-1.4619,5.9956l1.7744.9238c1.104-2.1211,1.6875-4.5137,1.6875-6.9194C31,7.729,24.271,1,16,1Z"></path></svg>`;
export default svgResultCarbonIcon;