import React from 'react';
import ReactDOM from 'react-dom';

var contacts = [
    {
        code: 1,
        name: 'first item'
    },
    {
        code: 2,
        name: 'second item'
    },
    {
        code: 3,
        name: 'third item'
    },
    {
        code: 4,
        name: 'fourth item'
    },
    {
        code: 5,
        name: 'fifth item'
    }
];
var Contact = React.CreateClass({
    render: function(){
        return  <li> {this.props.name} </li>
        
    }
})
var List = React.createClass({
    render: function () {
        return (
            <div>
                <ul>
                    {
                    contacts.map(function(el){
                        return <Contact key={el.code} name={el.name} />;
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
     