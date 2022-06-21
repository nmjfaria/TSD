using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using YummyTSD.Models;

namespace YummyTSD.Data
{
    public class YummyTSDContext : DbContext
    {
        public YummyTSDContext (DbContextOptions<YummyTSDContext> options)
            : base(options)
        {
        }

        public DbSet<YummyTSD.Models.Recipe> Recipe { get; set; }
    }
}
