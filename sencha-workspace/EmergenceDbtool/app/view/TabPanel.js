Ext.define('EmergenceDbtool.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'dbtool-tabpanel',

    listeners: {
        add: function(container, component) {
            container.setActiveTab(component);
        }
    },

    tabBar:{
        //plain:true,
        items:[{
            xtype: 'tbfill'
        },{
            text:'SQL',
            iconCls: 'x-fa fa-plus-circle',
            closable: false,
            action: 'newsql'
        }]
    }
});

