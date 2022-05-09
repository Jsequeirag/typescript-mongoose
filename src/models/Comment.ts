import { prop, modelOptions } from "@typegoose/typegoose";
@modelOptions({
  schemaOptions: {
    timestamps: true,
    _id: false,
    versionKey: false,
  },
})
export class Comment {
  @prop()
  text: String;
}
