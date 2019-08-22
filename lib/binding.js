'use strict';

try {
  module.exports = require('../build/Debug/av-wrtc.node');
} catch (error) {
  module.exports = require('../build/Release/av-wrtc.node');
}
