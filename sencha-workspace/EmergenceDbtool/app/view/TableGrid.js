Ext.define('EmergenceDbtool.view.TableGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'dbtool-tablegrid',

    emptyText: 'No data found',
    scrollable: true,

    listeners: {
        render: function(grid) {
            console.log('GRID RENDER!!!!!');
            console.log(grid.getStore());
            grid.getStore().load();
        }
    }
});
