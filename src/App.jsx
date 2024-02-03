import { useEffect, useState } from "react";
import Form from "./component/Form";
import Loader from "./component/Loader";
import axios from "axios";
import ListItem from "./Component/ListItem";

// varsayılan olarak baseUrl ekle
// yapılan bütün isteklerin başındaki api url'İni belirle
axios.defaults.baseURL = `http://localhost:3000`;

function App() {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPageCount, setMaxPageCount] = useState();

  // bileşen ekrana basılma olayını izler
  useEffect(() => {
    // api'da todo verilerini alır
    axios
      .get("/todos", {
        timeout: 3000,
        timeoutErrorMessage: "zaman aşımı",
        params: {
          _per_page: 10,
          _page: page,
        },
      })
      .then((res) => {
        setMaxPageCount(res.data.pages);
        setTodos(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "zaman aşımı") {
          alert("istek zaman aşımına uğradı");
        }
      });
  }, [page]);

  return (
    <div className="container p-3 p-md-5">
      <h2 className="text-center">
        Server <span className="text-warning">CRUD</span>
      </h2>

      <Form setTodos={setTodos} />

      <ul className="list-group">
        {/* veriler yoksa loader bas */}
        {!todos && <Loader />}

        {/* optional chaining ?. */}
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>

      <div className="d-flex justify-content-between my-5">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary"
        >
          {"< Geri"}
        </button>

        <span>{page}</span>

        <button
          disabled={page === maxPageCount}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary"
        >
          {"> İleri"}
        </button>
      </div>
    </div>
  );
}

export default App;
