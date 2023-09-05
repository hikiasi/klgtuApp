import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "./layout";
import { SelectPage } from "@pages/select-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        path="select"
        element={<SelectPage />}
      />
    </Route>
  )
);


export const NavigationProvider = () => {
  return (
    <RouterProvider router={router} />
  )
}
