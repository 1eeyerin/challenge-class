import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import QueryProvider from "./query/QueryProvider";

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
