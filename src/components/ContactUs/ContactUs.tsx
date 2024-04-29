import logo3 from "../../assets/rfg_logo3.jpg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";


const ContactUs = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "207a3b1f-f051-471b-999d-f293fc146ce1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        setFormData({ name: "", email: "", message: "" }); 

      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred while submitting the form");
    }
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 py-10">
        <div className="flex flex-col w-1/2 lg:w-1/4 gap-5">
          <img src={logo3} alt="" className="w-32 h-32" />
          <div className="text-2xl font-medium">
            Send us a message
            <p className="text-wrap text-sm">
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional quality to our
              products.
            </p>
          </div>
          <div>
            <MdOutlineAlternateEmail className="w-10 h-10 inline-block" />{" "}
            <span className="text-md font-normal">sample.email@gmail.com</span>
          </div>
          <div>
            <LuPhoneCall className="w-10 h-10 inline-block" />{" "}
            <span className="text-md font-normal">+639-999-999-999</span>
          </div>
          <div>
            <IoLocationOutline className="w-10 h-10 inline-block" />{" "}
            <span className="text-md font-normal">
              77 Sample St. Ave, Sample City SA 99999, US
            </span>
          </div>
        </div>

        <form className="flex flex-col gap-5 w-1/2 lg:w-1/4" onSubmit={onSubmit}>
          <label className="mt-5">
            <div>Your Name</div>
            <input
              type="text"
              name="name"
              className="h-10 w-full "
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="mt-5">
            <div>Your Email</div>
            <input
              type="email"
              name="email"
              className="h-10 w-full"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="mt-5">
            <div>Your Message</div>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full "
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit" className="py-3 px-10 bg-app-blue text-white">
            Submit Form
          </button>
          {result !== "" ? (<div>{result} <FaCheck className="w-5 h-5 text-app-blue inline-block ml-3"/></div>) : <></>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
