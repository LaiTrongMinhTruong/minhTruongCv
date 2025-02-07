import ServiceChildProp from "../types/ServiceChildProp";

const ServiceChild = ({ children, title, description }: ServiceChildProp) => {
  return (
    <div>
      {children}
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ServiceChild;
