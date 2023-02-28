import LayoutForm from "../layouts/LayoutForm/LayoutForm"
import NotFound from "./NotFound/NotFound"
import FormRegister from "./FormRegister/FormRegister"

import { createBrowserRouter } from "react-router-dom"

/**
 * @createBrowserRouter recibe una rray de objetos
 * cada objeto tiene dos propiedades
 * @path la ruta
 * @element el elmento (componente de página que se renderizará en esa ruta)
 */
export const router = createBrowserRouter([
    {
        path: "/" ,
        element: <LayoutForm />,
        children: [{
            path: "/nueva-categoria/",
            element: <FormRegister />
        },{
            path: "/*",
            element: <NotFound />
        }]
    },
    { path: "/notfound/:numerodinamico" , element: <NotFound /> }
])