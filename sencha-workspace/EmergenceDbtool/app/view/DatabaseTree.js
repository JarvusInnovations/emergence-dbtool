Ext.define('EmergenceDbtool.view.DatabaseTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'dbtool-databasetree',

    store: 'Databases',

    rootVisible: false,
    displayField: 'Name',

    listeners: {
        rowclick: function(cmp, record) {
            //console.log('rowclick: '+ record.$className);
            //console.log('mtype: '+ record.get('mtype'));
            //console.log(record);
        }
    }

});
