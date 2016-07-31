Ext.define('EmergenceDbtool.view.TableList', {
    extend: 'Ext.grid.Panel',
    xtype: 'dbtool-tablelist',

    store: 'Tables',

    hideHeaders: true,
    emptyText: 'No tables found',
    scrollable: true,

    plugins : [{
        ptype: 'rowexpander',
        pluginId: 'courseListGridExpander',
        expandOnDblClick: false,
        rowBodyTpl: [
            '<tpl for="Columns">',
                '<div>{Field}</div>',
            '</tpl>'
        ]
    }],

    columns: [
        {text: 'Name', dataIndex: 'Name', flex: 1}
    ],

/*
tpl: [
    'list:',
    '<ul class="dbtool-tablelist-list">',
        '<tpl for=".">',
            '<li class="dbtool-tablelist-item">{Name}</li>',
            '<ul class="dbtool-tablelist-column-list">',
                '<tpl for="Columns">',
                    '<li class="dbtool-tablelist-item2">{Field}</li>',
                '</tpl>',
            '</ul>',
        '</tpl>',
    '</ul>'
    ],
    tpl: [
        '<ul class="dbtool-tablelist-list">',

            '<tpl for=".">',
                '<li class="dbtool-tablelist-item <tpl if="columns">has-columns</tpl> tableName="{Name}">',

                    '<div class="flex-ct">',
                        '<div class="dbtool-tablelist-nub is-clickable"></div>', // TODO: ARIA it up
                        '<div class="dbtool-tablelist-data">{Name}</div>',
                    '</div>',

                    '<tpl if="columns">',
                        '<ul class="dbtool-tablelist-sublist">',

                            '<tpl for="columns">',
                                '<li class="dbtool-tablelist-item tableName="{Name}">',

                                    '<div class="flex-ct">',
                                        '<div class="dbtool-tablelist-nub"></div>',
                                        '<div class="dbtool-tablelist-data">{Field}</div>',
                                    '</div>',

                                '</li>',
                            '</tpl>',

                        '</ul>',
                    '</tpl>',

                '</li>',
            '</tpl>',

        '</ul>'
    ],
*/

    listeners: {
        scope: 'this',
        click: {
            fn: 'onTreeClick',
            element: 'el'
        }
    },

    onTreeClick: function(ev, t) {
        var target = Ext.get(t),
            parentEl,tableName;

        if (target.is('.dbtool-tablelist-nub.is-clickable')) {
            target.up('.dbtool-tablelist-item').toggleCls('is-expanded');
        } else {
            parentEl = target.up('.dbtool-tablelist-item');
            if (parentEl) {
                tableName = parentEl.dom.getAttribute('tableName');
                this.fireEvent('itemclick',tableName);
            }
        }
    }

});
