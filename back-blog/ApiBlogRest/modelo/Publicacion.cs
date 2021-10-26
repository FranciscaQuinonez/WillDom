using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ApiBlogRest.modelo
{
    public class Publicacion
    {
        [Key]
        public int Id { get; set; }
        public String Cabecera { get; set; }
        public String Detalle { get; set; }
        public String FechaHora { get; set; }
        public String ClasePublicacion { get; set; }
    }
}
