import {
  EDialogueActor,
  IConversation,
} from "@bavard/agent-config/dist/conversations";
import { EUserActionType } from "@bavard/agent-config/dist/enums";
import axios from "axios";

const conversation: IConversation = {
  currentAgentType: "BOT",
  turns: [
    {
      actor: EDialogueActor.USER,
      timestamp: Date.now(),
      userAction: {
        type: EUserActionType.UTTERANCE_ACTION,
        utterance: "Open the pod bay doors.",
      },
    },
  ],
};

axios
  .post("http://localhost:3000/my-webhook-action", {
    conversation,
  })
  .then((res) => {
    console.log(JSON.stringify(res.data, null, 2));
  });
