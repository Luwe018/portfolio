import BagdeAvatar from "@/components/avatar";

const Detail: React.FC = () => {

    const name: string = 'Luwe';
    const email: string = "luuwee018@gmail.com";
    const color: string = 'red';

  return (
    <>
      <div className="page">
        <div className="side-menu">
          <BagdeAvatar name={name} bgColor={color} nameTag={name} emailAddress={email}/>
        </div>
      </div>
    </>
  );
};

export default Detail;
