/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Instance as FlatpickrInstance } from 'flatpickr/dist/types/instance';
import { Plugin } from 'flatpickr/dist/types/options';
import Handle from '../../globals/internal/handle';
import CDSDatePickerInput from './date-picker-input';
/**
 * The configuration for the Flatpickr plugin to fix Flatpickr's behavior of certain events.
 */
export interface DatePickerFixEventsPluginConfig {
    /**
     * The input box to enter starting date.
     */
    inputFrom: CDSDatePickerInput;
    /**
     * The input box to enter end date.
     */
    inputTo?: CDSDatePickerInput;
}
/**
 * `FlatpickrInstance` with additional properties used for `carbonFlatpickrFixEventsPlugin`.
 */
export interface ExtendedFlatpickrInstanceFixEventsPlugin extends FlatpickrInstance {
    /**
     * The handle for `keydown` event handler in the `<input>` for the starting date.
     */
    _hCDSCEDatePickerFixEventsPluginKeydownFrom?: Handle | null;
    /**
     * The handle for `keydown` event handler in the `<input>` for the end date.
     */
    _hCDSCEDatePickerFixEventsPluginKeydownTo?: Handle | null;
}
/**
 * @param config Plugin configuration.
 * @returns A Flatpickr plugin to fix Flatpickr's behavior of certain events.
 */
declare const _default: (config: DatePickerFixEventsPluginConfig) => Plugin;
export default _default;

//# sourceMappingURL=fix-events-plugin.d.ts.map
