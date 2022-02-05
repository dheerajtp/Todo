import welcome from "../images/hi.gif";

const Empty = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={welcome} alt="welcome gif" className="mx-auto h-96" />
      </div>
    </>
  );
};

export default Empty;
