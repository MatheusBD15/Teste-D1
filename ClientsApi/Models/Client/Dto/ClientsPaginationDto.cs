namespace ClientsApi.Models
{
    public class GetClientsDto
    {
        public List<Client>? Clients { get; set; }

        public int TotalItems { get; set; }
    }
}