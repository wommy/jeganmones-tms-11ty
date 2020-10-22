const yaml = require("js-yaml");

module.exports = config => {
	config.setTemplateFormats("njk,css,md");
	config.addDataExtension("yaml", contents => yaml.safeLoad(contents));
	return {
		dir: {
			input: "11ty"
		}
	};
};
