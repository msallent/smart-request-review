export default {
  '**/*.ts': (fileNames) => [`tsc`, `eslint --fix ${fileNames.join(' ')}`],
};
