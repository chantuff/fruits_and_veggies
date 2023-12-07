const React = require('react');
const vegetables = require('../models/vegetables');

class Index extends React.Component {
    render() {
        const { fruits} = this.props;
        // const fruits = this.props.fruits;

        return (
            <div>
                <h1>Vege Index Page</h1>
                <nav>
                    <a href="/vegetable/new">Create a New Vegetable</a>
                </nav>
                <ul>
                    {vegetables.map((vegetable, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/vegetables/${i}`}>
                                    {vegetable.name}
                                </a> {' '}
                                is {vegetables.color} <br></br>
                                {vegetable.readyToEat
                                ? `It is ready to eat`
                            :   `It is NOT ready to eat`}
                            <br />
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;