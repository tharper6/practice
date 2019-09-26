import * as React from 'react';
import {json} from '../utils/api'
import { IBook } from '../utils/interface';
import { Link } from 'react-router-dom';

class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            books: []
        };
    }

    async componentDidMount() {
        try {
            let result = await fetch('/api/books');
            let data = await result.json();
            this.setState({ books: data })
        } catch (error) {
            console.log(error)
        }
        console.log(this.state.books)
    }

    render() {
        return (
            <main className="container my-5">
                {this.state.books.map(book => {
                    return (
                        <section className="row justify-content-center">
                            <div className="card col-md-8">
                                <div className="card-body">
                                    <h4> {book.title} </h4>
                                    <Link className="btn btn-info text-center" to={`/details/${book.id}`}>Details</Link>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </main>
        )
    }
}

export interface IHomeProps { }

export interface IHomeState {
    books:Array<IBook>
}

export default Home;