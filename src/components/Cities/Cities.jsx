import React from 'react';

// Componenst
import City from '../City/City';

// Style
import './Cities.scss';

class Cities extends React.Component {
    state = {
        visibleCity: null
    }

    setVisibleCity = visibleCity => {
        this.setState({ visibleCity })
    }
    renderCities = () => {
        const { cities } = this.props;
        const { visibleCity } = this.state;

        return cities.map( item => {
            return (
                <City
                    key={ item.id }
                    city= { item }

                    visibleCity={ visibleCity }
                    setVisibleCity={ this.setVisibleCity }
                />
            )
        } )
    }
    
    render() {
    return <section className='cities'>{ this.renderCities() }</section>;
    }
};

export default Cities;