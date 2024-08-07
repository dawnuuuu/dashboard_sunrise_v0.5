import { Scenario } from '../models/Scenario';

export function createScenarioFromData(id, data) {
  const scenario = new Scenario(id);
  Object.keys(data).forEach(key => {
    scenario.addParameter(key, data[key]);
  });
  return scenario;
}
