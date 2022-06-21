using Microsoft.EntityFrameworkCore;
using YummyTSD.Models;

namespace YummyTSD.Data
{
  public class MvcRecipeContext : DbContext
  {
    public MvcRecipeContext(DbContextOptions<MvcRecipeContext> options)
        : base(options)
    {
    }

    public DbSet<Recipe> Recipe { get; set; }
  }
}
