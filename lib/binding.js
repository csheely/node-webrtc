'use strict';

try {
  module.exports = require('../build/Debug/avwrtc.node');
} catch (error) {
  module.exports = require('../build/Release/avwrtc.node');
}
