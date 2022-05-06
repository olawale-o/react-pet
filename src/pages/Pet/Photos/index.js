import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PhotoList from '../../../components/Pet/PhotoList';
import { getPetPhotosService } from '../../../services';
import { getPetPhotos } from '../../../redux/pet/pet_async_action';
import petSelector from '../../../redux/pet/pet_selector';

const Photos = () => {
  const dispatch = useDispatch();
  const { petId } = useParams();
  const { photos } = useSelector(petSelector);
  React.useEffect(() => {
    dispatch(getPetPhotos(getPetPhotosService, { petId }));
  }, [petId]);

  if (!photos) return null;

  return (
    <PhotoList photos={photos} />
  );
};

export default Photos;
