import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor() {}

  async set(key: string, data: any) {
    await Storage.set({ key, value: JSON.stringify(data) });
  }

  async get(key: string) {
    const response = await Storage.get({ key });
    return JSON.parse(response.value);
  }
}
