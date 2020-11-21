using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ramiCohenCs.Migrations.Orders
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "orders",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    fullName = table.Column<string>(type: "varchar(50)", nullable: false),
                    phonNumber = table.Column<int>(type: "int", nullable: false),
                    email = table.Column<string>(type: "varchar(50)", nullable: false),
                    address = table.Column<string>(type: "varchar(50)", nullable: false),
                    delivery = table.Column<string>(type: "varchar(50)", nullable: false),
                    order_numberOfUnits = table.Column<string>(type: "varchar(50)", nullable: false),
                    totalPrice = table.Column<string>(type: "varchar(10)", nullable: false),
                    personalGreeting = table.Column<string>(type: "varchar(50)", nullable: false),
                    orderStatus = table.Column<string>(type: "varchar(50)", nullable: false),
                    remarks = table.Column<string>(type: "varchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_orders", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "orders");
        }
    }
}
