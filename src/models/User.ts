import {
  prop,
  pre,
  getModelForClass,
  Ref,
  post,
  ReturnModelType,
} from "@typegoose/typegoose";
import { Role } from "./Role";
import bcrypt from "bcryptjs";
//antes de guardar haga esto
@pre<User>("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
})
//despues de guardar haga esto
@post<User>("save", async function () {
  console.log("user saved");
})
export class User {
  @prop({ required: true })
  public firtsname: string;
  //equivalente a:
  //firtsname:{name:String}
  @prop({ required: true })
  lastname: string;
  @prop({ required: true, trim: true })
  email: string;
  @prop({ required: true, minlength: 6 }) //minlength---->string || min------> number
  password: string;
  @prop({ required: true })
  age: string;
  @prop({ ref: () => Role })
  roles: Ref<Role>[];

  static async findByFirstName(
    this: ReturnModelType<typeof User>,
    firtsname: string
  ) {
    return await this.find({ firtsname });
  }
  encryptPassword(password: string) {
    return password + "123mnbzxccxzbnmmnb";
  }
}

const UserModel = getModelForClass(User);
//equivalente a: const UserModel = moongose.model("ModelName",SchemaName)
export default UserModel;
