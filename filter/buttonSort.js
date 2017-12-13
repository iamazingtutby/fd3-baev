var buttonSort = React.createClass({
    displayName: 'buttonSort',

    propTypes:{
        cbSortAlph: React.PropTypes.func,
    },

    cbSortAlphabet: function(){
        this.props.cbSortAlph(true);
    },

    render: function(){
        return React.DOM.button({value: 'sort', className: 'btn btn-primary', onClick:this.cbSortAlphabet}, 'Sort')
    }
})