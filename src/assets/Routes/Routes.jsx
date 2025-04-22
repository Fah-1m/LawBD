import { createBrowserRouter } from "react-router"
import Mainlayout from "../Layout/Mainlayout"
import Home from "../../Pages/Home"
import Blogs from '../../Pages/Blogs'
import Mybookings from "../../Pages/Mybookings"
import Details from "../../Pages/Details"
import Error from "../../Pages/Error"
import Nobooking from "../../Component/Nobooking"
import Nolawyer from "../../Component/Nolawyer"



const router= createBrowserRouter([
    {
      path: '/',
     Component: Mainlayout,
   errorElement: <Error/>,
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
            // loader: ()=> fetch ('/public/Fakedata.json'),
            loader: async ({ params }) => {
                const res = await fetch('/public/Fakedata.json');
                const data = await res.json();
            
                const item = data.find(d => d.id === parseInt(params.id));
                
                if (!item) {
                  throw new Response("Not Found", { status: 404 });
                }
            
                return data; // or return data if you want full list
              }
        },
        {
            path: '/no',
            element: <Nobooking></Nobooking>
        },
        {
            path: "/34rete",
            element: <Nolawyer></Nolawyer>
        }
        
     ]
    }
  ])

  export default router