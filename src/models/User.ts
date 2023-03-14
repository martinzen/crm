import mongoose, {Document, Model, Schema, ObjectId} from 'mongoose';


export interface User extends Document{
    
    name: string;
    email: string;
}

const userSchema: Schema = new Schema ({
    name: {type: String, require: true},
    email: {type: String, required: true, uniquie: true}
  
})

const User: Model<User>= mongoose.models.User || mongoose.model<User>('User', userSchema);

export default User;