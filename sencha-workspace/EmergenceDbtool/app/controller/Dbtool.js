Ext.define('EmergenceDbtool.controller.Dbtool', {
    extend: 'Ext.app.Controller',
    requires: [
        'EmergenceDbtool.view.TableGrid'
    ],

    // entry points
    control: {
        'dbtool-container': {
            render: 'onContainerRender'
        },
        'dbtool-tabpanel button[action="newsql"]': {
            click: 'onNewsqlButtonClick'
        },
        'dbtool-databasetree': {
            beforeitemdblclick: 'onDatabaseTreeBeforeItemDblClick'
        }
    },

    listen: {
        store: {
            '#Databases': {
                load: 'onDatabasesStoreLoad'
            },
            '#Table': {
                load: 'onTableStoreLoad'
            }
        }
    },


    // controller configurations
    views: [
        'Container',
        'DatabaseTree',
        'TabPanel',
        'Editor'
    ],

    stores: [
        'Databases',
        'Table'
    ],

    refs: {
/*
        tableList: {
            selector: 'dbtool-tablelist',
            autoCreate: true,
            xtype: 'dbtool-tablelist'
        }
*/
        containerTabPanel: 'dbtool-container tabpanel'
    },


    // event handlers
    onContainerRender: function() {
        //this.getTablesStore().load();
    },

    onTableListRender: function(list) {
        list.getStore().load();
    },

    onNewsqlButtonClick: function() {
        console.log('button click!!!');
        var tabpanel = this.getContainerTabPanel(),
            editor = Ext.create('EmergenceDbtool.view.Editor', {
                title: 'edit'
            });

        tabpanel.add(editor);
    },

    onDatabasesStoreLoad: function(store) {
        if (store) { return false;}
        //console.log(store.getRange());
    },

    onTableStoreLoad: function(store, records, success, operation) {
        if (store) { return false;}
        //console.log(store.getRange());
        console.log(records);
        console.log(operation);
    },

    onDatabaseTreeBeforeItemDblClick: function(cmp, record) {
        var me = this,
            db = record.get('db');
        console.log('onDbtoolDatabaseTreeItemDblClick');
        console.log(record.get('db'));
        console.log(cmp);
        console.log(record.get('Type'));
        console.log(record.get('Name'));
        if (record.get('Type')==='table') {
            console.log('loading store...');
            this.getTableStore().load({
                params: {
                    parent: record.get('Name')
                },
                callback: me.buildGrid.bind(me,db)
            });
        }
        return false; // stop tree expansion TODO: maybe allow dblclick expansion for certain types
    },

    // custom controller methods
    buildGrid: function(db, records, operation, success) {
        if (!success) { return; }

        var meta = operation.getProxy().getReader().metaData,
            cols = meta.Columns,
            colsLength = cols.length,
            columns = [],
            fields = [],
            i = 0,
            column, field, col;

        for (; i<colsLength; i++) {
            col = cols[i];

            column = {
                text: col.Field,
                dataIndex: col.Field
            };
            columns.push(column);

            field = {
                name: col.Field,
                type: 'string'
            };
            fields.push(field);
        }

        var model = Ext.create('Ext.data.Model',{
            idProperty: 'ID',
            fields: fields
        });

        var grid = Ext.create('EmergenceDbtool.view.TableGrid', {
            title: meta.Name,
            columns: columns,
            closeable: true,
            store: {
                model: model,
                proxy: {
                    type: 'ajax',
                    url: 'http://test.emergence.local/dbtool/table',
                    extraParams: {
                        db: db,
                        table: meta.Name
                    }
                }
            }
        });

        this.getContainerTabPanel().add(grid);

    }
});
