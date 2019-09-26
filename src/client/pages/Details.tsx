import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

class Details extends React.Component<IDetailsProps, IDetailsState> {

    constructor(props: IDetailsProps) {
        super(props);
        this.state = {
            book: {
                id: 0,
                title: '',
                author: '',
                price: 0
            }
        };
    }

    async componentDidMount() {
        let res = await fetch(`/api/books/${this.props.match.params.id}`)
        let data = await res.json();
        this.setState({ book: data })
    }

    render() {
        return (
            <main className="container my-5">
                <section className="row justify-content-center">
                    <div className="card">
                        <div className="card-body">
                            <h4> {this.state.book.title} </h4>
                            <h6> written by: {this.state.book.author} </h6>
                            <p> Price: {this.state.book.price} </p>
                            <Link to={`/edit/${this.props.match.params.id}`}>Edit/Delete</Link>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export interface IDetailsProps extends RouteComponentProps<{id: string}> { }

export interface IDetailsState {
    book: {
        id: number,
        title: string,
        author: string,
        price: number
    }
}

export default Details;