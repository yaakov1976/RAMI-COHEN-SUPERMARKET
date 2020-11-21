using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ramiCohenCs.Models;

namespace ramiCohenCs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class invoiceItem : ControllerBase
    {
        private readonly InvoiceItemContext _context;

        public invoiceItem(InvoiceItemContext context)
        {
            _context = context;
        }

        // GET: api/invoiceItem
        [HttpGet]
        public IEnumerable<InvoiceItemDetails> GetinvoiceItem()
        {
            return _context.invoiceItem;
        }

        // GET: api/invoiceItem/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetInvoiceItemDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var invoiceItemDetails = await _context.invoiceItem.FindAsync(id);

            if (invoiceItemDetails == null)
            {
                return NotFound();
            }

            return Ok(invoiceItemDetails);
        }

        // PUT: api/invoiceItem/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvoiceItemDetails([FromRoute] int id, [FromBody] InvoiceItemDetails invoiceItemDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != invoiceItemDetails.id)
            {
                return BadRequest();
            }

            _context.Entry(invoiceItemDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvoiceItemDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/invoiceItem
        [HttpPost]
        public async Task<IActionResult> PostInvoiceItemDetails([FromBody] InvoiceItemDetails invoiceItemDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.invoiceItem.Add(invoiceItemDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInvoiceItemDetails", new { id = invoiceItemDetails.id }, invoiceItemDetails);
        }

        // DELETE: api/invoiceItem/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvoiceItemDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var invoiceItemDetails = await _context.invoiceItem.FindAsync(id);
            if (invoiceItemDetails == null)
            {
                return NotFound();
            }

            _context.invoiceItem.Remove(invoiceItemDetails);
            await _context.SaveChangesAsync();

            return Ok(invoiceItemDetails);
        }

        private bool InvoiceItemDetailsExists(int id)
        {
            return _context.invoiceItem.Any(e => e.id == id);
        }
    }
}