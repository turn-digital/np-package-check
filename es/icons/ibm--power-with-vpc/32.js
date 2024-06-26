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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M9 21H3c-1.1028 0-2-.8972-2-2v-6c0-1.1028.8972-2 2-2h6c1.1028 0 2 .8972 2 2v6c0 1.1028-.8972 2-2 2zm-6-8v6h6v-6H3zM11.6926 29.3245c-3.0789-.9945-5.7393-3.0491-7.4912-5.7853l1.6846-1.0784c1.5022 2.3466 3.7827 4.1082 6.4214 4.9606l-.6147 1.9031z"></path><circle cx="19" cy="27" r="1"></circle><path d="M29 31h-13c-1.1028 0-2-.8972-2-2v-4c0-1.1028.8972-2 2-2h13c1.1028 0 2 .8972 2 2v4c0 1.1028-.8972 2-2 2zm-13-6v4h13v-4h-13zM26.8896 21h2.1848c.6057-1.5889.9255-3.29.9255-5 0-.6719-.0642-1.3384-.1592-2h-2.0269c.1106.6592.186 1.3262.186 2 0 1.7549-.3867 3.4297-1.1104 5zM28 7c0-.3701-.0669-.7212-.1611-1.0615l1.8574-1.0723-1-1.7324-1.8467 1.0664c-.5-.5088-1.1384-.873-1.8496-1.0581V1h-2v2.1421c-.7112.1851-1.3496.5493-1.8496 1.0581l-1.8467-1.0664-1 1.7324 1.8574 1.0723c-.0942.3403-.1611.6914-.1611 1.0615s.0669.7212.1611 1.0615l-1.8574 1.0723 1 1.7324 1.8467-1.0664c.5.5088 1.1394.8721 1.8496 1.0576v2.1426h2v-2.1426c.7102-.1855 1.3496-.5488 1.8496-1.0576l1.8467 1.0664 1-1.7324-1.8574-1.0723c.0942-.3403.1611-.6914.1611-1.0615zm-4 2c-1.1028 0-2-.8975-2-2s.8972-2 2-2 2 .8975 2 2-.8972 2-2 2zM5.886 9.5392l-1.6846-1.0784C6.7915 4.4153 11.2021 2 16 2v2c-4.1125 0-7.8936 2.0707-10.114 5.5392z"></path></svg>`;
export default svgResultCarbonIcon;
