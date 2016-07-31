Ext.define('EmergenceDbtool.store.Table', {
    extend: 'Ext.data.Store',

    model: 'EmergenceDbtool.model.Table',

    config: {
        pageSize: 0
    },

    proxy: {
        type: 'ajax',
        url: 'http://test.emergence.local/dbtool/tables',
        extraParams: {
            type: 'table'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
