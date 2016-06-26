import React from 'react';
import ReactDOM from 'react-dom';


export default React.createClass({
    getInitialState() {
        return {
            currentPage: 1
        };
    },
    onPrevClick(){
        if(this.state.currentPage - 1 >= 1){
            this.changePage(this.state.currentPage - 1);
        }
    },
    onNextClick() {
        if(this.state.currentPage + 1 <= this.pages) {
            this.changePage(this.state.currentPage + 1);
        }
    },
    onPageClick(i){
        this.changePage(i);
    },
    changePage(pageNumber) {
        this.setState({
            currentPage: pageNumber
        });
        this.props.onPageChange(pageNumber);
    },
    render() {
        this.pages = Math.ceil(this.props.total / this.props.perPage);
        let pageButtons = [];

        for(let i = 1; i < this.pages + 1; i++) {
            let activeClass = (i === this.state.currentPage) ? 'pagination-list__item is-active': 'pagination-list__item';
            
            pageButtons.push(<li key={i} className={activeClass}><button onClick={this.onPageClick.bind(this, i)}>{i}</button></li>);
        }

        return (
            <div className="pagination">
                <ul className="pagination-list">
                    <li className="pagination-list__item"><button onClick={this.onPrevClick}>prev</button></li>
                   {pageButtons}
                    <li className="pagination-list__item"><button onClick={this.onNextClick}>next</button></li>
                </ul>
            </div>
        );
    }
});