using DeliveryOrdersApp.DataAccess.Abstraction;
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
        }

        [HttpPost]
        public IActionResult AddOrder(Order order)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _orderRepository.AddOrder(order);
            return Ok(order);
        }
    }
}
