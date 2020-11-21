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
    public class orders : ControllerBase
    {
        private readonly OrdersContext _context;

        public orders(OrdersContext context)
        {
            _context = context;
        }

        // GET: api/orders
        [HttpGet]
        public IEnumerable<OrdersDetails> Getorders()
        {
            return _context.orders;
        }

        // GET: api/orders/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrdersDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var ordersDetails = await _context.orders.FindAsync(id);

            if (ordersDetails == null)
            {
                return NotFound();
            }

            return Ok(ordersDetails);
        }

        // PUT: api/orders/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrdersDetails([FromRoute] int id, [FromBody] OrdersDetails ordersDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ordersDetails.id)
            {
                return BadRequest();
            }

            _context.Entry(ordersDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrdersDetailsExists(id))
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

        // POST: api/orders
        [HttpPost]
        public async Task<IActionResult> PostOrdersDetails([FromBody] OrdersDetails ordersDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.orders.Add(ordersDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrdersDetails", new { id = ordersDetails.id }, ordersDetails);
        }

        // DELETE: api/orders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrdersDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var ordersDetails = await _context.orders.FindAsync(id);
            if (ordersDetails == null)
            {
                return NotFound();
            }

            _context.orders.Remove(ordersDetails);
            await _context.SaveChangesAsync();

            return Ok(ordersDetails);
        }

        private bool OrdersDetailsExists(int id)
        {
            return _context.orders.Any(e => e.id == id);
        }
    }
}