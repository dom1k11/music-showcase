import { controller } from "../utils/controllerWrapper";
export const handleGenerateData = controller(async (req, res) => {
  res.send("Hello world");
});
