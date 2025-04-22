import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-2'>Blogs</h2>
            <p className=' text-center my-4'>Letes Explore Some Basic Question about Routing and React</p>
            <div className='bg-base-200 p-6 rounded-2xl m-7'>
                <h2 className='text-2xl font-bold my-4'>What is useState and how does it work in React?</h2>
                <p className='text-blue-600'>Answer</p>
                <p>
                useState is a React hook that allows functional components to manage and update local state. It initializes a state variable and provides a function to update that value, which triggers a re-render of the component when called.


                </p>
            </div>
            <div className='bg-base-200 p-6 rounded-2xl m-5'>
                <h2 className='text-2xl font-bold my-4'>What is the purpose of useEffect in React?</h2>
                <p className='text-blue-600'>Answer</p>
                <p>
                useEffect is used to handle side effects in React components, such as data fetching, setting up subscriptions, or manually changing the DOM. It runs after the component renders and can be controlled using a dependency array.


                </p>
            </div>
            <div className='bg-base-200 p-6 rounded-2xl m-5'>
                <h2 className='text-2xl font-bold my-4'> What is a custom hook in React and when should you use one?</h2>
                <p className='text-blue-600'>Answer</p>
                <p>
                A custom hook is a reusable function in React that uses built-in hooks to encapsulate logic. You should use custom hooks when you want to share common logic between multiple components to keep your code clean and DRY (Don't Repeat Yourself).
                </p>
            </div>
            <div className='bg-base-200 p-6 rounded-2xl m-5'>
                <h2 className='text-2xl font-bold my-4'>Difference between controlled and uncontrolled components. Which one is better?</h2>
                <p className='text-blue-600'>Answer</p>
                <p>
                Controlled components are managed by React state, while uncontrolled components rely on the DOM for their values. Controlled components offer more control, validation, and predictability, making them the better choice in most cases.
                </p>
            </div>
            <div className='bg-base-200 p-6 rounded-2xl m-5'>
                <h2 className='text-2xl font-bold my-4'>Tell us something about useFormStatus() in React.</h2>
                <p className='text-blue-600'>Answer</p>
                <p>
                useFormStatus() is a hook that provides information about the state of a form, like whether it’s currently submitting. It's commonly used in frameworks like Next.js with server actions to manage form behavior and user feedback during submissions.
                </p>
            </div>
        </div>
    );
};

export default Blogs;