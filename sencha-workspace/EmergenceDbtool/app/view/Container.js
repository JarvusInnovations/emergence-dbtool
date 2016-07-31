Ext.define('EmergenceDbtool.view.Container', {
    extend: 'Ext.Panel',
    xtype: 'dbtool-container',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'dbtool-databasetree',
        title: 'Emergence DB Tool',
        width: 220
    },{
        xtype: 'dbtool-tabpanel',
        flex: 10
    }]

});

