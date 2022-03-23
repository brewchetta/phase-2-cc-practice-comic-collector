import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"

function App() {
  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer />
        </div>

        <div className="sidebar">
          <ComicForm />
        </div>

      </div>


    </div>
  );
}

export default App;
