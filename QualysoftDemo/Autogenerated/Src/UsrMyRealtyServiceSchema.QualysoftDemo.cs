namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrMyRealtyServiceSchema

	/// <exclude/>
	public class UsrMyRealtyServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrMyRealtyServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrMyRealtyServiceSchema(UsrMyRealtyServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("26159a6e-cd0d-4cb1-b921-7bacda84bfd4");
			Name = "UsrMyRealtyService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d05371e5-5ce7-4952-a9d8-e2739a163c1d");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,208,211,3,0,17,155,221,16,3,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("26159a6e-cd0d-4cb1-b921-7bacda84bfd4"));
		}

		#endregion

	}

	#endregion

}

