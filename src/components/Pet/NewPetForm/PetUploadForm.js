import React from 'react';
import PropType from 'prop-types';

const PetUploadForm = ({ formField, setFieldValue }) => {
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const fileUploadRef = React.useRef();
  const { petImages } = formField;
  const onFileChange = (e) => {
    const { files } = e.target;
    const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
    setSelectedFiles(fileArray);
    setFieldValue(petImages.name, [...files]);
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
        id="file-uploader"
        ref={fileUploadRef}
        accept="image/*"
      />
      <label htmlFor="file-uploader" className="file__label">
        <button type="button" className="upload__button" onClick={() => fileUploadRef.current?.click()}>Upload</button>
      </label>
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
