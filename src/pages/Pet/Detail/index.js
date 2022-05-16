import { useParams } from 'react-router-dom';

const PetDetail = () => {
  const { petId } = useParams();
  console.log(petId);
  return (
    <div className="details" style={{ fontSize: '20px', marginTop: '100px' }}>
      Details works for
      {petId}
    </div>
  );
};

export default PetDetail;
