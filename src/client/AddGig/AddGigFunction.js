import React, { useState } from "react";

export const AddGigFunction = () => {
  const [gigTitle, setGigTitle] = useState("");
  const [gigTech, setGigTech] = useState("");
  const [gigBudget, setGigBudget] = useState(500);
  const [gigDesc, setGigDesc] = useState("");
  const [gigEmail, setGigEmail] = useState("");

  return (
    <div>
      <section id="add" className="container">
        <div className="form-wrap">
          <h1>Add A Gig</h1>
          <p>
            Your contact email will be shared with registered users to apply to
            your gig
          </p>
          <form>
            <div className="input-group">
              <label htmlFor="title">Gig Title</label>
              <input
                value={gigTitle}
                type="text"
                onChange={e => setGigTitle(e.target.value)}
                name="title"
                id="title"
                className="input-box"
                placeholder="eg. Small Wordpress website, React developer"
                maxLength="100"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="technologies">Technologies Needed</label>
              <input
                value={gigTech}
                type="text"
                onChange={e => setGigTech(e.target.value)}
                name="technologies"
                id="technologies"
                className="input-box"
                placeholder="eg. javascript, react, PHP"
                maxLength="100"
              />
            </div>
            <div className="input-group">
              <label htmlFor="budget">Budget</label>
              <input
                value={gigBudget}
                type="number"
                onChange={e => {
                  e.target.value >= 0
                    ? setGigBudget(e.target.value)
                    : setGigBudget(0);
                }}
                name="budget"
                id="budget"
                className="input-box"
                placeholder="eg. 500, 5000, 10000"
              />
            </div>
            <div className="input-group">
              <label htmlFor="description">Gig Description</label>
              <textarea
                name="description"
                id="description"
                onChange={e => setGigDesc(e.target.value)}
                className="input-box"
                placeholder="Describe the details of the gig"
                rows="10"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="budget">Contact Email</label>
              <input
                type="email"
                name="contact_email"
                onChange={e => setGigEmail(e.target.value)}
                id="contactemail"
                className="input-box"
                placeholder="Enter an email"
                required
              />
            </div>
            <input
              type="submit"
              value="Add Gig"
              onClick={e => {
                e.preventDefault();
                console.log(gigTitle, gigTech, gigBudget, gigDesc, gigEmail);
              }}
              className="btn btn-reverse"
            />
          </form>
        </div>
      </section>
    </div>
  );
};
