using Microsoft.EntityFrameworkCore;

namespace DeliveryOrdersApp.DataAccess.Data
{
    public class DeliveryOrderContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }

        public DeliveryOrderContext(DbContextOptions<DeliveryOrderContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>()
                .ToTable("Orders")
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();
        }
    }
}
