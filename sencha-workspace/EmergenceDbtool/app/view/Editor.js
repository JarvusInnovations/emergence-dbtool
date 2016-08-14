Ext.define('EmergenceDbtool.view.Editor', {
    extend: 'Ext.Panel',
    xtype: 'dbtool-editor',
    requires: [
        'Jarvus.monaco.Editor'
    ],

    layout: 'fit',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'combobox',
            queryMode: 'local',
            displayField: 'Name',
            store: {
                type: 'chained',
                source: 'Databases',
                filters: [
                    function(rec) {
                        return (rec.get('mtype')==='EmergenceDbtool.model.Database');
                    }
                ]
            }
        },{
            xtype: 'button',
            text: 'Execute',
            action: 'execute-sql'
        }]
    }],

    items: [{
        xtype: 'jarvus-monaco-editor',
        language: 'sql',
        source: 'dev',
        subscribe: [
            'onMouseDown'
        ],
        content: [
            'SELECT ID, FirstName, Lastname',
            'FROM people',
            'WHERE Lastname = "Barkley"'
        ].join('\n')
    }]

});

