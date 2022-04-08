#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ClientsApi.Models;
using X.PagedList;

namespace ClientsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly ClientsContext _context;

        public ClientsController(ClientsContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<GetClientsDto>> GetClients()
        {

            var clients = from c in _context.Clients
                            select c;

            // pagina atual é 1 por padrão. Pode ser mudada conforme a query
            int currentPage = 1;

            var queryKeys = Request.Query.Keys;

            if (queryKeys.Contains("page")) 
            {
                var pageQuery = Request.Query["page"];

                int.TryParse(pageQuery.First(), out currentPage);
            }

            if (queryKeys.Contains("name"))
            {
                var name = Request.Query["name"].ToString();
                clients = clients
                        .Where(c => c.Name.Contains(name));
            }

            var result = await clients
                .Include(c => c.Addresses)
                .Include(c => c.Cellphones)
                .ToPagedListAsync(currentPage, 10);

            return new GetClientsDto(){
                Clients = await result.ToListAsync(),
                TotalItems = result.TotalItemCount
            }; 
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(long id)
        {
            var client = await _context.Clients
                            .Include(c => c.Addresses)
                            .Include(c => c.Cellphones)
                            .Where(c => c.Id == id)
                            .FirstAsync();

            if (client == null)
            {
                return NotFound();
            }

            return client;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutClient(long id, Client client)
        {
            if (id != client.Id)
            {
                return BadRequest();
            }

            _context.Entry(client).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(id))
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

        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            _context.Clients.Add(client);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClient", new { id = client.Id }, client);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClient(long id)
        {
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }

            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClientExists(long id)
        {
            return _context.Clients.Any(e => e.Id == id);
        }
    }
}
