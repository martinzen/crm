import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import React from 'react';
import { useFormik } from 'formik';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField
} from 'formik'
import Quote from '@/pages/api/quote';



 const SignupForm = () => {
   // Note that we have to initialize ALL of fields with values. These
   // could come from props, but since we don’t want to prefill this form,
   // we just use an empty string. If we don’t do this, React will yell
   // at us.
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       mobile:'',
	     email: '',
	     installationAddress: '',
	     NMI: '',
	     meterNumber: '',
       electricityRetailer: '',
       electricityDistribution: '',
	     numberOfPanelsSold: '',
	     roofType: '',
       paymentOptions:'',
	     Story:'',
       Phase:'',
       salesPersonName:'',
       numberOfTiltedPanels:'',
       note:'',
       postcode:'', 
	
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 18));
     },
   });
   return (
    <div className="formContainer">
        <div className="leftSide">
 <h1>Solar Arena</h1>
 <div className="formContentContainer">
     <form onSubmit={formik.handleSubmit}>
      <div className="form-row">
      <div className="form-group col-md-6">
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
        
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       </div>
       <div className="col-12">
	<label htmlFor="mobile">Mobile</label>
       <input
         id="mobile"
         name="mobile"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.mobile}
       />

       <label htmlFor="email">Email</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
 </div>
 <div className="form-group col-md-6">
 <label htmlFor="installationAddress">Installation Address</label>
       <input
         id="installationAddress"
         name="installationAddress"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.installationAddress}
       />
       <label htmlFor="Postcode">Postcode:</label>
       <input
         id="postcode"
         name="postcode"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.postcode}
       />
 </div>
 <div className="form-group col-md-6">
  <label htmlFor="NMI">NMI</label>
       <input
         id="NMI"
         name="NMI"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.NMI}
       />

  <label htmlFor="meterNumber">Meter Number</label>
       <input
         id="meterNumber"
         name="meterNumber"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.meterNumber}
       />
</div>
 <div className="form-group col-md-6">
 <label htmlFor="electricityRetailer">Electricity Retailer:</label>
       <input
         id="electricityRetailer"
         name="electricityRetailer"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.electricityRetailer}
       />

 <label htmlFor="electricityDistribution:">Electricity Distribution:</label>
       <input
         id="electricityDistribution"
         name="electricityDistribution"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.electricityDistribution}
       />
</div>
       <div className="form-group col-md-6">
<label htmlFor="Story">Story:</label>
       <input
         id="Story"
         name="Story"
         type="radio"
         onChange={formik.handleChange}
         value={formik.values.Story}
       />
<label htmlFor="roofType">Roof Type:</label>
       <input
         id="roofType"
         name="roofType"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.roofType}
       />
       </div>
       <div className="form-group col-md-6">
 <label htmlFor="numberOfPanelsSold:">Number of Panels Sold</label>
       <input
         id="numberOfPanelsSold"
         name="numberOfPanelsSold"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.numberOfPanelsSold}
       />
<label htmlFor="Phase">Phase:</label>
       <input
         id="Phase"
         name="Phase"
         type="radio"
         onChange={formik.handleChange}
         value={formik.values.Phase}
       />
       <div className="col-md-2">
<label htmlFor="numberOfTiltedPanels">Number Of Tilted Panels:</label>
       <input
         id="numberOfTiltedPanels"
         name="numberOfTiltedPanels"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.numberOfTiltedPanels}
       />
       </div>
       <div className="form-group col-md-6">
<label htmlFor="salesPersonName">Sales Person Name</label>
       <input
         id="salesPersonName"
         name="salesPersonName"
         type="radio"
         onChange={formik.handleChange}
         value={formik.values.salesPersonName}
       />

       </div>
<label htmlFor="note">Note</label>
       <input
         id="note"
         name="note"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.note}
       />
</div>
<label htmlFor="paymentOptions">Payment Options:</label>
       <input
         id="paymentOptions"
         name="paymentOptions"
         type="radio"
         onChange={formik.handleChange}
         value={formik.values.paymentOptions}
       />
</div>
<div className="col-12">
       <button type="submit">Submit</button>
       </div>
     </form>
     </div>
     </div>
     </div>
     
   );
   
 };
 
export default SignupForm;