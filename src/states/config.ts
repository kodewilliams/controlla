import { makeAutoObservable, observable } from "mobx";
import { createContext } from "react";

export class ConfigState {
  size: number = 9;
  mappings: { [key: string]: string } = {};

  constructor() {
    makeAutoObservable(this, {
      mappings: observable,
    });

    // Set mappings to be empty by default
    for (let key = 1; key <= this.size; ++key) {
      this.mappings[key] = "";
    }
  }

  updateMapping = (key: string, mapping: string) => {
    this.mappings[key] = mapping;
  };
}

export const ConfigContext = createContext({} as ConfigState);
export const ConfigProvider = ConfigContext.Provider;
