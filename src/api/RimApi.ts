export default class RimApi {
  _apiBase = 'https://rickandmortyapi.com/api/';

  getAllChars = async (): Promise<any> => {
    return await fetch(`${this._apiBase}character`);
  };

  getChar = async (id: number): Promise<any> => {
    return await fetch(`${this._apiBase}character/${id}`);
  };
}
