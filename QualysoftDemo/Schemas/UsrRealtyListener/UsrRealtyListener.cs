namespace Terrasoft.Configuration {
    using System;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    using Terrasoft.Common;

    [EntityEventListener(SchemaName = "UsrRealty")]
    public class ActivityEntityEventListener : BaseEntityEventListener
    {
        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            Entity realty = (Entity)sender;
            decimal price = realty.GetTypedColumnValue<decimal>("UsrPriceEUR");
            if (price > 1000000)
            {
                e.IsCanceled = true;
                string sourceCodeName = "UsrRealtyListener";
                string errorMessageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage, sourceCodeName,
                "LocalizableStrings.ValueIsTooBigErrorText.Value");
                string errorMessage = String.Format(errorMessageTemplate, price);
                throw new Exception(errorMessage);
            }
        }
    }
}
