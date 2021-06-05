using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DeliveryOrdersApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly ILogger<OrderController> _logger;

        public OrderController(ILogger<OrderController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Order> GetOrders()
        {
            var rng = new Random();

            return new List<Order>() 
            {
                new Order()
                {
                    OrderNumber = new Guid("11111111-2222-3333-4444-555555555555"),
                    SenderCity = "Югорск",
                    SenderAddress = "Гастелло 15 - 32",
                    RecipientCity = "SPB",
                    RecipientAddress = "asd",
                    CargoWeight = 123.45d,
                    PickUpDate = DateTime.Now
                },
                new Order()
                {
                    OrderNumber = new Guid("11111111-2222-3333-4444-555555555555"),
                    SenderCity = "Югорск",
                    SenderAddress = "Гастелло 15 - 32",
                    RecipientCity = "SPB",
                    RecipientAddress = "asd",
                    CargoWeight = 123.45d,
                    PickUpDate = DateTime.Now
                }
            };
            //return Enumerable.Range(1, 5).Select(index => new Order
            //{
            //    OrderNumber = new Guid("11111111-2222-3333-4444-555555555555"),
            //    SenderCity = "Югорск",
            //    SenderAddress = "Гастелло 15 - 32",
            //    RecipientCity = "SPB",
            //    RecipientAddress = "asd",
            //    CargoWeight = 123.45d,
            //    Date = DateTime.Now.AddDays(index)
            //})
            //.ToArray();
        }

        [HttpPost]
        public IEnumerable<Order> AddOrder(Order order)
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Order
            {
                SenderCity = "Югорск",
                SenderAddress = "Гастелло 15 - 32",
                //Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
