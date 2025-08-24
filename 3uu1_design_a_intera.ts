interface SimulationConfig {
  title: string;
  description: string;
  simulatorType: 'physics' | 'game' | 'learning';
  simulationParams: {
    [key: string]: string | number | boolean;
  };
}

interface InteractiveElement {
  id: string;
  type: 'button' | 'slider' | 'input' | 'graph';
  label: string;
  value: string | number;
  minValue: number;
  maxValue: number;
  step: number;
  onChange: (value: string | number) => void;
}

interface SimulationState {
  elements: InteractiveElement[];
  simulatorConfig: SimulationConfig;
  currentParams: { [key: string]: string | number | boolean };
}

const simulationConfig: SimulationConfig = {
  title: 'My Interactive Web App Simulator',
  description: 'A simulator for testing and learning',
  simulatorType: 'physics',
  simulationParams: {
    gravity: 9.8,
    mass: 10,
    velocity: 0,
  },
};

const interactiveElements: InteractiveElement[] = [
  {
    id: 'gravity-slider',
    type: 'slider',
    label: 'Gravity',
    value: 9.8,
    minValue: 0,
    maxValue: 20,
    step: 0.1,
    onChange: (value) => {
      simulationConfig.simulationParams.gravity = value;
    },
  },
  {
    id: 'mass-input',
    type: 'input',
    label: 'Mass',
    value: 10,
    minValue: 1,
    maxValue: 100,
    step: 1,
    onChange: (value) => {
      simulationConfig.simulationParams.mass = value;
    },
  },
  {
    id: 'velocity-button',
    type: 'button',
    label: 'Reset Velocity',
    value: 0,
    minValue: 0,
    maxValue: 10,
    step: 1,
    onChange: () => {
      simulationConfig.simulationParams.velocity = 0;
    },
  },
];

const simulationState: SimulationState = {
  elements: interactiveElements,
  simulatorConfig: simulationConfig,
  currentParams: { ...simulationConfig.simulationParams },
};

export { simulationState };