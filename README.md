# webhook-actions-example

An example Node.js server for handling Bavard webhook actions.

## Setup

Run `npm install`

## Start the server

```
npm run start
```

## Trigger a webhook action

Open a second command window and run the following command.

```
npm run test
```

This triggers a webhook action the same way that Bavard chatbots do. Please see the file `test.ts`.
The output should be

```
$ npm run test

> webhook-actions-example@0.0.1 test
> ts-node test.ts

[
  {
    "type": "UTTERANCE_ACTION",
    "name": "my-response-action",
    "utterance": "Sorry, Dave. I'm afraid I can't do that."
  }
]
```
