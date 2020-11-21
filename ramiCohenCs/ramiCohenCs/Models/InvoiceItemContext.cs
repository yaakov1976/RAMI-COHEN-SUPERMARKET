using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ramiCohenCs.Models
{
    public class InvoiceItemContext:DbContext
    {
        public InvoiceItemContext(DbContextOptions<InvoiceItemContext> options) : base(options)
        {

        }
        public DbSet<InvoiceItemDetails> invoiceItem { get; set; }
    }
}
