Ext.define('EmergenceDbtool.model.RootTreeItem', {
    extend: 'Ext.data.Model',

    //childType: 'EmergenceDbtool.model.Database'
    //childType: 'Database'

    fields: [{
        name: 'mtype',
        type: 'string',
        defaultValue: 'EmergenceDbtool.model.RootTreeItem'
    }]

});
