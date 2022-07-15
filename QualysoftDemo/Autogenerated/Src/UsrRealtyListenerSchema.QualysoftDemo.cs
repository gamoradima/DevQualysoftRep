namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyListenerSchema

	/// <exclude/>
	public class UsrRealtyListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyListenerSchema(UsrRealtyListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("d99f80ba-d596-4d91-addb-fdf55a0450ec");
			Name = "UsrRealtyListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d05371e5-5ce7-4952-a9d8-e2739a163c1d");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,146,77,139,219,48,16,134,239,134,254,135,193,39,27,130,105,175,117,187,176,9,110,9,108,63,72,156,94,202,30,20,121,226,85,145,37,163,145,179,155,150,252,247,234,35,219,198,113,22,118,78,70,126,231,209,251,206,72,177,14,169,103,28,161,70,99,24,233,157,45,22,90,237,68,59,24,102,133,86,240,39,1,87,3,9,213,194,250,64,22,187,242,236,228,188,203,96,81,41,43,172,64,122,133,164,168,246,168,44,149,111,94,144,118,157,86,101,18,126,254,12,61,135,208,112,39,156,5,133,38,91,243,7,236,216,87,231,31,62,66,186,33,179,66,38,237,33,205,239,67,79,63,108,165,224,192,37,35,130,91,110,197,222,19,166,28,120,15,115,70,120,229,79,192,196,244,103,64,189,119,30,69,131,176,215,162,129,111,106,169,8,141,117,230,51,189,253,133,220,2,161,106,208,204,32,18,231,184,115,161,3,247,214,180,4,152,255,3,254,71,251,218,58,19,197,57,238,153,131,121,57,18,70,46,152,144,214,69,207,226,65,30,245,99,109,131,92,116,76,66,111,4,247,99,138,77,197,103,180,245,161,199,102,161,229,208,169,31,76,14,248,225,36,189,201,252,40,191,123,125,181,89,165,23,119,139,29,100,145,117,3,239,222,134,202,71,130,113,38,95,88,44,105,193,20,71,137,141,115,96,205,128,229,68,68,214,248,245,147,30,12,199,133,110,112,178,214,231,165,164,167,247,114,165,219,237,69,155,47,72,196,90,172,177,235,37,179,158,161,240,17,238,52,103,82,252,102,91,137,235,32,206,78,147,216,184,105,187,231,174,220,226,220,91,47,86,24,45,172,173,54,142,50,187,112,52,155,92,157,78,200,84,132,121,46,169,214,122,46,218,202,155,170,241,201,198,227,203,129,190,96,223,217,142,180,226,147,54,29,179,217,181,108,179,184,214,43,68,251,96,244,99,8,94,61,113,236,125,180,17,225,162,229,152,140,191,142,201,49,249,11,161,156,241,153,24,4,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigErrorTextLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigErrorTextLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("6ed57939-bf7c-8dda-cfb4-bba478dd2d5d"),
				Name = "ValueIsTooBigErrorText",
				CreatedInPackageId = new Guid("d05371e5-5ce7-4952-a9d8-e2739a163c1d"),
				CreatedInSchemaUId = new Guid("d99f80ba-d596-4d91-addb-fdf55a0450ec"),
				ModifiedInSchemaUId = new Guid("d99f80ba-d596-4d91-addb-fdf55a0450ec")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("d99f80ba-d596-4d91-addb-fdf55a0450ec"));
		}

		#endregion

	}

	#endregion

}

