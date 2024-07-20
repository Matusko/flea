const { TypeScriptGenerator } = require('@asyncapi/modelina');
const fs = require('fs');

fs.readFile(__dirname + '/src/lib/test-fixtures/test-hotel-asyncapi.yaml', (err, inputD) => {
  if (err) throw err;
  console.log('api file: ', inputD.toString());
  const models = generator.generate(inputD.toString()).then(outputModels => {
    console.log('outputModels: ', outputModels);
    outputModels.forEach(outputModel => writeModel(outputModel));
  })
})

const writeModel = (outputModel) => {
  try {
    fs.writeFileSync(__dirname + `/gen.out/models/${ outputModel.modelName}.ts`, outputModel.result);
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


