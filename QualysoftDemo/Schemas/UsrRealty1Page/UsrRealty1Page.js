define("UsrRealty1Page", ["ServiceHelper"], function(ServiceHelper) {
	return {
		entitySchemaName: "UsrRealty",
		attributes: {
			"CommissionEUR": {
				"dataValueType": Terrasoft.DataValueType.FLOAT,
				"type": Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				"value": 0,
                dependencies: [
                    {
                        /* The [CommissionEUR] column value depends on the [UsrPriceEUR] and [UsrOfferType] column values. */
                        columns: ["UsrPriceEUR", "UsrOfferType"],
                        /* The handler method that is called when any of the managing column value changes. */
                        methodName: "calculateCommission"
                    }
                ]				
			},
			"UsrOfferType": {
				"lookupListConfig": {
					"columns": [
						"UsrCommissionCoeff", "UsrJustInt"
					]
				}
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrRealtyFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrRealty"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onEntityInitialized: function() {
				this.callParent(arguments);
				this.calculateCommission();
			},
			
			calculateCommission: function() {
				var price = this.get("UsrPriceEUR");
				var offerTypeObject = this.get("UsrOfferType");
				var coeff = 0;
				if (offerTypeObject) {
					coeff = offerTypeObject.UsrCommissionCoeff;
				}
				var result = price * coeff;
				this.set("CommissionEUR", result);
			},
			onMyButtonClick: function() {
				this.console.log("Edit page button pressed.");
				var typeObject = this.get("UsrType");
				if (!typeObject) {
					return;
				}
				var typeId = typeObject.value;
				var offerTypeObject = this.get("UsrOfferType");
				if (!offerTypeObject) {
					return;
				}
				var offerTypeId = offerTypeObject.value;
				var serviceData = {
					realtyTypeId: typeId,
					realtyOfferTypeId: offerTypeId
				};				
				this.console.log("1");
				ServiceHelper.callService("RealtyService", "GetTotalAmountByTypeId", this.getWebServiceResult, serviceData, this);
				this.console.log("2");
			},
			getWebServiceResult: function(response, success) {
				this.console.log("3");
				this.Terrasoft.showInformation("Total amount by typeId: " + response.GetTotalAmountByTypeIdResult);
			},
			
			getMyButtonEnabled: function() {
				var result = true;
				return result;
			},
			positiveValueValidator: function(value, column) {
				// this.get("UsrPriceEUR") .... not universal
				var msg = "";
				if (value < 0) {
					msg = this.get("Resources.Strings.ValueMustBeGreaterThanZero");
				}
				return {
					invalidMessage: msg
				};				
			},
            /* Overload the base method that initalizes the custom validators. */
            setValidationConfig: function() {
                /* Call the initialization of the parent view model's validators. */
                this.callParent(arguments);
                this.addColumnValidator("UsrPriceEUR", this.positiveValueValidator);
                this.addColumnValidator("UsrArea", this.positiveValueValidator);
            }
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
            {
                /* The operation of inserting the element to the page is in progress. */
                "operation": "insert",
                /* The meta name of the parent container to which the button is added. */
                "parentName": "LeftContainer",
                /* The button is added to the element collection of the parent element. */
                "propertyName": "items",
                /* The meta name of the added button. */
                "name": "MyEditPageButton",
                /* Properties passed to the element’s constructor. */
                "values": {
                    /* The type of the added element is a button. */
                    "itemType": Terrasoft.ViewItemType.BUTTON,
                    /* Bind the button title to the localizable schema string. */
                    "caption": {bindTo: "Resources.Strings.MyEditPageButtonCaption"},
                    /* Bind the button click handler method. */
                    "click": {bindTo: "onMyButtonClick"},
                    /* The display style of the button. */
                    "style": Terrasoft.controls.ButtonEnums.style.RED,
                    /* Bind the button availability property. */
                    "enabled": {bindTo: "getMyButtonEnabled"}
                }
            },			
			{
				"operation": "insert",
				"name": "UsrNameb24f709f-8d5b-41d7-9a7e-70a58d5a1662",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT2f7f83aa-39e7-420f-b49b-363acc12cfae",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPriceEUR",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOATb2c185a7-acf5-4b31-96f7-a827c97271c5",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrArea",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CommissionControl",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CommissionEUR",
					"enabled": false,
					"caption": {bindTo: "Resources.Strings.CommissionCaption"}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP35af016a-a710-41b4-a1c0-ad352da03495",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP7115a824-f36d-4c3c-a5d1-db46b86d6fb0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrOfferType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING1c60ac1f-63d0-4172-8d2f-8e729dc07706",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
