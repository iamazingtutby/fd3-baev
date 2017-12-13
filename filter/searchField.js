var searchField = React.createClass({
    displayName: 'searchField',

    propTypes:{
        cbSortInput: React.PropTypes.func,
    },

    getText: function (text){
        this.props.cbSortInput(text.target.value);
    },


    render: function(){
        // var _searchField = 
        return React.DOM.input({type: 'text', placeholder: 'start typing', className: 'input', onChange:this.getText})
    } 
})