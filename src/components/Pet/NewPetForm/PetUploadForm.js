import React from 'react';
import PropType from 'prop-types';

const PetUploadForm = ({ formField, setFieldValue }) => {
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const { petImages } = formField;
  const onFileChange = (e) => {
    const { files } = e.target;
    const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
    setSelectedFiles(fileArray);
    setFieldValue(petImages.name, files);
    Array.from(files).forEach((file) => URL.revokeObjectURL(file));
  };

  return (
    <div className="pet__upload">
      <input
        type="file"
        name={petImages.name}
        onChange={onFileChange}
        required
        multiple
      />
      <div className="drop__zone">
        {selectedFiles && selectedFiles.map((file) => (<img src={file} alt="pet" key={file} />))}
      </div>
    </div>
  );
};

export default PetUploadForm;

PetUploadForm.propTypes = {
  formField: PropType.shape({
    petImages: PropType.shape({
      name: PropType.string.isRequired,
    }).isRequired,
  }).isRequired,
  setFieldValue: PropType.func.isRequired,
};
