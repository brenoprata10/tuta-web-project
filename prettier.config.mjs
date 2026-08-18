const config = {
	overrides: [
		{
			files: ['app/**/*.{ts,tsx}'],
			options: {
				parser: 'typescript',
				printWidth: 120,
				semi: false,
				singleQuote: true,
				trailingComma: 'none',
				bracketSpacing: false,
				arrowParens: 'always',
				jsxSingleQuote: true,
				endOfLine: 'auto',
				useTabs: true,
				tabWidth: 2
			}
		}
	]
}

export default config 
