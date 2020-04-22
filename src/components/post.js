import React, { Component } from 'react';

class Post extends Component {
    constructor(props){
        super(props);
            this.state = {
                posts: []
            }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            this.setState({
                posts: data
            })
        })
    }
    render() {
        const postItems = this.state.posts.map((post, index) => {
            return(
                <div key = {index}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        
        })
        return (
            <div>
            <h1>Posts </h1>
                {postItems}
            </div>
        );
    }
}

export default Post;


// import React, {useState, useEffect}  from 'react';

// function Post(){
//             const [posts, setState] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => {
//             setState({
//                 posts: data
//             })
//         })
//     },[])
//         const postItems = posts.map((post, index) => {
//             return(
//                 <div key = {index}>
//                     <h3>{post.title}</h3>
//                     <p>{post.body}</p>
//                 </div>
//             )
        
//         })
//         return (
//             <div>
//             <h1>Posts </h1>
//                 {postItems}
//             </div>
//         );
//     }

// export default Post;


