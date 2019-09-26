import * as React from 'react';
import { ICategory } from '../utils/interface';
import { RouteComponentProps } from 'react-router';

class Add extends React.Component<IAddProps, IAddState> {

    constructor(props: IAddProps) {
        super(props);
        this.state = {
            title: '',
            author: '',
            categoryid: 1,
            price: "0",
            categories: [],
            selectedCategory: "0"
        }
    }

    async componentDidMount() {
        let res = await fetch('/api/categories')
        let data = await res.json();
        this.setState({ categories: data })
    }

    async addBook(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        const newBook = {
            title: this.state.title,
            author: this.state.author,
            categoryid: this.state.categoryid,
            price: this.state.price
        }
        try {
            let res = await fetch('/api/books', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newBook)
            });
            if(res.ok) {
                this.props.history.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <main className="container my-5">
                <form className="form-group">
                    <label>Title:</label>
                    <input value={this.state.title} onChange={(e:React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })} className="form-control" type="text"/>
                    <label>Author:</label>
                    <input value={this.state.author} onChange={(e:React.ChangeEvent<HTMLInputElement>) => this.setState({ author: e.target.value })} className="form-control" type="text"/>
                    <label>CategoryId:</label>
                    <select value={this.state.selectedCategory} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => this.setState({ selectedCategory: e.target.value })} className="form-control">
                        <option value="0">Select an Option...</option>
                        {this.state.categories.map(category => {
                            return(
                                <option key={`cat-${category.id}`} value={category.id}>{category.name}</option>
                            )
                        })}
                    </select>
                    <label>Price:</label>
                    <input value={this.state.price} onChange={(e:React.ChangeEvent<HTMLInputElement>) => this.setState({ price: e.target.value })} className="form-control" type="text"/>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.addBook(e)} className="btn btn-info form-control" >Add Book!</button>
                </form>
            </main>
        )
    }
}

export interface IAddProps extends RouteComponentProps<{id: string}> { }

export interface IAddState {
    title: string,
    author: string,
    categoryid: number,
    price: string,
    categories: Array<ICategory>,
    selectedCategory: string
}

export default Add;