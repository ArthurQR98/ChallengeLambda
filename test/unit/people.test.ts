import { APIGatewayProxyEvent } from "aws-lambda";
import { main } from "../../src/core/functions/people/people-create/people-create";

describe("Unit test for create people", function () {
  it("verifies successful response", async () => {
    const event: APIGatewayProxyEvent = {
      body: {
        altura: "178",
        masa: "77",
        pelo_color: "blond",
        piel_color: "fair",
        ojos_color: "blue",
        cumpleaños: "19BBY",
        genero: "male",
        mundo_natal: "https://swapi.py4e.com/api/planets/1/",
        films: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/6/",
          "https://swapi.py4e.com/api/films/7/",
        ],
        especies: ["https://swapi.py4e.com/api/species/1/"],
        vehiculo: [
          "https://swapi.py4e.com/api/vehicles/14/",
          "https://swapi.py4e.com/api/vehicles/30/",
        ],
        naves_esteleres: [
          "https://swapi.py4e.com/api/starships/12/",
          "https://swapi.py4e.com/api/starships/22/",
        ],
        creado: "2014-12-09T13:50:51.644000Z",
        editado: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.py4e.com/api/people/1/",
      },
    } as any;
    const result = await main(event);

    expect(result.statusCode).toEqual(201);
  });
});

describe("Unit test for get all people", function () {
  it("verifies successful response", async () => {
    const event: APIGatewayProxyEvent = {} as any;
    const result = await main(event);

    expect(result.statusCode).toEqual(200);
  });
});

describe("Unit test for get by id people", function () {
  it("verifies successful response", async () => {
    const event: APIGatewayProxyEvent = {
      paramsParameters: {
        id: 1,
      },
    } as any;
    const result = await main(event);

    expect(result.statusCode).toEqual(200);
  });
});
