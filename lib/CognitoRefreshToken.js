'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * Amazon Cognito Auth SDK for JavaScript
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *         http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions
 * and limitations under the License.
 */

/** @class */
var CognitoRefreshToken = function () {
  /**
   * Constructs a new CognitoRefreshToken object
   * @param {string=} RefreshToken The JWT refresh token.
   */
  function CognitoRefreshToken(RefreshToken) {
    (0, _classCallCheck3.default)(this, CognitoRefreshToken);

    // Assign object
    this.refreshToken = RefreshToken || '';
  }

  /**
   * @returns {string} the record's token.
   */


  (0, _createClass3.default)(CognitoRefreshToken, [{
    key: 'getToken',
    value: function getToken() {
      return this.refreshToken;
    }

    /**
     * Sets new value for refresh token.
     * @param {string=} refreshToken The JWT refresh token.
     * @returns {void}
     */

  }, {
    key: 'setToken',
    value: function setToken(refreshToken) {
      this.refreshToken = refreshToken;
    }
  }]);
  return CognitoRefreshToken;
}();

exports.default = CognitoRefreshToken;