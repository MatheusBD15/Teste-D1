#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ClientsApi.Models;

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
            List<Client> clients;

            // pagina atual é 1 por padrão. Pode ser mudada conforme a query
            int currentPage = 1;

            var queryKeys = Request.Query.Keys;

            // pega por paginação
            if (queryKeys.Contains("page"))
            {
                var pageQuery = Request.Query["page"];

                // tenta converter a query para um valor numérico. Se não funciona, retorna 404
                int parsedPageNumber = 0;
                var queryIsParsed = int.TryParse(pageQuery.First(), out parsedPageNumber);

                if (!queryIsParsed)
                {
                    return BadRequest();
                }

                // utiliza a query criada
                clients = await _context.Clients
                        .Where(c => c.Id > parsedPageNumber * 10)
                        .Take(10)
                        .OrderBy(c => c.Id)
                        .ToListAsync();
                
                if (clients.Count() == 0)
                {
                    return NotFound();
                }

                currentPage = parsedPageNumber;
            }

            else if (queryKeys.Contains("name"))
            {
                clients = await _context.Clients
                        .Where(c => c.Name == Request.Query["name"].ToString())
                        .Take(10)
                        .OrderBy(c => c.Id)
                        .ToListAsync();
                
                if (clients.Count() == 0)
                {
                    return NotFound();
                }
            }

            else 
            {
                clients = await _context.Clients
                    .Take(10)
                    .OrderBy(c => c.Id)
                    .ToListAsync();
            }

            // dividindo por 10, por ter 10 itens por página
            var pageNumber = Math.Ceiling(_context.Clients.Count<Client>() / 10.0);

            return new GetClientsDto(){
                Clients = clients,
                PageNumber = (int)pageNumber,
                CurrentPage = currentPage
            }; 
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(long id)
        {
            var client = await _context.Clients.FindAsync(id);

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
