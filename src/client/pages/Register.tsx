import * as React from 'react';
import { json, SetAccessToken } from '../utils/api';
import { RouteComponentProps } from 'react-router';

class Register extends React.Component<IRegisterProps, IRegisterState> {

    constructor(props: IRegisterProps) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    async handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        try {
            let result = await json('/auth/register', 'POST', this.state);
            SetAccessToken(result.token, { userid: result.token, role: result.role });
            this.props.history.push('/')
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <main className="container my-5">
                <form className="form-group">
                    <label>Name:</label>
                    <input value={this.state.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })} className="form-control" type="text"/>
                    <label>Email:</label>
                    <input value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} className="form-control" type="text"/>
                    <label>Password:</label>
                    <input value={this.state.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} className="form-control" type="password"/>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleClick(e)} >Register!</button>
                </form>
            </main>
        )
    }
}

export interface IRegisterProps extends RouteComponentProps { }

export interface IRegisterState {
    name: string,
    email: string,
    password: string
}

export default Register;