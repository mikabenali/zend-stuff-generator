exports.templatesConfig  = [
  // Rest
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: '/rest/',
    templateFileName: 'collection.template.php',
    outputSuffixFileName: 'Collection.php'
  },
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: '/rest/',
    templateFileName: 'entity.template.php',
    outputSuffixFileName: 'Entity.php'
  },
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: '/rest/',
    templateFileName: 'hydrator_factory.template.php',
    outputSuffixFileName: 'HydratorFactory.php'
  },
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: '/rest/',
    templateFileName: 'repository.template.php',
    outputSuffixFileName: 'Repository.php'
  },
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: '/rest/',
    templateFileName: 'resource.template.php',
    outputSuffixFileName: 'Resource.php'
  },
  {
    type: 'rest',
    templateFolder: 'template/rest/',
    outputFolder: '/rest/',
    templateFileName: 'resource_factory.template.php',
    outputSuffixFileName: 'ResourceFactory.php'
  },

  // Config
  {
    type: 'config',
    templateFolder: 'template/config/',
    outputFolder: '/config/',
    templateFileName: 'rest.config.template.php',
    outputSuffixFileName: 'rest.config.php',
    isSuffixFullName: true
  },
  {
    type: 'config',
    templateFolder: 'template/config/',
    outputFolder: '/config/',
    templateFileName: 'auth.config.template.php',
    outputSuffixFileName: 'auth.config.php',
    isSuffixFullName: true
  },
  {
    type: 'config',
    templateFolder: 'template/config/',
    outputFolder: '/config/',
    templateFileName: 'doctrine.config.template.php',
    outputSuffixFileName: 'doctrine.config.php',
    isSuffixFullName: true
  },
  {
    type: 'config',
    templateFolder: 'template/config/',
    outputFolder: '/config/',
    templateFileName: 'route.config.template.php',
    outputSuffixFileName: 'route.config.php',
    isSuffixFullName: true
  },
  {
    type: 'config',
    templateFolder: 'template/config/',
    outputFolder: '/config/',
    templateFileName: 'service.config.template.php',
    outputSuffixFileName: 'service.config.php',
    isSuffixFullName: true
  },
];