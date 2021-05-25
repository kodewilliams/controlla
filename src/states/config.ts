import { makeAutoObservable, observable } from "mobx";
import { createContext } from "react";

export class ConfigState {
  size: number = 9;
  pressed: string = "";
  mappings: { [key: string]: string } = {};

  constructor() {
    makeAutoObservable(this, {
      mappings: observable,
      pressed: observable,
      size: observable,
    });

    // Set mappings to be empty by default
    for (let key = 1; key <= this.size; ++key) {
      this.mappings[key] = key.toString();
    }
  }

  updateMapping = (key: string, mapping: string) => {
    this.mappings[key] = mapping;
  };

  updatePressed = (key: string) => {
    this.pressed = key;
  };

  clearPressed = () => {
    this.pressed = "";
  };
}

export const ConfigContext = createContext({} as ConfigState);
export const ConfigProvider = ConfigContext.Provider;
