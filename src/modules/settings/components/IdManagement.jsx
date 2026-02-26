import axios from 'axios';
import React, { useState } from 'react'

const IdManagement = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formData,"hitss")
    const data = {...formData,name:"employeeId"}
    axios
      .post("http://localhost:5000/api/counter/configure", data)
      .then((res) => console.log(res));
  }
  const [formData ,setFormData] = useState({
    prefix:"",
    format:"",
    start:"",
    padding:""
  })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <fieldset className="fieldset ">
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
            <legend className="fieldset-legend">Format</legend>
            <select
              className="select"
              value={formData.format}
              onChange={(e) =>
                setFormData({ ...formData, format: e.target.value })
              }
            >
              <option value="{{YYYY}}">{"{{YYYY}}"}</option>
              <option value="{{YY}}">{"{{YY}}"}</option>
              <option value="{{YY/MM}}">{"{{YY/MM}}"}</option>
              <option value="{{YYMM}}">{"{{YYMM}}"}</option>
            </select>
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Start</legend>
            <input
              type="number"
              className="input"
              placeholder="Type here"
              value={formData.start}
              onChange={(e) =>
                setFormData({ ...formData, start: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Padding</legend>
            <input
              type="number"
              className="input"
              placeholder="Type here"
              value={formData.padding}
              onChange={(e) =>
                setFormData({ ...formData, padding: e.target.value })
              }
            />
          </fieldset>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default IdManagement