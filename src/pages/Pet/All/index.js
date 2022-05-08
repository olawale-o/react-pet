import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProfileArea } from '../../../components';
import { getMyPets } from '../../../redux/pet/pet_async_action';
import { myDogService } from '../../../services';
import petSelector from '../../../redux/pet/pet_selector';

const MyPets = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { petIds } = useSelector(petSelector);

  React.useEffect(() => {
    dispatch(getMyPets(myDogService, userId));
  }, [userId]);

  if (petIds === null) return false;

  return (<ProfileArea myPets={petIds} />);
};

export default MyPets;
