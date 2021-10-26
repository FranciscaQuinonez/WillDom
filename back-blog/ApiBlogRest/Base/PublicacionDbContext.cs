using ApiBlogRest.modelo;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiBlogRest.Base
{
    public class PublicacionDbContext : DbContext
    {

        public PublicacionDbContext(DbContextOptions<PublicacionDbContext> options) : base(options)
        {


        }

        public DbSet<Publicacion> Publicacion { get; set; }

    }
}
