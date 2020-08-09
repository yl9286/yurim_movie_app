import React from 'react';
import './Detail.css';

class Detail extends React.Component{
    
    componentDidMount() {
        const {location, history}= this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;

        if (location.state) {
            return (
                <div className="dmovie">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                    <div>
                        <h3 className="dmovie__title">{location.state.title}</h3>
                        <h5 className="dmovie__year">{location.state.year}</h5>
                        <ul className="dmovie__genres">
                            {
                                location.state.genres.map((genre, index)=>{
                                return <li key={index} className="dmovie__genre">{genre}</li>;
                                })
                            }
                        </ul>
                        <p className="dmovie__summary">{location.state.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;