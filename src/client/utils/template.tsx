import * as React from 'react';

class Template extends React.Component<ITemplateProps, ITemplateState> {

    constructor(props: ITemplateProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main className="container my-5">
                <h1>Template</h1>
            </main>
        )
    }
}

export interface ITemplateProps { }

export interface ITemplateState {}

export default Template;