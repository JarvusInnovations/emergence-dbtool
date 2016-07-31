Ext.define('EmergenceDbtool.model.Database', {
    extend: 'Ext.data.Model',

    //childType: 'EmergenceDbtool.model.Table',

    fields: [{
        name: 'mtype',
        type: 'string',
        defaultValue: 'EmergenceDbtool.model.Database'
    },{
        name: 'Name',
        type: 'string'
    },{
        name: 'Type',
        type: 'string'
    }]

});
