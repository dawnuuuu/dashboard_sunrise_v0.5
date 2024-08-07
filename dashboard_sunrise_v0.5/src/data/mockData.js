export const mockData = [
    {
      id: 1,
      beginTime: "08:00:00",
      endTime: "08:05:00",
      subscript: "Scenario 1",
      ATT_CIPV_At_Beginning: "true",
      ATT_CodeCountry: "US",
      ATT_TimeCIPVBeginAccelerate_Before_EgoStarts: "3 seconds",
      m26_2_1_ConcreteCaseAPIAnswer: "Approve",
      m26_2_1_ConcreteCaseID: "ABC123"
    },
    {
      id: 2,
      beginTime: "08:10:00",
      endTime: "08:15:00",
      subscript: "Scenario 2",
      ATT_CIPV_At_Beginning: "false",
      ATT_CodeCountry: "DE",
      ATT_TimeCIPVBeginAccelerate_Before_EgoStarts: "5 seconds",
      m26_2_1_ConcreteCaseAPIAnswer: "Reject",
      m26_2_1_ConcreteCaseID: "DEF456"
    }
  ];
  
  export const partitionData = {
    labels: ["Scenario A", "Scenario B", "Scenario C"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      }
    ]
  };
  
  export const qualityMetricsData = {
    labels: ["Metric 1", "Metric 2", "Metric 3"],
    datasets: [
      {
        label: "Quality",
        data: [75, 90, 85],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      }
    ]
  };
  
  
  export const scenarioTaxonomyData = [
    {
      name: "Functional Scenario 1",
      logicalScenarios: ["Logical Scenario 1", "Logical Scenario 2"],
    },
    {
      name: "Functional Scenario 2",
      logicalScenarios: ["Logical Scenario 3", "Logical Scenario 4"],
    },
  ];
