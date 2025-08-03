import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.webp";
function Office() {
  const offices = [
    {
      element: "Office Space, at Affordable Range",
      image: <img src={image1} width={500} height={250} />,
      officeName: {
        Name: "DBS",
        Rent: 50000,
        Address: "Chennai , India",
      },
    },
    {
      element: "Office Space, at Premium Range",
      image: <img src={image2} width={500} height={250} />,
      officeName: {
        Name: "ABC",
        Rent: 70000,
        Address: "Bangalore , India",
      },
    },
  ];
  return (
    <div>
      {offices.map((office, index) => (
        <div key={index}>
          <h1>{office.element}</h1>
          {office.image}
          <h1>Name : {office.officeName.Name}</h1>
          <h3
            style={{ color: office.officeName.Rent <= 60000 ? "red" : "green" }}
          >
            Rent : Rs. {office.officeName.Rent}
          </h3>
          <h3>Address : {office.officeName.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default Office;
