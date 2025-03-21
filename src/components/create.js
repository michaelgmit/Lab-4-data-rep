import React from 'react';

export class Create extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: '',
        }
    }



    onChangeTitle(e) {           //onchange title takes an argument 'e' this could be changed to anything
        this.setState({            //all 'onchange' controlls update state when values change
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    onSubmit(e) {                       //this prevents submit button from being called repeatedly
        e.preventDefault();
        alert("Movie: " + this.state.Title + " "
            + this.state.Year + " "
            + this.state.Poster);
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">     {/* div is for input control */}
                        <label>Add Movie Title:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.ear}
                            onChange={this.onChangeYear}></input>
                    </div>
                    <div className="form-group">
                        <label>Movie Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}></textarea>
                    </div>

                    <div className="form-group">       {/* this div is used to controll submit button */}
                        <input type='submit'        //this will invoke the earlier part of the form to submit 'onSubmit'
                            value='Add Movie'
                            className='btn btn-primary'></input>

                    </div>
                </form>
            </div>
        );

    }
}