import OpenAI from "openai";
import { OPENAI_KEY } from "../components/constant";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

// const completion = openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   messages: [
//     {"role": "user", "content": "write a haiku about ai"},
//   ],
// });

// completion.then((result) => console.log(result.choices[0].message));

export default openai;