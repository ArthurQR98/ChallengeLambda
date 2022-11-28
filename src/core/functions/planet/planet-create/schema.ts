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
