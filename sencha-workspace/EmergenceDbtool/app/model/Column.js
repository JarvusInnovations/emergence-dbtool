Ext.define('EmergenceDbtool.model.Column', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'Field',
        type: 'string'
    },{
        name: 'Type',
        type: 'string'
    },{
        name: 'Null',
        type: 'string'
    },{
        name: 'Key',
        type: 'string'
    },{
        name: 'Default',
        type: 'auto'
    },{
        name: 'Extra',
        type: 'string'
    }]

});
