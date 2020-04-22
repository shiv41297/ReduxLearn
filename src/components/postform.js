import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props){
        super(props);
            this.state = {
                title: '',
                body: ''
            }
    }
    onChange = (key, value) => {
            this.setState({...this.state, [key]: value})
    }
    submit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form onSubmit= {this.submit}>
                    <div>
                        <input type="text" 
                        placeholder = 'Add Title' 
                        onChange = {(e) => {this.onChange('title', e.target.value)}}
                        value = {this.state.title} />
                        <br/>
                        <input type="text" 
                        placeholder = 'Add Content' 
                        onChange = {(e) => {this.onChange('body', e.target.value)}}
                        value = {this.state.body} />
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
                <hr/>
            </div>
        );
    }
}

export default PostForm;