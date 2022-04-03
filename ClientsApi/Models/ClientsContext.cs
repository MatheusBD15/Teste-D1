using Microsoft.EntityFrameworkCore;

namespace ClientsApi.Models
{
    public class ClientsContext : DbContext
    {
        public ClientsContext(DbContextOptions<ClientsContext> options)
            : base(options)
        {
        }

        public DbSet<Client> Clients { get; set; } = null!;
        public DbSet<Cellphone> Cellphones { get; set; } = null!;
        public DbSet<Address> Addresses { get; set; } = null!;
        
    }
}