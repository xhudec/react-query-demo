'use strict'

module.exports = {
  extends: ['@strv/stylelint-config-styled-components', 'stylelint-config-prettier'],
  rules: {
    'declaration-empty-line-before': null,
    'unit-allowed-list': ['ms', 's', 'deg', '%', 'rem', 'vh', 'vw', 'fr', 'ch'],
  },
}
