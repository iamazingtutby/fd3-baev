import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

var contacts = [
    'first item',
    'second item',
    'third item',
    'fourth item',
    'fifth item'
];


var Contact = createReactClass({
    render: function(){
        return  ( 
        <li className="list-item"> 
            <div> {this.props.name} </div>
            <div> {this.props.phoneNumber} </div>
        </li>
        )
    }
})
var List = createReactClass({

    getInitialState: function(){
        return {
            displayedContacts: contacts
        }
    },
    searchHandle: function(ev){
        var searchQuery = ev.target.value.toLowerCase();
        var displayedContacts = contacts.filter(function(el){
            var searchValue = el.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        })
        console.log('==', displayedContacts);

        this.setState({
            displayedContacts: displayedContacts
        })
    },

    sortHandle: function(){
        var _dContacts = contacts.sort();
        console.log('==_dContacts', _dContacts);

        this.setState({
            displayedContacts: _dContacts
        })
    },

    render: function () {
        return (
            <div>
                <input type="text" onChange={this.searchHandle}/>
                <button type="button" onClick={this.sortHandle} >sort</button>
                <ul>
                    {
                    this.state.displayedContacts.map(function(el,i){
                        return <Contact
                        key={i}
                        name={el}
                        />;
                    })
                    }
                    </ul>
            </div>
        );
    }
});

ReactDOM.render(
    <List />,
    document.getElementById("container")
);
     