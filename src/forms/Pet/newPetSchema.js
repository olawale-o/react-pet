import * as Yup from 'yup';
import newPetModel from './newPetModel';

const {
  formField: {
    petName,
    petColor,
    petGender,
    petWeight,
    petDescription,
    petBreed,
    petImages,
  },
} = newPetModel;

export default [
  // Bio
  Yup.object().shape({
    [petName.name]: Yup.string().required(petName.error.required).label(petName.name),
    [petColor.name]: Yup.string().required(petColor.error.required).label(petColor.name),
    [petGender.name]: Yup.string().oneOf(['m', 'f']).required(petGender.error.required).label(petGender.name),
    [petWeight.name]: Yup.number()
      .min(20, 'Too low')
      .max(200, 'Too high')
      .required(petWeight.error.required)
      .label(petWeight.name),
    [petDescription.name]: Yup.string()
      .required(petDescription.error.required)
      .label(petDescription.name),
    [petBreed.name]: Yup.string().required(petBreed.error.required).label(petBreed.name),
  }),

  // Images
  Yup.object().shape({
    [petImages.name]: Yup.array().of(Yup.mixed().nullable().required('File is required')).required('Upload atleast one image').label(petImages.name),
  }),
];
