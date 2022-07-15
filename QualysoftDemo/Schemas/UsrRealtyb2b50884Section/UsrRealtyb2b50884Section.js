define("UsrRealtyb2b50884Section", [], function() {
	return {
		entitySchemaName: "UsrRealty",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
		/* Metadata to add the the custom button page. */
            {
                /* The operation of inserting the element to the page is in progress. */
                "operation": "insert",
                /* The meta name of the parent container to which the button is added. */
                "parentName": "CombinedModeActionButtonsCardLeftContainer",
                /* The button is added to the element collection of the parent element. */
                "propertyName": "items",
                /* The meta name of the added button. */
                "name": "MySectionButton",
                /* Properties passed to the element’s constructor. */
                "values": {
                    /* The type of the added element is a button. */
                    "itemType": Terrasoft.ViewItemType.BUTTON,
                    /* Bind the button title to the localizable schema string. */
                    "caption": {bindTo: "Resources.Strings.MySectionButtonCaption"},
                    /* Bind the button click handler method. */
                    "click": {bindTo: "onMyButtonClick"},
                    /* The display style of the button. */
                    "style": Terrasoft.controls.ButtonEnums.style.GREEN,
                    /* Bind the button availability property. */
                    "enabled": {bindTo: "getMyButtonEnabled"}
                }
            }
		]/**SCHEMA_DIFF*/,
		methods: {
			onMyButtonClick: function() {
				this.console.log("Test section button pressed.");
			},
			getMyButtonEnabled: function() {
				var result = true;
				return result;
			}
		}
	};
});
