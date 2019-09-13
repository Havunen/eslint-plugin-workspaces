'use strict';

const ruleTester = require('../ruleTester');
const rule = require('../../lib/rules/require-dependency');

ruleTester.run('require-dependency', rule, {
  valid: [
    {
      filename: '/test/another-workspace/index.js',
      code: "import '../workspace';",
    },
  ],
  invalid: [
    {
      filename: '/test/workspace/index.js',
      code: "import '../another-workspace';",
      errors: [
        {
          message:
            'Importing packages without listing them as dependency is not allowed',
        },
      ],
    },
  ],
});
