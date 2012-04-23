Ext.define("LDBTest.view.HierarchySearch", {
	extend : 'Ext.form.Panel',
	xtype : 'hierarchysearch',
	
	requires: [
	           'Ext.field.Select',
	           'Ext.form.FieldSet'
	           ],
	           
	config: {
		autoSize: true,
		
		title : 'Hierarchy Search',
		
        items: [{
            xtype: 'selectfield',
            name: 'sector',
            prependText: 'Hierarchy:',
            options: [
                {text: 'All',            value: ''},
                {text: 'Agriculture',    value: 'agriculture'},
                {text: 'Transportation', value: 'transportation'},
                {text: 'Services',       value: 'services'},
                {text: 'Clothing',       value: 'clothing'},
                {text: 'Health',         value: 'health'},
                {text: 'Retail',         value: 'retail'},
                {text: 'Manufacturing',  value: 'manufacturing'},
                {text: 'Arts',           value: 'arts'},
                {text: 'Housing',        value: 'housing'},
                {text: 'Food',           value: 'food'},
                {text: 'Wholesale',      value: 'wholesale'},
                {text: 'Construction',   value: 'construction'},
                {text: 'Education',      value: 'education'},
                {text: 'Personal Use',   value: 'personal'},
                {text: 'Entertainment',  value: 'entertainment'},
                {text: 'Green',          value: 'green'}
            ]
        } 
        ]
	}
});