import React from 'react';
import Blog from './Blog';


const Blogs = () => {

    const blogPosts = [
        {
            id: 1,
            title: `JavaScript is the world most popular 
            lightweight, interpreted compiled programming 
            language.`,
            body: `JavaScript is the world most popular 
            lightweight, interpreted compiled programming 
            language. It is also known as scripting 
            language for web pages. It is well-known for 
            the development of web pages, many non-browser 
            environments also use it. JavaScript can be 
            used for Client-side developments as well as 
            Server-side developments`,
            author: "Nishant Singh ",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
            created_at: '8th Mar 2022'
        },

        {
            id: 2,
            title: "Data Structure ",
            body: `There are many real-life examples of 
            a stack. Consider an example of plates stacked 
            over one another in the canteen. The plate 
            which is at the top is the first one to be 
            removed, i.e. the plate which has been placed 
            at the bottommost position remains in the 
            stack for the longest period of time. So, it 
            can be simply seen to follow LIFO(Last In 
            First Out)/FILO(First In Last Out) order.`,
            author: "Suresh Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
            created_at: '10th Apr 2022'
        },

        {   
            id: 2,
            title: "Algorithm",
            body: `The word Algorithm means “a process 
            or set of rules to be followed in calculations 
            or other problem-solving operations”. Therefore 
            Algorithm refers to a set of rules/instructions 
            that step-by-step define how a work is to be 
            executed upon in order to get the expected 
            results. `,
            author: "Monu Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
            created_at: '1th Jan 2022'
        },

        {
            id: 2,
            title: "Computer Network",
            body: `An interconnection of multiple devices, 
            also known as hosts, that are connected using 
            multiple paths for the purpose of sending/
            receiving data media. Computer networks can 
            also include multiple devices/mediums which 
            help in the communication between two different 
            devices; these are known as Network devices
            and include things such as routers, switches,
            hubs, and bridges. `,
            author: "Sonu Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
            created_at: '9th Sep 2022'
        },

    ];


    return (
        <div style={{ marginTop: '140px' }}>
            {blogPosts.map((blog, index) => (
                <Blog key={blog.id} index={index} blog={blog} />
            ))}
        </div>
    )
}

export default Blogs;