export interface planetSchema {
  id: Number;
  diametro: string;
  clima: string;
  superficie_agua: string;
  nombre: string;
  timestamp: Date | Number;
  api_url: string;
  periodo_rotacion: string;
  fecha_edicion: Date;
  terreno: string;
  gravedad: string;
  periodo_orbital: string;
  peliculas: any[];
  residentes: any[];
  poblacion: string;
}

export interface creationObj {
  TableName: string;
  Item: Partial<planetSchema>;
}

// export const Example = {
//   "diametro": "10465",
//   "clima": "Arid",
//   "superficie_agua": "1",
//   "nombre": "Tatooine",
//   "fecha_creacion": new Date().toJSON(),
//   "api_url": "https://swapi.dev/api/planets/1/",
//   "periodo_rotacion": "23",
//   "fecha_edicion": "2021-05-05T23:18:40.923Z",
//   "terreno": "Dessert",
//   "gravedad": "1",
//   "periodo_orbital": "304",
//   "peliculas": [
//     "https://swapi.dev/api/films/1/",
//     "https://swapi.dev/api/films/2/"
//   ],
//   "residentes": [
//     "https://swapi.dev/api/people/1/",
//     "https://swapi.dev/api/people/2/"
//   ],
//   "poblacion": "120000"
// }
