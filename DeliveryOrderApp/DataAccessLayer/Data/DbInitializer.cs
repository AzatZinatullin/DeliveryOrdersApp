namespace DeliveryOrdersApp.DataAccessLayer.Data
{
    public static class DbInitializer
    {
        public static void Initialize(DeliveryOrderContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}
