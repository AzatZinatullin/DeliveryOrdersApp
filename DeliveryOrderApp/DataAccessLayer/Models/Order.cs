using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryOrdersApp
{
    public record Order
    {     
        public long Id { get; set; }

        [Required(ErrorMessage = "������� ����� �����������")]
        public string SenderCity { get; set; }

        [Required(ErrorMessage = "������� ����� �����������")]
        public string SenderAddress { get; set; }

        [Required(ErrorMessage = "������� ����� ����������")]
        public string RecipientCity { get; set; }

        [Required(ErrorMessage = "������� ����� �����������")]
        public string RecipientAddress { get; set; }

        [Required(ErrorMessage = "������� ��� �����")]
        public double CargoWeight { get; set; }

        [Required(ErrorMessage = "������� ���� ������ �����")]
        public DateTime PickUpDate { get; set; }
    }
}
