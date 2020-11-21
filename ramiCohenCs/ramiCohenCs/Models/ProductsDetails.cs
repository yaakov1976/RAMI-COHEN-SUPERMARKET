using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ramiCohenCs.Models
{
    public class ProductsDetails
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string productName { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string productDescription { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string category { get; set; }

        [Required]
        [Column(TypeName = "varchar(200)")]
        public string imageAddress { get; set; }

        [Required]
        [Column(TypeName = "float")]
        public float price { get; set; }

        [Required]
        [Column(TypeName = "float")]
        public float weight { get; set; }

        [Required]
        [Column(TypeName = "float")]
        public float totalPrice { get; set; }
    }
}