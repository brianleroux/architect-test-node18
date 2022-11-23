module.exports = { 
  deploy: {
    start: async ({ arc, cloudformation, dryRun, inventory, stage }) => {
      for (let r of Object.keys(cloudformation.Resources)) {
        if (cloudformation.Resources[r].Type === 'AWS::Serverless::Function') {
          cloudformation.Resources[r].Properties.Runtime = "nodejs18.x"
        }
      }
      return cloudformation
    }
  } 
}
