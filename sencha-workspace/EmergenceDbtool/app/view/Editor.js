Ext.define('EmergenceDbtool.view.Editor', {
    extend: 'Ext.Panel',
    xtype: 'dbtool-editor',
    requires: [
        'Jarvus.monaco.Editor'
    ],

    layout: 'fit',

    items: [{
        xtype: 'jarvus-monaco-editor',
        language: 'sql',
        source: 'dev',
        content: [
            'SELECT ID, FirstName, Lastname',
            'FROM people',
            'WHERE Lastname = "Barkley"'
        ].join('\n')
    }]

});

