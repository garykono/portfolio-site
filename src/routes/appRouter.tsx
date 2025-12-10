import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import HomePage from '../pages/HomePage';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        id: 'root',
        children: [
            {
                index: true,
                element: <HomePage />
            },
            
        ]
    }
])

 