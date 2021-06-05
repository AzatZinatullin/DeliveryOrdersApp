using Microsoft.EntityFrameworkCore;

namespace DeliveryOrdersApp.DAL.DBContext
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("DefaultConnection");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>()
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();
        }
    }
}
