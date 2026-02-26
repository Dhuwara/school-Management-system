import React, { useState } from "react";
import axios from "axios";

const ClassessManagement = () => {
     const handleSubmit = (e) => {
       e.preventDefault();
       console.log(formData, "hitss");
      
       axios
         .post("http://localhost:5000/api/class/configureclass", formData)
         .then((res) => console.log(res));
     };
     const [formData, setFormData] = useState({
       standard: "",
       prefix: "",
       sections: "",
       numberOfSections: "",
     });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Class</legend>
            <select
              className="select"
              value={formData.standard}
              onChange={(e) =>
                setFormData({ ...formData, standard: e.target.value })
              }
            >
              <option disabled={true}>Pick a Class</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Prefix</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={formData.prefix}
              onChange={(e) =>
                setFormData({ ...formData, prefix: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Sections</legend>
            <select
              className="select"
              value={formData.sections}
              onChange={(e) =>
                setFormData({ ...formData, sections: e.target.value })
              }
            >
              <option value="ABC">ABC</option>
              <option value="123">123</option>
            </select>
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Number Of Sections</legend>
            <input
              type="number"
              className="input"
              placeholder="Type here"
              value={formData.numberOfSections}
              onChange={(e) =>
                setFormData({ ...formData, numberOfSections: e.target.value })
              }
            />
          </fieldset>
        </div>
        <div className="flex justify-end">
          <button className="btn  btn-success">Success</button>
        </div>
      </form>
    </div>
  );
}

export default ClassessManagement