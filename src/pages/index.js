import LayoutForm from "../layouts/LayoutForm/LayoutForm"
import LayoutMain from "../layouts/LayoutMain/LayoutMain"
import NotFound from "./NotFound/NotFound"
import Index from "./Index/Index"
import FormRegister from "./FormRegister/FormRegister"

import { createBrowserRouter } from "react-router-dom"
import DetailEvent from "../components/DetailEvent/DetailEvent"

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
    },{
        path: "/" ,
        element: <LayoutMain />,
        children: [{
            path: "/index/",
            element: <Index />
        },{
            path: "/details/:id",
            element: <DetailEvent />
        }]
    },
    { path: "/notfound/:numerodinamico" , element: <NotFound /> }
])