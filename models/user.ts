import { Document, model, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  firstname: string;
  lastname: string;
}

const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
  },{
    collection:'User'
  }
);

const User: Model<IUser> = model<IUser>('User', userSchema);

export default User;
