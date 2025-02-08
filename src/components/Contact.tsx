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
    reset,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="absolute left-1/3 right-0 bg-white rounded-2xl overflow-y-scroll p-4 h-full">
      <h3 className="my-4 font-medium text-xl">
        <span className="text-green-500">Get</span>
        <span className="text-gray-500"> in Touch</span>
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5480543236886!2d107.80372561051139!3d11.552906888599711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3173f655f4e3120f%3A0xbdf50393472b3c94!2zUXXhuqNuZyBUcsaw4budbmcgMjggVGjDoW5nIDM!5e1!3m2!1svi!2s!4v1739021223340!5m2!1svi!2s"
        loading="lazy"
        className="w-full h-80 rounded-xl"
      ></iframe>
      <ul className="flex flex-row gap-4 my-4">
        <li className="flex flex-row gap-2 justify-between w-1/2 h-fit border border-gray-200 p-2 rounded-lg">
          <p className="bg-green-500 text-white px-2 rounded-lg">Phone_____</p>
          <p className="font-light tracking-wider text-base">0345564926</p>
        </li>
        <li className="flex flex-row gap-2 justify-between w-1/2 h-fit border border-gray-200 p-2 rounded-lg">
          <p className="bg-green-500 text-white px-2 rounded-lg">Email_____</p>
          <p className="font-light tracking-wider text-base">
            mkhang189@gmail.com
          </p>
        </li>
      </ul>
      <h3 className="my-4 font-medium text-xl">
        <span className="text-green-500">Contact</span>
        <span className="text-gray-500"> form</span>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="website-admin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bonnie Green"
              {...register("fullName", { required: "Full Name is required" })}
            />
          </div>
          {errors.fullName && <span className="text-red-500 text-sm italic font-medium">{errors.fullName.message}</span>}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="email"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmailname.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          {errors.email && <span className="text-red-500 text-sm italic font-medium">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Message
          </label>
          <textarea
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a message..."
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm italic font-medium">{errors.message.message}</span>}
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium tracking-wider">
          SEND MESSAGE →
        </button>
      </form>
    </div>
  );
};

export default Contact;
