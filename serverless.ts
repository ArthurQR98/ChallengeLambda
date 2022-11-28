import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "rimac-challenge",
  frameworkVersion: "3",
  plugins: [
    "serverless-offline",
    "serverless-esbuild",
    "serverless-jest-plugin",
    "serverless-dynamodb-local",
    "serverless-domain-manager",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs16.x",
    stage: "dev",
    memorySize: 128,
    region: "us-east-1",
    timeout: 20,
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      BASE_URL: "https://swapi.py4e.com/api",
      TABLE_PEOPLE: "${self:service}-PEOPLE-${opt:stage, self:provider.stage}",
      TABLE_PLANETS:
        "${self:service}-PLANETS-${opt:stage, self:provider.stage}",
    },
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: [
          "dynamodb:Query",
          "dynamodb:Scan",
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem",
        ],
        Resource: [
          "arn:aws:dynamodb:${opt:region, self:provider.region}:*:table/${self:provider.environment.TABLE_PEOPLE}",
          "arn:aws:dynamodb:${opt:region, self:provider.region}:*:table/${self:provider.environment.TABLE_PLANETS}",
        ],
      },
    ],
  },
  // import the function via paths
  functions: {
    // People
    createPeople: {
      handler: "src/core/functions/people/people-create/people-create.main",
      description: "Create People",
      events: [
        {
          http: {
            method: "post",
            path: "people",
            cors: true,
          },
        },
      ],
    },
    getAllPeople: {
      handler: "src/core/functions/people/people-get-all/people-get-all.main",
      description: "Get all People",
      events: [
        {
          http: {
            method: "get",
            path: "people",
            cors: true,
          },
        },
      ],
    },
    getByIdPeople: {
      handler: "src/core/functions/people/people-get/people-get.main",
      description: "Get By Id People",
      events: [
        {
          http: {
            method: "get",
            path: "people/{id}",
            cors: true,
          },
        },
      ],
    },
    // Planets
    getAllPlanets: {
      handler: "src/core/functions/planet/planet-get-all/planet-get-all.main",
      description: "Get All Planets",
      events: [
        {
          http: {
            method: "get",
            path: "planets",
            cors: true,
          },
        },
      ],
    },
    getByIdPlanets: {
      handler: "src/core/functions/planet/planet-get-one/planet-get-one.main",
      description: "Get By Id Planets",
      events: [
        {
          http: {
            method: "get",
            path: "planets/{id}",
            cors: true,
          },
        },
      ],
    },
    createPlanet: {
      handler: "src/core/functions/planet/planet-create/planet-create.main",
      description: "Create Planet",
      events: [
        {
          http: {
            method: "post",
            path: "planets",
            cors: true,
          },
        },
      ],
    },
  },
  package: { individually: true },
  custom: {
    jest: {
      collectCoverage: true,
    },
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node16",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 5,
    },
    customDomain: {
      domainName: "challenge.arthur-quezada.com",
      basePath: "v1",
      state: "${self:provider.stage}",
      certificateName: "arthur-quezada.com",
      createRoute53Record: true,
    },
  },
  resources: {
    Resources: {
      PeopleTable: {
        Type: "AWS::DynamoDB::Table",
        DeletionPolicy: "Retain",
        Properties: {
          TableName: "${self:provider.environment.TABLE_PEOPLE}",
          AttributeDefinitions: [
            {
              AttributeName: "id",
              AttributeType: "N",
            },
          ],
          KeySchema: [
            {
              AttributeName: "id",
              KeyType: "HASH",
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      },
      PlanetTable: {
        Type: "AWS::DynamoDB::Table",
        DeletionPolicy: "Retain",
        Properties: {
          TableName: "${self:provider.environment.TABLE_PLANETS}",
          AttributeDefinitions: [
            {
              AttributeName: "id",
              AttributeType: "N",
            },
            {
              AttributeName: "timestamp",
              AttributeType: "N",
            },
          ],
          KeySchema: [
            {
              AttributeName: "id",
              KeyType: "HASH",
            },
            {
              AttributeName: "timestamp",
              KeyType: "RANGE",
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
