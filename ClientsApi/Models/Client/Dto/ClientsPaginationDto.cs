namespace ClientsApi.Models
{
    public class GetClientsDto
    {
        public List<Client>? Clients { get; set; }

        public int CurrentPage { get; set; }
        public int PageNumber { get; set; }
    }
}