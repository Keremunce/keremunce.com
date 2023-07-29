import HomeLayout from "../views/HomeLayout";
import Home from '../views/Home';
import Page404 from '../views/Page404';

const routes = [
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Page404 />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: '*',
        element: <Page404 />
    }
]
export default routes;