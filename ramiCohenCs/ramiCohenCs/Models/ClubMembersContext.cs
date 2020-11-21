using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ramiCohenCs.Models;

namespace ramiCohenCs.Models
{
    public class ClubMembersContext:DbContext
    {
        public ClubMembersContext(DbContextOptions<ClubMembersContext> options): base(options)
        {

        }
        public DbSet<ClubMembersDetails> clubMembers { get; set; }
    }
}
