<!--
title: 'Ejemplo de API HTTP simple con Node.js ejecutándose en AWS Lambda, API Gateway y DynamoDB utilizando Serverless Framework'
description: 'Esta plantilla demuestra cómo crear una API HTTP simple con Node.js ejecutándose en AWS Lambda y API Gateway utilizando Serverless Framework'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# HTTP API Serverless Framework Node - AWS

Esta plantilla demuestra cómo crear una API HTTP simple con Node.js ejecutándose en AWS Lambda y API Gateway utilizando Serverless Framework.

Este proyecto incluye lo siguiente:
 - Un punto final HTTP simple que acepta una solicitud GET y devuelve un mensaje JSON.
 - Un punto final HTTP simple que acepta una solicitud POST y devuelve un mensaje JSON.
 - Un punto final HTTP simple que acepta una solicitud GET y devuelve un mensaje JSON con una lista de tareas.
 - Un punto final HTTP simple que acepta una solicitud POST y devuelve un mensaje JSON con una nueva tarea.
 - Integracion con el API de Star Wars SWAPI para obtener datos de los planetas y personajes de Star Wars.

## Uso

### Deployment

```
$ serverless deploy --verbose
```

After deploying, you should see output similar to:

```bash
Deploying Deploying aws-lambda-crud-node to stage dev (us-east-1)

✔ Service deployed to stack aws-lambda-crud-node-dev (60s)

endpoints:

  GET - https://oesr4hclre.execute-api.us-east-1.amazonaws.com/tasks
  POST - https://oesr4hclre.execute-api.us-east-1.amazonaws.com/tasks
  GET - https://oesr4hclre.execute-api.us-east-1.amazonaws.com/people
  GET - https://oesr4hclre.execute-api.us-east-1.amazonaws.com/people/{id}
  GET - https://oesr4hclre.execute-api.us-east-1.amazonaws.com/planets

functions:
  getTasks: aws-lambda-crud-node-dev-getTasks (17 MB)
  createTask: aws-lambda-crud-node-dev-createTask (17 MB)
  getPeople: aws-lambda-crud-node-dev-getPeople (17 MB)
  getOnePerson: aws-lambda-crud-node-dev-getOnePerson (17 MB)
  getPlanets: aws-lambda-crud-node-dev-getPlanets (17 MB)
```
<!-- 
_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/). -->

### Invocation

<!-- After successful deployment, you can call the created application via HTTP: -->
Despues de un despliegue exitoso, puedes llamar a la aplicacion creada via HTTP:

```bash
curl hhttps://oesr4hclre.execute-api.us-east-1.amazonaws.com/tasks
```

<!-- Which should result in response similar to the following (removed `input` content for brevity): -->
Lo que deberia resultar en una respuesta similar a la siguiente

```json
[
    {
        "createdAt": {},
        "description": "First Description",
        "id": "a85dc5ad-5863-4b54-95f5-f3cce226d96d",
        "title": "My first Task"
    },
    ...
]
```

### Local development

<!-- You can invoke your function locally by using the following command: -->
Puedes invocar tu funcion localmente usando el siguiente comando:

```bash
npm run start
```

Which should result in response similar to the following:

```
> start
> serverless offline start


Starting Offline at stage dev (us-east-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * getTasks: aws-lambda-crud-node-dev-getTasks
           * createTask: aws-lambda-crud-node-dev-createTask
           * getPeople: aws-lambda-crud-node-dev-getPeople
           * getOnePerson: aws-lambda-crud-node-dev-getOnePerson
           * getPlanets: aws-lambda-crud-node-dev-getPlanets
```



