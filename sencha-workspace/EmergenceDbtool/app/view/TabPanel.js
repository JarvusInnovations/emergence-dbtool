Ext.define('EmergenceDbtool.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'dbtool-tabpanel',

    listeners: {
        add: function(container, component) {
            container.setActiveTab(component);
        }
    }
});

