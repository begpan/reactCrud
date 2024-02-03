import getStatus from "./../helpers/getStatus";

const Content = ({ todo, setIsEditMode, handleDelete }) => {
  return (
    <>
      {/* getSatatus: todonun durmuna göre span döndürür */}
      {getStatus(todo.status)}

      <span>{todo.title}</span>

      <div className="btn-group">
        <button
          onClick={() => setIsEditMode(true)}
          className="btn btn-sm btn-primary"
        >
          Düzenle
        </button>

        <button onClick={handleDelete} className="btn btn-sm btn-danger">
          Sil
        </button>
      </div>
    </>
  );
};
export default Content;
