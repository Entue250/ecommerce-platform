import { serve } from "inngest/next";
import {
  inngest,
  syncUserUpdation,
  synUserCreation,
  synUserDeletion,
} from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [synUserCreation, syncUserUpdation, synUserDeletion],
});
