import mongoose, {Document, Model, Schema, ObjectId} from 'mongoose';


export interface quote extends Document{
    
    firstName: string;
    lastName: string;
    email: string;
    mobile:string;
	installationAddress: string;
	NMI: string;
	meterNumber: string;
    electricityRetailer: string;
    electricityDistribution: string;
	numberOfPanelsSold: string;
	roofType: string;
    paymentOptions:string;
	Story:string;
    Phase:string;
    salesPersonName:string;
    numberOfTiltedPanels:string;
    note:string;
    postcode:string; 
}

const userSchema: Schema = new Schema ({
    name: {type: String, require: true},
    lastName:{type: String, require: true},
    email: {type: String, required: true, uniquie: true},
    mobile:{type: String, require: true},
	installationAddress:{type: String, require: true},
	NMI:{type: String, require: true},
	meterNumber: {type: String, require: true},
    electricityRetailer: {type: String, require: true},
    electricityDistribution: {type: String, require: true},
	numberOfPanelsSold:{type: String, require: true},
	roofType: {type: String, require: true},
    paymentOptions:{type: String, require: true},
    Phase:{type: String, require: true},
    salesPersonName:{type: String, require: true},
    numberOfTiltedPanels:{type: String, require: true},
    note:{type: String, require: true},
    postcode:{type: String, require: true},
  
})

const Quote: Model<quote>= mongoose.models.User || mongoose.model<quote>('Quote', userSchema);

export default Quote;