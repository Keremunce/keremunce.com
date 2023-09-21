import Home from '../views/Home';
import Page404 from '../views/Page404';
import HomeTab from '../views/tabs/HomeTab';
import AboutTab from '../views/tabs/AboutTab';
import PortfolioTab from '../views/tabs/PortfolioTab';
import ContactTab from '../views/tabs/ContactTab';

const routes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <Page404 />,
        children: [
            {
                index: true,
                element: <HomeTab />
            },
            {
                path: 'AboutTab',
                element: <AboutTab />
            },
            {
                path: 'PortfolioTab',
                element: <PortfolioTab />
            },
            {
                path: 'ContactTab',
                element: <ContactTab />
            }
        ]
    },
    {
        path: '*',
        element: <Page404 />
    }
]
export default routes;