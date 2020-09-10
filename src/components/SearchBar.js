import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '',
        degree: 'celsius',
        country: 'ca'
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onDegreeChange = (event) => {
        this.setState({ degree: event.target.value });
    }

    onCountryChange = (event) => {
        this.setState({ country: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term, this.state.degree, this.state.country);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>City</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            placeholder="Type in your city to get weather!"
                        />
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Unit</label>
                            <select onChange={this.onDegreeChange} className="ui search dropdown">
                                <option value="metric">Celsius</option>
                                <option value="imperial">Fahrenheit</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Country</label>
                            <select onChange={this.onCountryChange} className="ui search dropdown">
                                <option value="CA">Canada</option>
                                <option value="US">United States</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
