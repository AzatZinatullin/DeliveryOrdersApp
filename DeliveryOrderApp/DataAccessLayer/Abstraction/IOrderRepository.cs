using System.Collections.Generic;

namespace DeliveryOrdersApp.DataAccessLayer.Abstraction
{
    public interface IOrderRepository
    {
        IReadOnlyList<Order> GetOrders();

        void AddOrder(Order order);
    }
}
