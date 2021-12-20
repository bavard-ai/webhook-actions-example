import express, { json } from "express";
import {
  EDialogueActor,
  IConversation,
} from "@bavard/agent-config/dist/conversations";
import {
  EAgentActionTypes,
  EUserActionType,
} from "@bavard/agent-config/dist/enums";
import { IAgentUtteranceAction } from "@bavard/agent-config";

const app = express();

app.use(json());
const port = 3000;

app.post("/my-webhook-action", (req, res) => {
  const secret = req.headers.authorization?.split(" ")?.[1];
  if (secret !== "super-secret") {
    res.sendStatus(401);
    return;
  }
  const conversation: IConversation = req.body.conversation;
  const lastTurn = conversation.turns[conversation.turns.length - 1];

  const responseAction: IAgentUtteranceAction = {
    type: EAgentActionTypes.UTTERANCE_ACTION,
    name: "my-response-action",
    utterance: "Sorry, Dave. I'm afraid I can't do that.",
  };

  if (
    lastTurn.actor === EDialogueActor.USER &&
    lastTurn.userAction.type === EUserActionType.UTTERANCE_ACTION
  ) {
    if (lastTurn.userAction.utterance === "hi") {
      responseAction.utterance = "hi";
    }
  }

  res.send(
    // NOTE: You must return an array containing 1 to 3 response actions.
    [responseAction]
  );
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});
