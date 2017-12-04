var ishopTable = React.createClass({

    displayName: 'ishopTable',

    propTypes: {
        goods:React.PropTypes.arrayOf(
          React.PropTypes.shape({
              name: React.PropTypes.string.isRequired,
              price: React.PropTypes.string.isRequired,
              photo: React.PropTypes.string.isRequired,
              stock: React.PropTypes.string.isRequired,
              sku: React.PropTypes.string.isRequired
          })
        )
    },

    render: function() {

        var goodsTable = [];
        var goodsTable2 = [];

        for (var i = 0; i < this.props.goods.length; i += 3) {
            goodsTable2.push(this.props.goods.slice(i, i + 3));
        }

        goodsTable2.forEach( function (v,i) {
                var tds = [];
                v.forEach(function (item) {
                    var goodsTd =
                        React.DOM.td({key:item.sku, className:'item'},
                            React.DOM.div({className: 'card'},
                                React.DOM.img({className:'photo card-img-top', src: item.photo}),
                                React.DOM.div({className: 'card-body'},
                                    React.DOM.h4({className:'card-title'},item.name),
                                    React.DOM.div({className:'price'},
                                        React.DOM.span({},'Цена '),
                                        React.DOM.span({},item.price)
                                        ),
                                    React.DOM.div({className:'stock'},
                                        React.DOM.span({},'Остаток '),
                                        React.DOM.span({},item.stock)),
                                    React.DOM.span({className:'sku'},
                                        React.DOM.span({},'Артикул '),
                                        React.DOM.span({},item.sku))
                                    )
                                )
                        )
                    tds.push(goodsTd);
                    console.log('td', item.sku);
                })

                var goodsTr =
                    React.DOM.tr({key:i,className:'item-row'},
                        tds
                    );
                goodsTable.push(goodsTr);
        }

        );
        return React.DOM.div(
            {className:'ishopTable'},
            React.DOM.table(
                {className:'table'},
                React.DOM.tbody(
                    {className: 'tbody'},
                        goodsTable
                )
            )
        );
    },


});