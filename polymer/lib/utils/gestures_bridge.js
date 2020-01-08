/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/**
 * @fileoverview This file is a backwards-compatibility shim. Before Polymer
 *     converted to ES Modules, it wrote its API out onto the global Polymer
 *     object. The *_bridge.js files (like this one) maintain compatibility
 *     with that API.
 */

import './boot_bridge.js';
import './async_bridge.js';
import './debounce_bridge.js';
import './settings_bridge.js';
import {gestures as _gestures, recognizers as _recognizers, deepTargetFind as _deepTargetFind, addListener as _addListener, removeListener as _removeListener, register as _register, setTouchAction as _setTouchAction, prevent as _prevent, resetMouseCanceller as _resetMouseCanceller, findOriginalTarget as _findOriginalTarget, add as _add, remove as _remove} from '@polymer/polymer/lib/utils/gestures.js';

// This import then const trick is to be clear to the compiler that the
// imported symbols can't be mutated.
const gestures = _gestures;
const recognizers = _recognizers;
const deepTargetFind = _deepTargetFind;
const addListener = _addListener;
const removeListener = _removeListener;
const register = _register;
const setTouchAction = _setTouchAction;
const prevent = _prevent;
const resetMouseCanceller = _resetMouseCanceller;
const findOriginalTarget = _findOriginalTarget;
const add = _add;
const remove = _remove;


goog.declareModuleId('HtmlImportsNamespace.Polymer.Lib.Utils.Gestures');

/** @const */
Polymer.Gestures = {
  gestures,
  recognizers,
  deepTargetFind,
  addListener,
  removeListener,
  register,
  setTouchAction,
  prevent,
  resetMouseCanceller,
  /** @deprecated */
  findOriginalTarget,
  add,
  remove,
};
