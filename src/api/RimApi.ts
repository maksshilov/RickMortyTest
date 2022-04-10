export default class RimApi {
  _apiBase = 'https://rickandmortyapi.com/api/';

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
