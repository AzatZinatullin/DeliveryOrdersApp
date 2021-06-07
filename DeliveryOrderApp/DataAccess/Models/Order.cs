using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryOrdersApp
{
    public record Order
    {     
        public long Id { get; set; }

        [Required(ErrorMessage = "Sender city is required")]
        public string SenderCity { get; set; }

        [Required(ErrorMessage = "Sender address is required")]
        public string SenderAddress { get; set; }

        [Required(ErrorMessage = "Recipient city is required")]
        public string RecipientCity { get; set; }

        [Required(ErrorMessage = "Recipient address is required")]
        public string RecipientAddress { get; set; }

        [Required(ErrorMessage = "Cargo weight is required")]
        public double CargoWeight { get; set; }

        [Required(ErrorMessage = "Pick up date is required")]
        public DateTime PickUpDate { get; set; }
    }
}
