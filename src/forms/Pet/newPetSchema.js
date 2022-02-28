import * as Yup from 'yup';
import newPetModel from './newPetModel';

const {
  formField: {
    petName,
    petColor,
    petGender,
    petWeight,
  },
} = newPetModel;

export default () => Yup.object().shape({
  [petName.name]: Yup.string().required(petName.error.required).label(petName.name),
  [petColor.name]: Yup.string().required(petColor.error.required).label(petColor.name),
  [petGender.name]: Yup.string().oneOf(['1', '2']).required(petGender.error.required).label(petGender.name),
  [petWeight.name]: Yup.number()
    .min(20, 'Too low')
    .max(200, 'Too high')
    .required(petWeight.error.required)
    .label(petWeight.name),
});
