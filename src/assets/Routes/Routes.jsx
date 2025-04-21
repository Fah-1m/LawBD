import { createBrowserRouter } from "react-router"
import Mainlayout from "../Layout/Mainlayout"
import Home from "../../Pages/Home"
import Blogs from '../../Pages/Blogs'
import Mybookings from "../../Pages/Mybookings"
import Details from "../../Pages/Details"



const router= createBrowserRouter([
    {
      path: '/',
     Component: Mainlayout,
     children: [
        {
            index: true,
         element: <Home/>,
         loader: ()=> fetch ('/public/Fakedata.json'),
        },
        {
            path: '/mybookings',
            element: <Mybookings></Mybookings>,
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: ()=> fetch ('/public/Fakedata.json')
        }
     ]
    }
  ])

  export default router