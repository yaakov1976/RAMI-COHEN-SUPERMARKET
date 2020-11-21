using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ramiCohenCs.Models
{
    public class InvoiceItemDetails
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName = "int")]
        public int invoice_id { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string product_name { get; set; }

        [Required]
        [Column(TypeName = "float")]
        public float quantity { get; set; }
    }
}