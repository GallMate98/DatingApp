using Microsoft.EntityFrameworkCore;
namespace API.Data
{
    public class Datacontext:DbContext
    {
        public Datacontext( DbContextOptions options): base(options) 
        {

        }
        public DbSet<Entities.AppUsers> Users {get; set;}
    }

    public class Dbcontext
    {
    }
}