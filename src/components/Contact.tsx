import { SubmitHandler, useForm } from "react-hook-form";
type FormValues = {
  fullName: string;
  email: string;
  message: string;
};
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h3>
        <span>Get</span>
        <span>in Touch</span>
      </h3>
      <ul>
        <li>
          <p>Phone</p>
          <p>0345564926</p>
        </li>
        <li>
          <p>Email</p>
          <p>mkhang189@gmail.com</p>
        </li>
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && <span>{errors.fullName.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>

        <button type="submit">SEND MESSAGE →</button>
      </form>
    </div>
  );
};

export default Contact;
