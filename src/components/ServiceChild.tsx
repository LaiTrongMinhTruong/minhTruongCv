import ServiceChildProp from "../types/ServiceChildProp";

const ServiceChild = ({ children, title, description }: ServiceChildProp) => {
  return (
    <div
      className="flex flex-col gap-4 justify-center items-center w-1/3"
    >
      {children}
      <p className="font-medium text-md text-gray-700">{title}</p>
      <p className="font-normal text-sm text-gray-500 tracking-wide">{description}</p>
    </div>
  );
};

export default ServiceChild;
