using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ramiCohenCs.Models
{
    public class ClubMembersDetails
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string name { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string email { get; set; }
        
    }
}