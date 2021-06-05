﻿using DeliveryOrdersApp.DataAccessLayer.Data;
using DeliveryOrdersApp.DataAccessLayer.Abstraction;
using System.Collections.Generic;
using System.Linq;

namespace DeliveryOrdersApp.DataAccessLayer.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly DeliveryOrderContext _context;

        public OrderRepository(DeliveryOrderContext context)
        {
            _context = context;
        }

        public IReadOnlyList<Order> GetOrders()
        {
            return _context.Orders.ToList();
        }

        public void AddOrder(Order order)
        {
            _context.Orders.Add(order);
            _context.SaveChanges();
        }
    }
}
