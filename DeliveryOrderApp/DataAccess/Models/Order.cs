using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryOrdersApp
{
    public record Order
    {     
        public long Id { get; set; }

        [Required(ErrorMessage = "Укажите город отправителя")]
        public string SenderCity { get; set; }

        [Required(ErrorMessage = "Укажите адрес отправителя")]
        public string SenderAddress { get; set; }

        [Required(ErrorMessage = "Укажите город получателя")]
        public string RecipientCity { get; set; }

        [Required(ErrorMessage = "Укажите адрес отправителя")]
        public string RecipientAddress { get; set; }

        [Required(ErrorMessage = "Укажите вес груза")]
        public double CargoWeight { get; set; }

        [Required(ErrorMessage = "Укажите дату забора груза")]
        public DateTime PickUpDate { get; set; }
    }
}
