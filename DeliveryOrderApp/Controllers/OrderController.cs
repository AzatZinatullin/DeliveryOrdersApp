using DeliveryOrdersApp.DataAccessLayer.Abstraction;
using Microsoft.AspNetCore.Mvc;

namespace DeliveryOrdersApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;

        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpGet]
        public IActionResult GetOrders()
        {
            return Ok(_orderRepository.GetOrders());
            //return new List<Order>() 
            //{
            //    new Order()
            //    {
            //        Id = 1,
            //        SenderCity = "Югорск",
            //        SenderAddress = "Гастелло 15 - 32",
            //        RecipientCity = "SPB",
            //        RecipientAddress = "asd",
            //        CargoWeight = 123.45d,
            //        PickUpDate = DateTime.Now
            //    },
            //    new Order()
            //    {
            //        Id = 2,
            //        SenderCity = "Югорск",
            //        SenderAddress = "Гастелло 15 - 32",
            //        RecipientCity = "SPB",
            //        RecipientAddress = "asd",
            //        CargoWeight = 123.45d,
            //        PickUpDate = DateTime.Now
            //    }
            //};
        }

        [HttpPost]
        public IActionResult AddOrder(Order order)
        {
            _orderRepository.AddOrder(order);
            return Ok();
        }
    }
}
