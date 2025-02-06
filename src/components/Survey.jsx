import { useState } from "react";
import RadioButtons from "./RadioButtons"
import CheckBoxes from "./CheckBoxes"

function Survey() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  /*setAnswers([{
    name: formData.name,
    email: formData.email,
  }])*/

  // reset form
  setFormData({
    name: "",
    email: "",
  });
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <RadioButtons handleChange={handleChange} />
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <CheckBoxes handleChange={handleChange} />
          </div>
          <label
            >What else have you got to say about your rubber duck?<textarea
              name="review"
              cols="30"
              rows="10"
            ></textarea></label
          ><label
            >Put your name here (if you feel like it):<input
              type="text"
              name="username"
              value="" /></label
          ><label
            >Leave us your email pretty please??<input
              type="email"
              name="email"
              value="" /></label
          ><input
          className="form__submit"
          type="submit"
          value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
