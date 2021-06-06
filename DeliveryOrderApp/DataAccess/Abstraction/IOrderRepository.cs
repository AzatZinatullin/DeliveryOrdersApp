using System.Collections.Generic;

namespace DeliveryOrdersApp.DataAccess.Abstraction
{
    public interface IOrderRepository
    {
        IReadOnlyList<Order> GetOrders();

        void AddOrder(Order order);
    }
}
