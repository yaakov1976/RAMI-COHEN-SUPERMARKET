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
    public class clubMembers : ControllerBase
    {
        private readonly ClubMembersContext _context;

        public clubMembers(ClubMembersContext context)
        {
            _context = context;
        }

        // GET: api/clubMembers
        [HttpGet]
        public IEnumerable<ClubMembersDetails> GetclubMembers()
        {
            return _context.clubMembers;
        }

        // GET: api/clubMembers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetClubMembersDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var clubMembersDetails = await _context.clubMembers.FindAsync(id);

            if (clubMembersDetails == null)
            {
                return NotFound();
            }

            return Ok(clubMembersDetails);
        }

        // PUT: api/clubMembers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClubMembersDetails([FromRoute] int id, [FromBody] ClubMembersDetails clubMembersDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != clubMembersDetails.id)
            {
                return BadRequest();
            }

            _context.Entry(clubMembersDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClubMembersDetailsExists(id))
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

        // POST: api/clubMembers
        [HttpPost]
        public async Task<IActionResult> PostClubMembersDetails([FromBody] ClubMembersDetails clubMembersDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.clubMembers.Add(clubMembersDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClubMembersDetails", new { id = clubMembersDetails.id }, clubMembersDetails);
        }

        // DELETE: api/clubMembers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClubMembersDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var clubMembersDetails = await _context.clubMembers.FindAsync(id);
            if (clubMembersDetails == null)
            {
                return NotFound();
            }

            _context.clubMembers.Remove(clubMembersDetails);
            await _context.SaveChangesAsync();

            return Ok(clubMembersDetails);
        }

        private bool ClubMembersDetailsExists(int id)
        {
            return _context.clubMembers.Any(e => e.id == id);
        }
    }
}