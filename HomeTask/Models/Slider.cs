using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HomeTask.Models
{
    public class Slider
    {
       [Key]
       public int SlideId { get; set; }
       [Required,StringLength(255)]
       public string Image { get; set; }
      

    }
}
