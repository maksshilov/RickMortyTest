import Config from 'react-native-config';

// export default class RimApi {
//   _apiBase = Config.API_BASE;

//   getAllChars = async (): Promise<any> => {
//     return await fetch(`${this._apiBase}character`);
//   };

//   getNextPage = async (uri: string): Promise<any> => {
//     return await fetch(uri);
//   };

//   getChar = async (id: number): Promise<any> => {
//     return await fetch(`${this._apiBase}character/${id}`);
//   };
// }

interface IOptions extends RequestInit {
  hostPostfix?: string;
}

export const callApi = async (endpoint: string, options?: IOptions, payload?: any): Promise<any> => {
  let API_URI = Config.API_HOST;

  if (options && options.hostPostfix) {
    API_URI += options.hostPostfix;
  } else {
    API_URI += '/api';
  }

  const fetchUri = API_URI + endpoint;

  return await fetch(fetchUri, {
    method: 'GET',
    headers: new Headers(),
    body: payload,
    ...options,
  });
};
