namespace DeliveryOrdersApp.DataAccess.Data
{
    public static class DbInitializer
    {
        public static void Initialize(DeliveryOrderContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}
