exports.templatesConfig  = [
  // Rest
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: 'output/rest/',
    templateFileName: 'collection.template.php',
    outputSuffixFileName: 'Collection.php'
  },
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: 'output/rest/',
    templateFileName: 'entity.template.php',
    outputSuffixFileName: 'Entity.php'
  },
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: 'output/rest/',
    templateFileName: 'hydrator_factory.template.php',
    outputSuffixFileName: 'HydratorFactory.php'
  },
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: 'output/rest/',
    templateFileName: 'repository.template.php',
    outputSuffixFileName: 'Repository.php'
  },
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: 'output/rest/',
    templateFileName: 'resource.template.php',
    outputSuffixFileName: 'Resource.php'
  },
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: 'output/rest/',
    templateFileName: 'resource_factory.template.php',
    outputSuffixFileName: 'ResourceFactory.php'
  },

  // Config
  {
    type: 'config',
    templateFolder: 'template/config/',
    outputFolder: 'output/config/',
    templateFileName: 'rest.config.template.php',
    outputSuffixFileName: 'rest.config.php',
    isSuffixFullName: true
  },
  {
    type: 'config',
    templateFolder: 'template/config/',
    outputFolder: 'output/config/',
    templateFileName: 'auth.config.template.php',
    outputSuffixFileName: 'auth.config.php',
    isSuffixFullName: true
  },
  {
    type: 'config',
    templateFolder: 'template/config/',
    outputFolder: 'output/config/',
    templateFileName: 'doctrine.config.template.php',
    outputSuffixFileName: 'doctrine.config.php',
    isSuffixFullName: true
  },
  {
    type: 'config',
    templateFolder: 'template/config/',
    outputFolder: 'output/config/',
    templateFileName: 'route.config.template.php',
    outputSuffixFileName: 'route.config.php',
    isSuffixFullName: true
  },
  {
    type: 'config',
    templateFolder: 'template/config/',
    outputFolder: 'output/config/',
    templateFileName: 'service.config.template.php',
    outputSuffixFileName: 'service.config.php',
    isSuffixFullName: true
  },
];