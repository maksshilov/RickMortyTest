import Config from 'react-native-config';

export default class RimApi {
  _apiBase = Config.API_BASE;

  getAllChars = async (): Promise<any> => {
    return await fetch(`${this._apiBase}character`);
  };

  getNextPage = async (uri: string): Promise<any> => {
    return await fetch(uri);
  };

  getChar = async (id: number): Promise<any> => {
    return await fetch(`${this._apiBase}character/${id}`);
  };
}
