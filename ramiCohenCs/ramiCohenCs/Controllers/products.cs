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
    public class products : ControllerBase
    {
        private readonly ProductsContext _context;

        public products(ProductsContext context)
        {
            _context = context;
        }

        // GET: api/products
        [HttpGet]
        public IEnumerable<ProductsDetails> Getproducts()
        {
            return _context.products;
        }

        // GET: api/products/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductsDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productsDetails = await _context.products.FindAsync(id);

            if (productsDetails == null)
            {
                return NotFound();
            }

            return Ok(productsDetails);
        }

        // PUT: api/products/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductsDetails([FromRoute] int id, [FromBody] ProductsDetails productsDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productsDetails.id)
            {
                return BadRequest();
            }

            _context.Entry(productsDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductsDetailsExists(id))
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

        // POST: api/products
        [HttpPost]
        public async Task<IActionResult> PostProductsDetails([FromBody] ProductsDetails productsDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.products.Add(productsDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductsDetails", new { id = productsDetails.id }, productsDetails);
        }

        // DELETE: api/products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductsDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productsDetails = await _context.products.FindAsync(id);
            if (productsDetails == null)
            {
                return NotFound();
            }

            _context.products.Remove(productsDetails);
            await _context.SaveChangesAsync();

            return Ok(productsDetails);
        }

        private bool ProductsDetailsExists(int id)
        {
            return _context.products.Any(e => e.id == id);
        }
    }
}