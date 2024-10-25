// models/ruleModel.ts
import mongoose, { Schema, Document } from "mongoose";

interface IRule extends Document {
  ruleString: string;
  ast: any;
}

const ruleSchema: Schema = new Schema({
  ruleString: { type: String, required: true },
  ast: { type: Object, required: true },
});

const RuleModel = mongoose.model<IRule>("Rule", ruleSchema);

export default RuleModel;
