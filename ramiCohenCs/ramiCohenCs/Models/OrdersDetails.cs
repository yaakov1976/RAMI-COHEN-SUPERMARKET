using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ramiCohenCs.Models
{
    public class OrdersDetails
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string fullName { get; set; }

        [Required]
        [Column(TypeName = "int")]
        public int phonNumber { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string email { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string address { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string delivery { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string order_numberOfUnits { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        public string totalPrice { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string personalGreeting { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string orderStatus { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string remarks { get; set; }
    }
}