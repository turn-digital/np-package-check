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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M29.7554 21.3447c-.1899-.2188-.4656-.3447-.7554-.3447h-2v-2c0-1.1025-.8972-2-2-2h-4c-1.1028 0-2 .8975-2 2v2h-2c-.2898 0-.5654.126-.7554.3447-.1899.2192-.2756.5098-.2346.7969l1 7c.0703.4922.4924.8584.99.8584h10c.4976 0 .9197-.3662.99-.8584l1-7c.041-.2871-.0447-.5776-.2346-.7969zm-8.7554-2.3447h4v2h-4v-2zm6.1328 9h-8.2656l-.7141-5h9.6938l-.7141 5zM10 20H12V30H10z"></path><path d="M16.7808 17.875l-1.9072-2.3838-1.4419-3.6055c-.4585-1.1455-1.5518-1.8857-2.7856-1.8857h-5.646c-1.6543 0-3 1.3457-3 3v7c0 1.1025.897 2 2 2h1v8h2v-10h-3v-7c0-.5518.4487-1 1-1h5.646c.4111 0 .7759.2471.9282.6289l1.645 3.9961 2 2.5 1.5615-1.25zM4 5c0-2.2056 1.7944-4 4-4s4 1.7944 4 4c0 2.2056-1.7944 4-4 4s-4-1.7944-4-4zm2 0c0 1.1028.897 2 2 2s2-.8972 2-2c0-1.1028-.897-2-2-2s-2 .8972-2 2z"></path></svg>`;
export default svgResultCarbonIcon;
