Ext.define('EmergenceDbtool.store.Databases', {
    extend: 'Ext.data.TreeStore',

    model: 'EmergenceDbtool.model.RootTreeItem',
    rootVisible: true,

    proxy: {
        type: 'ajax',
        url: 'http://test.emergence.local/dbtool/tables',
        reader: {
            typeProperty: 'mtype'
        }
    },

    listeners: {
        beforeload: function(store, operation){
            var node = operation.node;

            if (node) {
                operation.setParams({
                    type: node.get('mtype').split('.').pop(),
                    parent: node.get('Name')
                });
            }
        }
    }

});
