const DeletePopup = () => (
  <div className="delete__container">
    <h6 className="heading_6">Delete Pet?</h6>
    <p className="modal__text">
      This can’t be undone and it will be removed from your profile,
      and from Paw search results.
    </p>
    <button type="button" className="button button__danger" onClick={() => console.log('delete')}>Delete</button>
    <button type="button" className="button button__cancel" onClick={() => console.log('Cancel')}>Cancel</button>
  </div>
);

export default DeletePopup;
