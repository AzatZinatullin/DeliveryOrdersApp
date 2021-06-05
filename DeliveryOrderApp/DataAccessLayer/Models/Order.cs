using System;

namespace DeliveryOrdersApp
{
    public record Order
    {     
        public Guid OrderNumber { get; set; }

        public string SenderCity { get; set; }

        public string SenderAddress { get; set; }

        public string RecipientCity { get; set; }

        public string RecipientAddress { get; set; }

        public double CargoWeight { get; set; }

        public DateTime PickUpDate { get; set; }
    }
}
