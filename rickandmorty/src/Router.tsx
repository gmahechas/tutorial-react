import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

import Core from './Core';
import NotFound from './NotFound';
import Home from './modules/home/Home';
import Favorites from './modules/favorites/Favorites';
import Contact from './modules/contact/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Core />,
        errorElement: <NotFound />,
        children: [
            {
                path: 'Home',
                element: <Home />,
            },
            {
                path: 'favorites',
                element: <Favorites />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
]);

const Router = () => {
	return <RouterProvider router={router} />;
}

export default Router;