import { serve } from "https://deno.land/std@0.66.0/http/server.ts";
import requestHandler from "./index.ts";

const ENV = Deno.env.toObject()
const PORT = parseInt(ENV.PORT) || 8091
const s = serve({ port: PORT });
console.log(`listening to ${PORT}`)
for await (const req of s) {
  requestHandler(req);
}

