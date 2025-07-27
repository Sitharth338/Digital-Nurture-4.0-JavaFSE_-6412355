import { useParams } from "react-router-dom";
import { trainers } from "./TrainersMock";

export default function TrainerDetail() {
  const { id } = useParams();
  const trainer = trainers.find(t => t.trainerId === parseInt(id));

  if (!trainer) return <p>Trainer not found</p>;

  return (
    <div>
      <h2>{trainer.name}</h2>
      <p>Email: {trainer.email}</p>
      <p>Phone: {trainer.phone}</p>
      <p>Technology: {trainer.technology}</p>
      <p>Skills: {trainer.skills.join(", ")}</p>
    </div>
  );
}
