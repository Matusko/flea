const { TypeScriptGenerator } = require('@asyncapi/modelina');
const fs = require('fs');

fs.readFile(__dirname + '/src/lib/test-fixtures/test-hotel-asyncapi.yaml', (err, inputD) => {
  if (err) throw err;
  const models = generator.generate(inputD.toString()).then(outputModels => {
    console.log('outputModels: ', JSON.stringify(outputModels, null, 4));
    fs.writeFileSync(__dirname + `/gen.out/models/models.json`, JSON.stringify(outputModels, null, 4));
   // outputModels.forEach(outputModel => writeModel(outputModel));
    writeModels(
      outputModels.map(outputModel => editFileContent(outputModel.result))
        .join("\r\n\r\n")
    );
  })
})

const editFileContent = (fileContent) => {
  return `export ${fileContent}`;
}

const writeModels = (fileContent) => {
  try {
    fs.writeFileSync(__dirname + `/gen.out/models/models.ts`, fileContent);
    console.log('models written successfully');
  } catch (err) {
    console.error(err);
  }
}

const writeModel = (outputModel) => {
  try {
    fs.writeFileSync(__dirname + `/gen.out/models/${ outputModel.modelName}.ts`, editFileContent(outputModel.result));
    console.log('model written successfully: ',  outputModel.modelName)
  } catch (err) {
    console.error(err);
  }
}

const generator = new TypeScriptGenerator({
  collectionType: "List",
  modelType: "interface",
  presets: [
    {
      options: {
      }
    }
  ]
});


