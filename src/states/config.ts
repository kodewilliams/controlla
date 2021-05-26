import { createContext } from "react";
import { action, makeAutoObservable, observable } from "mobx";

export class ConfigState {
  size: number = 9;
  pressed: string = "";
  mappings: { [id: string]: string } = {};
  samples: { [id: string]: File } = {};

  constructor() {
    makeAutoObservable(this, {
      samples: observable,
      mappings: observable,
      pressed: observable,
      size: observable,
      getMapping: action.bound,
      getMappings: action.bound,
      getSample: action.bound,
      getSamples: action.bound,
      verifySample: action.bound,
      updateMapping: action.bound,
      updateSample: action.bound,
      clearPressed: action.bound,
    });

    // Set mappings to be empty by default
    for (let id = 1; id <= this.size; ++id) {
      this.mappings[id] = id.toString();
    }
  }

  getMappings = () => this.mappings;

  getMapping = (id: string) => this.mappings[id];

  getSamples = () => this.samples;

  getSample = (id: string) => this.samples[id];

  verifySample = (id: string) => !!this.samples[id];

  updateMapping = (id: string, mapping: string) => {
    this.mappings[id] = mapping;
  };

  updateSample = (id: string, sample: File) => {
    this.samples[id] = sample;
  };

  updatePressed = (id: string) => {
    this.pressed = id;
  };

  clearPressed = () => {
    this.pressed = "";
  };
}

export const ConfigContext = createContext({} as ConfigState);
export const ConfigProvider = ConfigContext.Provider;
