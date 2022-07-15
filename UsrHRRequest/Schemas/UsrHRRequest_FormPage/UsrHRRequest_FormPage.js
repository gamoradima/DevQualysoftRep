define("UsrHRRequest_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeftAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"color": "#CBF4DB",
					"borderRadius": "large"
				}
			},
			{
				"operation": "merge",
				"name": "ControlGroupContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					}
				}
			},
			{
				"operation": "insert",
				"name": "Button_sg4ee24",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_sg4ee24_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"clicked": {
						"request": "crt.SaveRecordRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Button_hgdac9x",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_hgdac9x_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName"
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_xtphjtz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_xtphjtz_label)#",
					"control": "",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto"
				},
				"parentName": "ControlGroupContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrHRRequest"
					},
					"scope": "page"
				}
			},
			"primaryDataSourceName": "PDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});