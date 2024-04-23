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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M12 25c-.7383 0-1.3762.4048-1.7227 1h-5.6301l2.6479-5.0923c.2273.0552.4609.0923.7048.0923 1.6543 0 3-1.3457 3-3s-1.3457-3-3-3-3 1.3457-3 3c0 .6787.2349 1.2979.6162 1.8013l-3.5034 6.7373c-.1611.3101-.1489.6816.0325.9805.1812.2983.5054.481.8547.481h7.2773c.3464.5952.9844 1 1.7227 1 1.1045 0 2-.8955 2-2s-.8955-2-2-2zm-4-8c.5515 0 1 .4487 1 1s-.4485 1-1 1-1-.4487-1-1 .4485-1 1-1zM29.8872 26.5386l-4.041-7.771c.0986-.2363.1538-.4956.1538-.7676 0-1.1045-.8955-2-2-2s-2 .8955-2 2 .8955 2 2 2c.0757 0 .1477-.0142.2212-.0225l3.1316 6.0225h-4.5371c-.4141-1.1611-1.5137-2-2.8157-2-1.6543 0-3 1.3457-3 3s1.3457 3 3 3c1.302 0 2.4016-.8389 2.8157-2h6.1843c.3494 0 .6736-.1826.8547-.481.1814-.2988.1936-.6704.0325-.9805zm-9.8872 1.4614c-.5515 0-1-.4487-1-1s.4485-1 1-1 1 .4487 1 1-.4485 1-1 1zM21 8c-.2439 0-.4778.0371-.7048.0923l-3.408-6.5537c-.1721-.3311-.5298-.5386-.8872-.5386s-.7151.2075-.8872.5386l-3.8914 7.4839c-.0737-.0083-.1458-.0225-.2214-.0225-1.1045 0-2 .8955-2 2s.8955 2 2 2 2-.8955 2-2c0-.272-.0552-.5312-.1538-.7676l3.1538-6.0649 2.6162 5.0312c-.3813.5034-.6162 1.1226-.6162 1.8013 0 1.6543 1.3457 3 3 3s3-1.3457 3-3-1.3457-3-3-3zm0 4c-.5515 0-1-.4487-1-1s.4485-1 1-1 1 .4487 1 1-.4485 1-1 1z"></path></svg>`;
export default svgResultCarbonIcon;