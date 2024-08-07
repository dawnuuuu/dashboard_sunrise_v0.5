export class Scenario {
    constructor(id) {
      this.id = id;
      this.parameters = {};
    }
  
    addParameter(key, value) {
      this.parameters[key] = value;
    }
  
    getParameter(key) {
      return this.parameters[key];
    }
  
    getAllParameters() {
      return this.parameters;
    }
  }
  
  export function createScenarioFromData(id, data) {
    const scenario = new Scenario(id);
    Object.keys(data).forEach((key) => {
      scenario.addParameter(key, data[key]);
    });
    return scenario;
  }
  