import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {json} from '../utils/api'

class Edit extends React.Component<IEditProps, IEditState> {

    constructor(props: IEditProps) {
        super(props);
        this.state = {
            title: '',
            author: '',
            categoryid: 0,
            price: 0
        };
    }

    async handleEdit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        let editedBook = {
            title: this.state.title,
            author: this.state.author,
            categoryid: this.state.categoryid,
            price: this.state.price
        }
        try {
            let res = await json(`/api/books/${this.props.match.params.id}`, 'PUT', editedBook);
            if(res.ok) {
                this.props.history.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    async handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        try {
            let res = await json(`/api/books/${this.props.match.params.id}`, 'DELETE');
            if(res.ok) {
                this.props.history.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    async componentDidMount() {
        let res = await fetch(`/api/books/${this.props.match.params.id}`)
        let data = await res.json();
        this.setState({
            title: data.title,
            author: data.author,
            categoryid: data.categoryid,
            price: data.price
        })
    }

    render() {
        return (
            <main className="container my-5">
                <form className="form-group">
                    <label>Title:</label>
                    <input value={this.state.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })} className="form-control" type="text"/>
                    <label>Author:</label>
                    <input value={this.state.author} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ author: e.target.value })} className="form-control" type="text"/>
                    <label>CategoryId:</label>
                    <input value={this.state.categoryid} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ categoryid: e.target.valueAsNumber })} className="form-control" type="text"/>
                    <label>Price:</label>
                    <input value={this.state.price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ price: e.target.valueAsNumber })} className="form-control" type="text"/>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleEdit(e)} className="btn btn-info">Edit</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleDelete(e)} className="btn btn-danger">Delete</button>
                </form>
            </main>
        )
    }
}

export interface IEditProps extends RouteComponentProps<{id: string}> { }

export interface IEditState {
    title: string,
    author: string,
    categoryid: number,
    price: number
}

export default Edit;