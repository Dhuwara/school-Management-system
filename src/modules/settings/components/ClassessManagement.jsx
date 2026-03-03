import React, { useState, useEffect } from "react";
import axios from "axios";

const ClassessManagement = () => {
  const [formData, setFormData] = useState({
    prefix: "",
    standardFormat: "number",
    sectionFormat: "ABC",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [initialData, setInitialData] = useState(null);

  // Fetch config
  useEffect(() => {
    const fetchClassConfig = async () => {
      try {
        const res = await axios.get("/api/classconfig/getconfig");
        if (res.data && res.data.length > 0) {
          const data = {
            prefix: res.data[0].prefix || "",
            standardFormat: res.data[0].standardFormat || "number",
            sectionFormat: res.data[0].sectionFormat || "ABC",
          };
          setFormData(data);
          setInitialData(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchClassConfig();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent any default submission
    try {
      await axios.post("/api/classconfig/upsert", formData);
      alert("Configuration saved successfully!");
      setInitialData(formData);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("Failed to save configuration");
    }
  };

  const handleCancel = () => {
    if (initialData) setFormData(initialData);
    setIsEditing(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Prefix</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={formData.prefix}
              disabled={!isEditing}
              onChange={(e) =>
                setFormData({ ...formData, prefix: e.target.value })
              }
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Standard Format</legend>
            <select
              className="select"
              value={formData.standardFormat}
              disabled={!isEditing}
              onChange={(e) =>
                setFormData({ ...formData, standardFormat: e.target.value })
              }
            >
              <option value="number">Number</option>
              <option value="roman">Roman</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Section Format</legend>
            <select
              className="select"
              value={formData.sectionFormat}
              disabled={!isEditing}
              onChange={(e) =>
                setFormData({ ...formData, sectionFormat: e.target.value })
              }
            >
              <option value="ABC">ABC</option>
              <option value="roman">Roman</option>
            </select>
          </fieldset>
        </div>

        {isEditing && (
          <div className="flex justify-end gap-2 mt-4">
            <button type="submit" className="btn btn-success">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        )}
      </form>
      {!isEditing && (
        <div className="flex justify-end mb-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassessManagement;
