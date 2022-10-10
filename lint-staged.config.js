const { ESLint } = require('eslint')

const removeIgnoredFiles = async (files) => {
  // https://github.com/okonet/lint-staged/tree/e035b80e39da355da57c02db6565b55271ab1afa#how-can-i-ignore-files-from-eslintignore
  const eslint = new ESLint()
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file)
    })
  )
  const filteredFiles = files.filter((_, i) => !isIgnored[i])
  return filteredFiles.join(' ')
}

module.exports = {
  '*.{js,ts,tsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files)
    return [`eslint --max-warnings=0 --fix ${filesToLint}`]
  },
}
